import db from "@/libs/db";
import { ok, fail, withErrorHandling } from "@/libs/apiResponse";
import {
  buildIngredientCreateInput,
  buildIngredientUpdateInput,
  normalizeIngredientPayload,
  parseIngredientQuantity,
  validateIngredientPayload,
  validateIngredientBulkUpdate,
} from "@/services/ingredientService";

export const GET = withErrorHandling(async () => {
  const ingredients = await db.ingredient.findMany();
  return ok(ingredients);
}, "Error al obtener ingredientes");

export const POST = withErrorHandling(async (request) => {
  const data = await request.json();
  const payload = normalizeIngredientPayload(data);
  const validationError = validateIngredientPayload(payload);

  if (validationError) {
    return fail(validationError, 400);
  }

  const createdIngredient = await db.ingredient.create({
    data: buildIngredientCreateInput(payload),
  });

  return ok(createdIngredient, 201);
}, "Error al crear ingrediente");

export const PUT = withErrorHandling(async (request) => {
  const data = await request.json();

  // Edición individual de un ingrediente (viene desde el formulario CRUD)
  if (data.actualizar === true) {
    const payload = normalizeIngredientPayload(data);

    if (!data.id || typeof data.id !== "number") {
      return fail("ID inválido para actualización.", 400);
    }

    const validationError = validateIngredientPayload(payload);
    if (validationError) {
      return fail(validationError, 400);
    }

    const updatedIngredient = await db.ingredient.update({
      where: { id: data.id },
      data: buildIngredientUpdateInput(payload),
    });

    return ok(updatedIngredient);
  }

  const bulkValidationError = validateIngredientBulkUpdate(data);
  if (bulkValidationError) {
    return fail(bulkValidationError, 400);
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
        data: { quantity: parseIngredientQuantity(quantity), updatedAt: new Date() },
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
