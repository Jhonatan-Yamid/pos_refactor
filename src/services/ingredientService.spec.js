import {
  parseIngredientQuantity,
  normalizeIngredientPayload,
  validateIngredientPayload,
  buildIngredientCreateInput,
  buildIngredientUpdateInput,
  validateIngredientBulkUpdate,
} from './ingredientService';

describe('ingredientService', () => {
  describe('parseIngredientQuantity', () => {
    it('convierte cantidades numéricas', () => {
      expect(parseIngredientQuantity('5')).toBe(5);
      expect(parseIngredientQuantity(3)).toBe(3);
    });

    it('devuelve null para valores inválidos', () => {
      expect(parseIngredientQuantity('insuficiente')).toBeNull();
      expect(parseIngredientQuantity(null)).toBeNull();
      expect(parseIngredientQuantity(undefined)).toBeNull();
      expect(parseIngredientQuantity('abc')).toBeNull();
    });
  });

  describe('normalizeIngredientPayload', () => {
    it('normaliza y convierte los campos correctamente', () => {
      expect(normalizeIngredientPayload({
        name: '  Tomate  ',
        description: '  Fresco ',
        quantity: '10',
        price: '2500',
        typeUnity: 'kg',
        Origin: 'Campo',
        providerId: '2',
        actualizar: true,
      })).toEqual({
        name: 'Tomate',
        description: 'Fresco',
        quantity: 10,
        price: 2500,
        typeUnity: 'kg',
        Origin: 'Campo',
        providerId: 2,
        actualizar: true,
      });
    });

    it('aplica valores por defecto', () => {
      expect(normalizeIngredientPayload({})).toEqual({
        name: '',
        description: null,
        quantity: null,
        price: NaN,
        typeUnity: '',
        Origin: 'Desconocido',
        providerId: null,
        actualizar: false,
      });
    });
  });

  describe('validateIngredientPayload', () => {
    it('valida correctamente payload válido', () => {
      expect(validateIngredientPayload({
        name: 'Tomate',
        price: 2500,
        typeUnity: 'kg',
      })).toBeNull();
    });

    it('retorna error cuando falta nombre', () => {
      expect(validateIngredientPayload({
        name: '',
        price: 2500,
        typeUnity: 'kg',
      })).toBe('El nombre del ingrediente es requerido.');
    });

    it('retorna error cuando precio no es válido', () => {
      expect(validateIngredientPayload({
        name: 'Tomate',
        price: NaN,
        typeUnity: 'kg',
      })).toBe('El precio del ingrediente debe ser un número válido.');
    });

    it('retorna error cuando falta typeUnity', () => {
      expect(validateIngredientPayload({
        name: 'Tomate',
        price: 2500,
        typeUnity: '',
      })).toBe('El tipo de unidad del ingrediente es requerido.');
    });
  });

  describe('buildIngredientCreateInput', () => {
    it('constuye un payload de creación válido', () => {
      expect(buildIngredientCreateInput({
        name: 'Tomate',
        description: 'Fresco',
        quantity: 10,
        price: 2500,
        typeUnity: 'kg',
        Origin: 'Campo',
        providerId: 2,
      })).toEqual({
        name: 'Tomate',
        description: 'Fresco',
        quantity: 10,
        price: 2500,
        typeUnity: 'kg',
        Origin: 'Campo',
        providerId: 2,
      });
    });
  });

  describe('buildIngredientUpdateInput', () => {
    it('constuye un payload de actualización válido', () => {
      const input = {
        name: 'Tomate',
        description: 'Fresco',
        quantity: 10,
        price: 2500,
        typeUnity: 'kg',
        Origin: 'Campo',
        providerId: 2,
      };

      const result = buildIngredientUpdateInput(input);

      expect(result).toEqual({
        ...input,
        updatedAt: expect.any(Date),
      });
    });
  });

  describe('validateIngredientBulkUpdate', () => {
    it('valida correctamente una actualización masiva', () => {
      expect(validateIngredientBulkUpdate([{ id: 1, quantity: '5' }])).toBeNull();
    });

    it('retorna error cuando los datos no son un arreglo', () => {
      expect(validateIngredientBulkUpdate({})).toBe('Datos inválidos, se esperaba un arreglo.');
    });

    it('retorna error cuando algún elemento es inválido', () => {
      expect(validateIngredientBulkUpdate([{ id: 'a', quantity: 1 }])).toBe(
        "Todos los elementos deben tener un 'id' y 'quantity' válidos."
      );
    });
  });
});
