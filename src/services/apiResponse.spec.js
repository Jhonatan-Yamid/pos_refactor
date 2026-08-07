import { describe, expect, it } from 'vitest';
import { ok, fail, withErrorHandling } from '@/libs/apiResponse';

describe('apiResponse helpers', () => {
  it('ok returns JSON response with default 200 status', async () => {
    const response = ok({ success: true });
    const json = await response.json();

    expect(response.status).toBe(200);
    expect(json).toEqual({ success: true });
  });

  it('ok returns JSON response with custom status', async () => {
    const response = ok({ created: true }, 201);
    const json = await response.json();

    expect(response.status).toBe(201);
    expect(json).toEqual({ created: true });
  });

  it('fail returns JSON response with default 500 status', async () => {
    const response = fail('Error inesperado');
    const json = await response.json();

    expect(response.status).toBe(500);
    expect(json).toEqual({ message: 'Error inesperado' });
  });

  it('fail returns JSON response with custom status and extra data', async () => {
    const response = fail('Bad request', 400, { code: 'BAD_REQUEST' });
    const json = await response.json();

    expect(response.status).toBe(400);
    expect(json).toEqual({ message: 'Bad request', code: 'BAD_REQUEST' });
  });

  it('withErrorHandling wraps a handler and returns a response', async () => {
    const wrapped = withErrorHandling(async () => ok({ ok: true }), 'Fallback error');
    const response = await wrapped();
    const json = await response.json();

    expect(response.status).toBe(200);
    expect(json).toEqual({ ok: true });
  });

  it('withErrorHandling returns a fallback response when handler throws', async () => {
    const wrapped = withErrorHandling(async () => {
      throw new Error('Boom');
    }, 'Fallback error');

    const response = await wrapped();
    const json = await response.json();

    expect(response.status).toBe(500);
    expect(json).toEqual({ message: 'Fallback error', error: 'Boom' });
  });
});
