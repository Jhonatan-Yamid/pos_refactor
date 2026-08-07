import {
  normalizeProviderPayload,
  validateProviderPayload,
  buildProviderCreateInput,
  buildProviderUpdateInput,
} from './providerService';

describe('providerService', () => {
  describe('normalizeProviderPayload', () => {
    it('normaliza los campos y aplica valores por defecto', () => {
      const normalized = normalizeProviderPayload({
        name: '  Proveedor  ',
        description: '  Descripción ',
        accountNumber: ' 1234 ',
        phone: ' 555-1234 ',
      });

      expect(normalized).toEqual({
        name: 'Proveedor',
        description: 'Descripción',
        accountNumber: '1234',
        phone: '555-1234',
      });
    });

    it('devuelve valores por defecto cuando falta información', () => {
      expect(normalizeProviderPayload({})).toEqual({
        name: '',
        description: null,
        accountNumber: '',
        phone: null,
      });
    });
  });

  describe('validateProviderPayload', () => {
    it('valida correctamente payload válido', () => {
      expect(
        validateProviderPayload({
          name: 'Proveedor',
          accountNumber: '1234',
        })
      ).toBeNull();
    });

    it('retorna error cuando falta nombre', () => {
      expect(
        validateProviderPayload({
          name: '',
          accountNumber: '1234',
        })
      ).toBe('El nombre del proveedor es requerido.');
    });

    it('retorna error cuando falta accountNumber', () => {
      expect(
        validateProviderPayload({
          name: 'Proveedor',
          accountNumber: '',
        })
      ).toBe('El número de cuenta es requerido.');
    });
  });

  describe('buildProviderCreateInput', () => {
    it('constuye el payload para creación', () => {
      expect(
        buildProviderCreateInput({
          name: 'Proveedor',
          description: 'Desc',
          accountNumber: '1234',
          phone: '555-1234',
        })
      ).toEqual({
        name: 'Proveedor',
        description: 'Desc',
        accountNumber: '1234',
        phone: '555-1234',
      });
    });
  });

  describe('buildProviderUpdateInput', () => {
    it('constuye el payload para actualización', () => {
      expect(
        buildProviderUpdateInput({
          name: 'Proveedor',
          description: 'Desc',
          accountNumber: '1234',
          phone: '555-1234',
        })
      ).toEqual({
        name: 'Proveedor',
        description: 'Desc',
        accountNumber: '1234',
        phone: '555-1234',
      });
    });
  });
});
