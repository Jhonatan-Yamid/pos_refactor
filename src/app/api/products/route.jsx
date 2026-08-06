import db from "@/libs/db";
import { ok, fail, withErrorHandling } from "@/libs/apiResponse";

// Obtener todos los productos (para la lista) o uno con sus ingredientes (para editar)
export const GET = withErrorHandling(async (request) => {
  const id = request.nextUrl.searchParams.get("id");

  if (id) {
    const product = await db.product.findUnique({
      where: { id: parseInt(id) },
      include: { ingredients: { include: { ingredient: true } } },
    });
    return ok(product);
  }

  // La lista de productos no muestra ingredientes en la UI, así que no los
  // traemos aquí — antes se pedía esa relación completa en cada carga de la
  // lista sin usarla, lo cual era una consulta más pesada de lo necesario.
  const products = await db.product.findMany({
    orderBy: { name: "asc" },
  });

  return ok(products);
}, "Error al obtener productos");

// Crear un nuevo producto con ingredientes
export const POST = withErrorHandling(async (request) => {
  const data = await request.json();
  const { name, description, price, category, ingredients, quantity, typeUnity, barcode } = data;

  const created = await db.product.create({
    data: {
      name,
      description,
      price: parseFloat(price),
      quantity: quantity ? parseFloat(quantity) : null,
      typeUnity,
      barcode,
      category,
      ingredients: {
        create: (ingredients || []).map((item) => ({
          ingredient: { connect: { id: item.ingredientId } },
          quantity: item.quantity,
        })),
      },
    },
  });

  return ok(created, 201);
}, "Error al crear producto");

export const PUT = withErrorHandling(async (request) => {
  const data = await request.json();

  // Actualización masiva de inventario (arreglo [{id, quantity}])
  if (Array.isArray(data)) {
    await Promise.all(
      data.map((item) =>
        db.product.update({
          where: { id: parseInt(item.id) },
          data: {
            quantity: item.quantity === "Insuficiente" ? null : parseFloat(item.quantity),
          },
        })
      )
    );
    return ok({ message: "Inventario actualizado" });
  }

  // Actualización de un solo producto
  const { id, name, description, price, category, ingredients, quantity, typeUnity, barcode } = data;

  const updated = await db.product.update({
    where: { id: parseInt(id) },
    data: {
      name,
      description,
      price: parseFloat(price),
      quantity: quantity ? parseFloat(quantity) : null,
      typeUnity,
      barcode,
      category,
      ingredients: ingredients
        ? {
            deleteMany: {},
            create: ingredients.map((item) => ({
              ingredient: { connect: { id: item.ingredientId } },
              quantity: item.quantity,
            })),
          }
        : undefined,
    },
  });

  return ok(updated);
}, "Error al actualizar producto");

// Eliminar producto
export const DELETE = withErrorHandling(async (request) => {
  const { id } = await request.json();

  // Elimina relaciones antes de eliminar producto (integridad referencial)
  await db.product.update({
    where: { id: parseInt(id) },
    data: { ingredients: { deleteMany: {} } },
  });

  await db.product.delete({ where: { id: parseInt(id) } });
  return ok({ message: "Producto eliminado." });
}, "Error al eliminar producto");
