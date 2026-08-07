//🚨🚨🚨ESTE ES SOLO USADO POR EL HOOK DE USESALEFORMLOGIC PARA LOOS AVAILE PRODUCTOS AND ADDITIONS

import db from '@/libs/db';
import { ok, fail, withErrorHandling } from '@/libs/apiResponse';
import {
  buildProductCreateInput,
  buildProductUpdateInput,
  normalizeProductPayload,
  validateProductPayload,
} from '@/services/productService';

export const GET = withErrorHandling(async (request) => {
  const url = new URL(request.url);
  const searchQuery = url.searchParams.get('search') || '';
  const categoryQuery = url.searchParams.get('category');

  const whereClause = {};

  if (searchQuery) {
    whereClause.name = {
      contains: searchQuery,
      mode: 'insensitive',
    };
  }

  if (categoryQuery) {
    whereClause.category = categoryQuery;
  } else {
    whereClause.category = { not: 'Adiciones' };
  }

  const products = await db.product.findMany({
    where: whereClause,
    select: {
      id: true,
      name: true,
      price: true,
      category: true,
      quantity: true,
      barcode: true,
      typeUnity: true,
    },
  });

  return ok(products);
}, 'Error al obtener productos');

export const POST = withErrorHandling(async (request) => {
  const data = await request.json();
  const payload = normalizeProductPayload(data);
  const validationError = validateProductPayload(payload);

  if (validationError) {
    return fail(validationError, 400);
  }

  const createdProduct = await db.product.create({
    data: buildProductCreateInput(payload),
  });

  return ok(createdProduct, 201);
}, 'Error al crear producto');

export const PUT = withErrorHandling(async (request) => {
  const data = await request.json();
  const id = parseInt(data?.id, 10);

  if (!id || Number.isNaN(id)) {
    return fail('ID del producto es requerido', 400);
  }

  const payload = normalizeProductPayload(data);
  const validationError = validateProductPayload(payload);

  if (validationError) {
    return fail(validationError, 400);
  }

  const updatedProduct = await db.product.update({
    where: { id },
    data: buildProductUpdateInput(payload),
  });

  await db.productIngredient.deleteMany({ where: { productId: id } });

  await Promise.all(
    payload.selectedIngredients.map((ingredientId) =>
      db.productIngredient.create({
        data: {
          productId: id,
          ingredientId,
          quantity: 1,
        },
      })
    )
  );

  return ok(updatedProduct);
}, 'Error al actualizar producto');


export const DELETE = withErrorHandling(async (request) => {
  const data = await request.json();
  const id = parseInt(data?.id, 10);

  if (!id || Number.isNaN(id)) {
    return fail('ID del producto es requerido', 400);
  }

  await db.productIngredient.deleteMany({
    where: { productId: id },
  });

  await db.product.delete({
    where: { id },
  });

  return ok({ message: 'Producto eliminado' });
}, 'Error al eliminar producto');
