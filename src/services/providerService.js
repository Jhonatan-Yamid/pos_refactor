export function normalizeProviderPayload(payload) {
  return {
    name: payload?.name?.toString().trim() ?? "",
    description: payload?.description?.toString().trim() ?? null,
    accountNumber: payload?.accountNumber?.toString().trim() ?? "",
    phone: payload?.phone?.toString().trim() ?? null,
  };
}

export function validateProviderPayload(payload) {
  if (!payload.name) {
    return "El nombre del proveedor es requerido.";
  }

  if (!payload.accountNumber) {
    return "El número de cuenta es requerido.";
  }

  return null;
}

export function buildProviderCreateInput(payload) {
  return {
    name: payload.name,
    description: payload.description || null,
    accountNumber: payload.accountNumber,
    phone: payload.phone || null,
  };
}

export function buildProviderUpdateInput(payload) {
  return {
    name: payload.name,
    description: payload.description || null,
    accountNumber: payload.accountNumber,
    phone: payload.phone || null,
  };
}
