import { beforeEach, describe, expect, it, vi } from 'vitest';
import { GET, POST, DELETE } from './route';
import db from '@/libs/db';

vi.mock('@/libs/db', () => ({
  default: {
    sale: {
      findMany: vi.fn(),
      create: vi.fn(),
      findUnique: vi.fn(),
    },
    saleProduct: {
      create: vi.fn(),
    },
    saleProductAddition: {
      create: vi.fn(),
      deleteMany: vi.fn(),
    },
    productIngredient: {
      findMany: vi.fn(),
    },
    ingredient: {
      findUnique: vi.fn(),
      update: vi.fn(),
    },
    $transaction: vi.fn(),
  },
}));

describe('src/app/api/sale/route', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('GET returns sales list', async () => {
    const sales = [{ id: 1, totalAmount: 100 }];
    db.sale.findMany.mockResolvedValue(sales);

    const request = new Request('http://localhost/api/sale');
    const response = await GET(request);

    expect(response.status).toBe(200);
    expect(await response.json()).toEqual(sales);
    expect(db.sale.findMany).toHaveBeenCalled();
  });

  it('POST returns 400 when products missing', async () => {
    const request = new Request('http://localhost/api/sale', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ products: [] }),
    });

    const response = await POST(request);
    expect(response.status).toBe(400);
    expect(await response.json()).toEqual({ message: 'Debe seleccionar al menos un producto' });
  });

  it('POST creates a sale when payload is valid', async () => {
    const newSale = { id: 10 };
    const finalSale = { id: 10, totalAmount: 200 };

    db.sale.create.mockResolvedValue(newSale);
    db.productIngredient.findMany.mockResolvedValue([]);
    db.sale.findUnique.mockResolvedValue(finalSale);

    const payload = {
      tableNumber: 1,
      saleStatus: 'en proceso',
      totalAmount: 200,
      products: [{ id: 1, quantity: 2, additions: [] }],
    };

    const request = new Request('http://localhost/api/sale', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const response = await POST(request);
    expect(response.status).toBe(201);
    expect(await response.json()).toEqual(finalSale);
    expect(db.sale.create).toHaveBeenCalled();
  });

  it('DELETE removes a sale when id is provided', async () => {
    const prismaMock = {
      saleProduct: {
        findMany: vi.fn().mockResolvedValue([]),
        deleteMany: vi.fn().mockResolvedValue({}),
      },
      productIngredient: { findMany: vi.fn().mockResolvedValue([]) },
      ingredient: { findUnique: vi.fn(), update: vi.fn() },
      saleProductAddition: { deleteMany: vi.fn().mockResolvedValue({}) },
      sale: { delete: vi.fn().mockResolvedValue({}) },
    };

    db.$transaction.mockImplementationOnce(async (fn) => fn(prismaMock));

    const request = new Request('http://localhost/api/sale?id=5');
    const response = await DELETE(request);

    expect(response.status).toBe(200);
    expect((await response.json()).message).toContain('Venta con ID');
  });
});
