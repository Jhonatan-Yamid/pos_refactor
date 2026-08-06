/**
 * Wrapper delgado sobre fetch para llamadas JSON desde el cliente.
 * Centraliza headers, el manejo de errores y el parseo de la respuesta
 * para que cada componente no repita el mismo boilerplate try/catch.
 *
 * IMPORTANTE: esto es solo para las llamadas del navegador hacia nuestras
 * propias rutas /api/*. No se usa para el endpoint de la impresora, que
 * conserva su propia lógica intacta.
 */
export async function apiRequest(url, { method = "GET", body } = {}) {
  const res = await fetch(url, {
    method,
    headers: body ? { "Content-Type": "application/json" } : undefined,
    body: body !== undefined ? JSON.stringify(body) : undefined,
  });

  let data = null;
  try {
    data = await res.json();
  } catch {
    // algunas respuestas (204, etc.) pueden no traer body
  }

  if (!res.ok) {
    const message = data?.message || `Error en la petición (${res.status})`;
    throw new Error(message);
  }

  return data;
}

export const apiGet = (url) => apiRequest(url);
export const apiPost = (url, body) => apiRequest(url, { method: "POST", body });
export const apiPut = (url, body) => apiRequest(url, { method: "PUT", body });
export const apiDelete = (url, body) => apiRequest(url, { method: "DELETE", body });
