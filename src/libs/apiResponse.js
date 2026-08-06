import { NextResponse } from "next/server";

/**
 * Helpers para respuestas de rutas API. Evitan repetir
 * NextResponse.json({...}, {status}) y el try/catch de error en cada
 * endpoint. Solo cambia el "empaquetado" de la respuesta — nunca el
 * contenido ni la forma de los datos que ya se enviaban.
 */
export const ok = (data, status = 200) => NextResponse.json(data, { status });

export const fail = (message, status = 500, extra = {}) =>
  NextResponse.json({ message, ...extra }, { status });

/**
 * Envuelve un handler de ruta para capturar errores inesperados y
 * responder con un 500 consistente, igual que hacían los try/catch
 * repetidos en cada endpoint.
 */
export function withErrorHandling(handler, defaultMessage) {
  return async (...args) => {
    try {
      return await handler(...args);
    } catch (error) {
      console.error(defaultMessage, error);
      return fail(defaultMessage, 500, { error: error.message });
    }
  };
}
