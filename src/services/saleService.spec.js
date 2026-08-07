import {
  normalizeSalePayload,
  validateSalePayload,
  buildSaleRequestPayload,
  calculateTotal,
  buildPrintRequestBody,
} from './saleService';

describe('saleService', () => {
  describe('normalizeSalePayload', () => {
    it('normaliza campos simples', () => {
      const input = {
        tableNumber: 5,
        saleStatus: 'en proceso',
        generalObservation: 'Sin sal',
        totalAmount: '12345',
        products: [{ id: '1', quantity: '2' }],
        game: '2',
        orderType: 'En mesa',
      };

      const normalized = normalizeSalePayload(input);
      expect(normalized.totalAmount).toBe(12345);
      expect(Array.isArray(normalized.products)).toBe(true);
      expect(normalized.products[0].id).toBe('1');
    });

    it('devuelve valores por defecto', () => {
      const normalized = normalizeSalePayload({});
      expect(normalized.products).toEqual([]);
      expect(Number.isNaN(normalized.totalAmount)).toBe(true);
    });
  });

  describe('validateSalePayload', () => {
    it('retorna error si no hay productos', () => {
      const payload = normalizeSalePayload({ products: [] });
      expect(validateSalePayload(payload)).toBe('Debe seleccionar al menos un producto');
    });

    it('retorna error si totalAmount no es número', () => {
      const payload = normalizeSalePayload({ products: [{ id: 1, quantity: 1 }] });
      expect(validateSalePayload(payload)).toBe('El total de la venta debe ser un número válido.');
    });

    it('valida un payload correcto', () => {
      const payload = normalizeSalePayload({ products: [{ id: 1, quantity: 1 }], totalAmount: 100 });
      expect(validateSalePayload(payload)).toBeNull();
    });
  });

  describe('buildSaleRequestPayload', () => {
    it('normaliza productos y ajusta mesa para fruver', () => {
      const payload = buildSaleRequestPayload({
        businessType: 'fruver',
        products: [{ id: 1, quantity: '2', observation: '', additions: [{ name: 'Extra', price: '500' }] }],
        tableNumber: '10',
        saleStatus: 'en proceso',
        generalObservation: 'Sin sal',
        totalAmount: 5000,
        game: '4',
        orderType: 'En mesa',
      });

      expect(payload).toEqual({
        businessType: 'fruver',
        products: [{
          id: 1,
          quantity: 2,
          observation: null,
          additions: [{ id: 'Extra', name: 'Extra', price: 500 }],
        }],
        tableNumber: 'Mostrador',
        saleStatus: 'en proceso',
        generalObservation: 'Sin sal',
        totalAmount: 5000,
        game: null,
        orderType: 'En mesa',
      });
    });
  });

  describe('calculateTotal', () => {
    it('suma productos y adiciones correctamente', () => {
      const total = calculateTotal([
        { price: 1000, quantity: 2, additions: [{ price: 500 }] },
        { price: 2000, quantity: 1 },
      ]);

      expect(total).toBe(4500);
    });

    it('devuelve 0 para productos inválidos', () => {
      expect(calculateTotal(null)).toBe(0);
      expect(calculateTotal([])).toBe(0);
    });
  });

  describe('buildPrintRequestBody', () => {
    it('construye el cuerpo de impresión con producto enriquecido y juego', () => {
      const body = buildPrintRequestBody({
        products: [{ id: 1, quantity: 2, name: 'Pan', price: 1000, additions: [{ name: 'Queso', price: 500 }] }],
        total: 2500,
        tableNumber: '5',
        game: '3',
        availableGames: [{ id: 3, name: 'Ronda' }],
        availableProducts: [],
        generalObservation: 'Sin cebolla',
        orderType: 'En mesa',
      });

      expect(body).toEqual({
        products: [{
          id: 1,
          name: 'Pan',
          price: 1000,
          category: 'Otros',
          quantity: 2,
          observation: '',
          additions: [{ name: 'Queso', price: 500 }],
        }],
        total: 2500,
        tableNumber: '5',
        availableGames: ['Ronda'],
        generalObservation: 'Sin cebolla',
        orderType: 'En mesa',
      });
    });
  });
});
