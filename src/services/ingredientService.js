export function parseIngredientQuantity(quantity) {
  if (quantity === 'insuficiente' || quantity === null || quantity === undefined) {
    return null;
  }

  const parsed = Number(quantity);
  return Number.isFinite(parsed) ? parsed : null;
}

export function normalizeIngredientPayload(payload) {
  return {
    name: payload?.name?.toString().trim() ?? '',
    description: payload?.description?.toString().trim() ?? null,
    quantity: parseIngredientQuantity(payload?.quantity),
    price: payload?.price !== undefined ? Number(payload.price) : NaN,
    typeUnity: payload?.typeUnity?.toString().trim() ?? '',
    Origin: payload?.Origin?.toString().trim() ?? 'Desconocido',
    providerId: payload?.providerId ? Number(payload.providerId) : null,
    actualizar: payload?.actualizar === true,
  };
}

export function validateIngredientPayload(payload) {
  if (!payload.name) {
    return 'El nombre del ingrediente es requerido.';
  }

  if (!Number.isFinite(payload.price)) {
    return 'El precio del ingrediente debe ser un número válido.';
  }

  if (!payload.typeUnity) {
    return 'El tipo de unidad del ingrediente es requerido.';
  }

  return null;
}

export function buildIngredientCreateInput(payload) {
  return {
    name: payload.name,
    description: payload.description,
    quantity: payload.quantity,
    price: payload.price,
    typeUnity: payload.typeUnity,
    Origin: payload.Origin,
    providerId: payload.providerId,
  };
}

export function buildIngredientUpdateInput(payload) {
  return {
    name: payload.name,
    description: payload.description,
    quantity: payload.quantity,
    price: payload.price,
    typeUnity: payload.typeUnity,
    updatedAt: new Date(),
    Origin: payload.Origin,
    providerId: payload.providerId,
  };
}

export function validateIngredientBulkUpdate(data) {
  if (!Array.isArray(data)) {
    return 'Datos inválidos, se esperaba un arreglo.';
  }

  for (const item of data) {
    if (
      typeof item.id !== 'number' ||
      (typeof item.quantity !== 'string' && typeof item.quantity !== 'number' && item.quantity !== null)
    ) {
      return "Todos los elementos deben tener un 'id' y 'quantity' válidos.";
    }
  }

  return null;
}
