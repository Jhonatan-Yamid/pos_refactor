import db from "@/libs/db";
import { ok, fail, withErrorHandling } from "@/libs/apiResponse";

const parseQuantity = (quantity) =>
  quantity === "insuficiente" || quantity === null || quantity === undefined
    ? null
    : parseFloat(quantity);

export const GET = withErrorHandling(async () => {
  const ingredients = await db.ingredient.findMany();
  return ok(ingredients);
}, "Error al obtener ingredientes");

export const POST = withErrorHandling(async (request) => {
  const data = await request.json();

  const createdIngredient = await db.ingredient.create({
    data: {
      name: data.name,
      description: data.description,
      quantity: parseQuantity(data.quantity),
      price: parseFloat(data.price),
      typeUnity: data.typeUnity,
      Origin: data.Origin,
      providerId: data.providerId ? Number(data.providerId) : null,
    },
  });

  return ok(createdIngredient, 201);
}, "Error al crear ingrediente");

export const PUT = withErrorHandling(async (request) => {
  const data = await request.json();

  // Edición individual de un ingrediente (viene desde el formulario CRUD)
  if (data.actualizar === true) {
    const { id, name, description, quantity, price, typeUnity, Origin, providerId } = data;

    if (!id || typeof id !== "number") {
      return fail("ID inválido para actualización.", 400);
    }

    const updatedIngredient = await db.ingredient.update({
      where: { id },
      data: {
        name,
        description,
        quantity: parseQuantity(quantity),
        price: parseFloat(price),
        typeUnity,
        updatedAt: new Date(),
        Origin,
        providerId: providerId ? Number(providerId) : null,
      },
    });

    return ok(updatedIngredient);
  }

  // Actualización masiva de inventario (viene como arreglo [{id, quantity}])
  if (!Array.isArray(data)) {
    return fail("Datos inválidos, se esperaba un arreglo.", 400);
  }

  for (const { id, quantity } of data) {
    if (
      typeof id !== "number" ||
      (typeof quantity !== "string" && typeof quantity !== "number" && quantity !== null)
    ) {
      return fail("Todos los elementos deben tener un 'id' y 'quantity' válidos.", 400);
    }
  }

  await Promise.all(
    data.map(({ id, quantity }) =>
      db.ingredient.update({
        where: { id },
        data: { quantity: parseQuantity(quantity), updatedAt: new Date() },
      })
    )
  );

  return ok({ message: "Ingredientes actualizados correctamente." });
}, "Error actualizando ingredientes");

export const DELETE = withErrorHandling(async (request) => {
  const { id } = await request.json();

  if (!id) {
    return fail("ID del ingrediente es requerido.", 400);
  }

  await db.ingredient.delete({ where: { id: parseInt(id) } });
  return ok({ message: "Ingrediente eliminado." });
}, "Error al eliminar ingrediente");
