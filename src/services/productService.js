export function normalizeProductPayload(payload) {
  return {
    name: payload?.name?.toString().trim() ?? "",
    description: payload?.description?.toString().trim() ?? "",
    price: payload?.price !== undefined ? Number(payload.price) : NaN,
    category: payload?.category?.toString().trim() ?? "",
    quantity:
      payload?.quantity !== undefined && payload?.quantity !== null && payload?.quantity !== ""
        ? Number(payload.quantity)
        : null,
    typeUnity: payload?.typeUnity?.toString().trim() ?? "",
    selectedIngredients: Array.isArray(payload?.selectedIngredients)
      ? payload.selectedIngredients
          .map((id) => (typeof id === "string" ? parseInt(id, 10) : id))
          .filter((id) => Number.isInteger(id))
      : [],
  };
}

export function validateProductPayload(payload) {
  if (!payload.name) {
    return "El nombre del producto es requerido.";
  }

  if (!Number.isFinite(payload.price)) {
    return "El precio del producto debe ser un número válido.";
  }

  if (!payload.category) {
    return "La categoría del producto es requerida.";
  }

  if (!Array.isArray(payload.selectedIngredients)) {
    return "selectedIngredients debe ser un arreglo.";
  }

  return null;
}

export function buildProductCreateInput(payload) {
  return {
    name: payload.name,
    description: payload.description || null,
    price: payload.price,
    category: payload.category,
    quantity: payload.quantity,
    typeUnity: payload.typeUnity || null,
    ingredients: {
      create: payload.selectedIngredients.map((ingredientId) => ({
        quantity: 1,
        ingredient: { connect: { id: ingredientId } },
      })),
    },
  };
}

export function buildProductUpdateInput(payload) {
  return {
    name: payload.name,
    description: payload.description || null,
    price: payload.price,
    category: payload.category,
    quantity: payload.quantity,
    typeUnity: payload.typeUnity || null,
  };
}
