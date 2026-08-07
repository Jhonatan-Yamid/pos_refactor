import {
  normalizeProductPayload,
  validateProductPayload,
  buildProductCreateInput,
  buildProductUpdateInput,
} from './productService';

describe('productService', () => {
  describe('normalizeProductPayload', () => {
    it('normaliza y convierte los campos correctamente', () => {
      const input = {
        name: '  Pizza  ',
        description: ' Deliciosa ',
        price: '12500',
        category: 'Comida',
        quantity: '3',
        typeUnity: 'unidad',
        selectedIngredients: ['1', '2', 'x', 3],
      };

      const normalized = normalizeProductPayload(input);

      expect(normalized).toEqual({
        name: 'Pizza',
        description: 'Deliciosa',
        price: 12500,
        category: 'Comida',
        quantity: 3,
        typeUnity: 'unidad',
        selectedIngredients: [1, 2, 3],
      });
    });

    it('devuelve valores por defecto cuando faltan campos', () => {
      const normalized = normalizeProductPayload({});

      expect(normalized).toEqual({
        name: '',
        description: '',
        price: NaN,
        category: '',
        quantity: null,
        typeUnity: '',
        selectedIngredients: [],
      });
    });
  });

  describe('validateProductPayload', () => {
    it('valida correctamente un payload válido', () => {
      const payload = {
        name: 'Pizza',
        price: 12500,
        category: 'Comida',
        selectedIngredients: [1, 2],
      };

      expect(validateProductPayload(payload)).toBeNull();
    });

    it('retorna un mensaje cuando falta nombre', () => {
      const payload = {
        name: '',
        price: 12500,
        category: 'Comida',
        selectedIngredients: [1],
      };

      expect(validateProductPayload(payload)).toBe('El nombre del producto es requerido.');
    });

    it('retorna un mensaje cuando el precio no es válido', () => {
      const payload = {
        name: 'Pizza',
        price: NaN,
        category: 'Comida',
        selectedIngredients: [1],
      };

      expect(validateProductPayload(payload)).toBe('El precio del producto debe ser un número válido.');
    });

    it('retorna un mensaje cuando la categoría falta', () => {
      const payload = {
        name: 'Pizza',
        price: 12500,
        category: '',
        selectedIngredients: [1],
      };

      expect(validateProductPayload(payload)).toBe('La categoría del producto es requerida.');
    });

    it('retorna un mensaje cuando selectedIngredients no es arreglo', () => {
      const payload = {
        name: 'Pizza',
        price: 12500,
        category: 'Comida',
        selectedIngredients: 'none',
      };

      expect(validateProductPayload(payload)).toBe('selectedIngredients debe ser un arreglo.');
    });
  });

  describe('buildProductCreateInput', () => {
    it('genera el objeto de creación con ingredientes conectados', () => {
      const payload = {
        name: 'Pizza',
        description: 'Deliciosa',
        price: 12500,
        category: 'Comida',
        quantity: 2,
        typeUnity: 'unidad',
        selectedIngredients: [1, 2],
      };

      expect(buildProductCreateInput(payload)).toEqual({
        name: 'Pizza',
        description: 'Deliciosa',
        price: 12500,
        category: 'Comida',
        quantity: 2,
        typeUnity: 'unidad',
        ingredients: {
          create: [
            { quantity: 1, ingredient: { connect: { id: 1 } } },
            { quantity: 1, ingredient: { connect: { id: 2 } } },
          ],
        },
      });
    });
  });

  describe('buildProductUpdateInput', () => {
    it('genera el objeto de actualización sin ingredientes', () => {
      const payload = {
        name: 'Pizza',
        description: 'Deliciosa',
        price: 12500,
        category: 'Comida',
        quantity: 2,
        typeUnity: 'unidad',
      };

      expect(buildProductUpdateInput(payload)).toEqual({
        name: 'Pizza',
        description: 'Deliciosa',
        price: 12500,
        category: 'Comida',
        quantity: 2,
        typeUnity: 'unidad',
      });
    });
  });
});
