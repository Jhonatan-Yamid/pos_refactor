import { describe, expect, it, beforeAll, afterAll } from 'vitest';
import { PrismaClient } from '../../../../prisma/@prisma/client-test';
import { GET, POST, PUT, DELETE } from './route';

const prisma = new PrismaClient();

async function makeRequest(method, url, body) {
  return new Request(url, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: body ? JSON.stringify(body) : null,
  });
}

describe('ingredient route integration tests', () => {
  let ingredientId;

  beforeAll(async () => {
    await prisma.$connect();
    await prisma.ingredient.deleteMany().catch(() => {});
  });

  afterAll(async () => {
    await prisma.ingredient.deleteMany().catch(() => {});
    await prisma.$disconnect();
  });

  it('POST creates an ingredient', async () => {
    const request = await makeRequest('POST', 'http://localhost/api/ingredient', {
      name: 'Ingrediente Int',
      description: 'Test',
      quantity: '10',
      price: '500',
      typeUnity: 'kg',
      Origin: 'Test',
    });

    const response = await POST(request);
    const body = await response.json();

    expect(response.status).toBe(201);
    expect(body).toMatchObject({ name: 'Ingrediente Int', price: 500, quantity: 10 });
    expect(body).toHaveProperty('id');

    ingredientId = body.id;
  });

  it('GET returns the ingredient list', async () => {
    const request = new Request('http://localhost/api/ingredient');
    const response = await GET(request);
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(Array.isArray(body)).toBe(true);
    expect(body.some((item) => item.id === ingredientId)).toBe(true);
  });

  it('PUT updates an ingredient', async () => {
    const request = await makeRequest('PUT', 'http://localhost/api/ingredient', {
      actualizar: true,
      id: ingredientId,
      name: 'Ingrediente Int Actualizado',
      description: 'Test update',
      quantity: '20',
      price: '750',
      typeUnity: 'kg',
      Origin: 'Test',
    });

    const response = await PUT(request);
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body.name).toBe('Ingrediente Int Actualizado');
    expect(body.quantity).toBe(20);
  });

  it('DELETE removes an ingredient', async () => {
    const request = await makeRequest('DELETE', 'http://localhost/api/ingredient', {
      id: ingredientId,
    });

    const response = await DELETE(request);
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body).toEqual({ message: 'Ingrediente eliminado.' });
  });
});
