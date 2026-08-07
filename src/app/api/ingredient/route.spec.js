import { beforeEach, describe, expect, it, vi } from 'vitest';
import { GET, POST, PUT, DELETE } from './route';
import db from '@/libs/db';

vi.mock('@/libs/db', () => ({
  default: {
    ingredient: {
      findMany: vi.fn(),
      create: vi.fn(),
      update: vi.fn(),
      delete: vi.fn(),
    },
  },
}));

describe('src/app/api/ingredient/route', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('GET returns ingredient list', async () => {
    db.ingredient.findMany.mockResolvedValue([{ id: 1, name: 'Tomate' }]);
    const request = new Request('http://localhost/api/ingredient');

    const response = await GET(request);
    expect(response.status).toBe(200);
    expect(await response.json()).toEqual([{ id: 1, name: 'Tomate' }]);
    expect(db.ingredient.findMany).toHaveBeenCalled();
  });

  it('POST returns 400 when payload is invalid', async () => {
    const request = new Request('http://localhost/api/ingredient', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: '', price: '', typeUnity: '' }),
    });

    const response = await POST(request);
    expect(response.status).toBe(400);
    expect(await response.json()).toEqual({ message: 'El nombre del ingrediente es requerido.' });
  });

  it('POST creates an ingredient when payload is valid', async () => {
    const created = {
      id: 2,
      name: 'Tomate',
      description: 'Fresco',
      quantity: 10,
      price: 2500,
      typeUnity: 'kg',
      Origin: 'Campo',
      providerId: 1,
    };
    db.ingredient.create.mockResolvedValue(created);

    const request = new Request('http://localhost/api/ingredient', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Tomate',
        description: 'Fresco',
        quantity: '10',
        price: '2500',
        typeUnity: 'kg',
        Origin: 'Campo',
        providerId: '1',
      }),
    });

    const response = await POST(request);
    expect(response.status).toBe(201);
    expect(await response.json()).toEqual(created);
    expect(db.ingredient.create).toHaveBeenCalledWith({
      data: {
        name: 'Tomate',
        description: 'Fresco',
        quantity: 10,
        price: 2500,
        typeUnity: 'kg',
        Origin: 'Campo',
        providerId: 1,
      },
    });
  });

  it('PUT returns 400 when id is missing for update', async () => {
    const request = new Request('http://localhost/api/ingredient', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ actualizar: true, id: null, name: 'Tomate' }),
    });

    const response = await PUT(request);
    expect(response.status).toBe(400);
    expect(await response.json()).toEqual({ message: 'ID inválido para actualización.' });
  });

  it('DELETE removes an ingredient when id is provided', async () => {
    db.ingredient.delete.mockResolvedValue({});
    const request = new Request('http://localhost/api/ingredient', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: 3 }),
    });

    const response = await DELETE(request);
    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({ message: 'Ingrediente eliminado.' });
    expect(db.ingredient.delete).toHaveBeenCalledWith({ where: { id: 3 } });
  });
});
