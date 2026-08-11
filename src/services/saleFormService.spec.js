import {
  fetchAvailableProducts,
  fetchAvailableGames,
  fetchAvailableAdditions,
  fetchSaleById,
  mapSaleApiProductToFormProduct,
  mapSaleDataToFormState,
} from './saleFormService';

vi.mock('@/libs/apiClient', () => ({
  apiGet: vi.fn(),
}));

import { apiGet } from '@/libs/apiClient';

describe('saleFormService', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it('fetchAvailableProducts llama a apiGet con la ruta correcta', async () => {
    apiGet.mockResolvedValue([{ id: 1, name: 'Pan' }]);
    const result = await fetchAvailableProducts();

    expect(apiGet).toHaveBeenCalledWith('/api/product');
    expect(result).toEqual([{ id: 1, name: 'Pan' }]);
  });

  it('fetchAvailableGames llama a apiGet con la ruta correcta', async () => {
    apiGet.mockResolvedValue([{ id: 1, name: 'Ronda' }]);
    const result = await fetchAvailableGames();

    expect(apiGet).toHaveBeenCalledWith('/api/game');
    expect(result).toEqual([{ id: 1, name: 'Ronda' }]);
  });

  it('fetchAvailableAdditions llama a apiGet con la ruta correcta', async () => {
    apiGet.mockResolvedValue([{ id: 1, name: 'Queso' }]);
    const result = await fetchAvailableAdditions();

    expect(apiGet).toHaveBeenCalledWith('/api/product?category=adiciones');
    expect(result).toEqual([{ id: 1, name: 'Queso' }]);
  });

  it('fetchSaleById convierte el id a número y llama a la API', async () => {
    apiGet.mockResolvedValue({ id: 1, products: [] });
    const result = await fetchSaleById('1');

    expect(apiGet).toHaveBeenCalledWith('/api/sale/1');
    expect(result).toEqual({ id: 1, products: [] });
  });

  it('fetchSaleById rechaza cuando el id no es numérico', async () => {
    await expect(fetchSaleById('abc')).rejects.toThrow('ID de venta inválido');
  });

  it('mapSaleApiProductToFormProduct mapea correctamente el producto', () => {
    const input = {
      id: 1,
      name: 'Pan',
      quantity: 2,
      observation: 'sin sal',
      additions: [{ id: 5, name: 'Queso', price: 500 }],
    };

    expect(mapSaleApiProductToFormProduct(input)).toEqual({
      id: 1,
      name: 'Pan',
      quantity: 2,
      observation: 'sin sal',
      additions: [{ id: 5, name: 'Queso', price: 500 }],
    });
  });

  it('mapSaleDataToFormState transforma correctamente los datos de venta', () => {
    const input = {
      products: [{ id: 1, quantity: 2, observation: 'sin sal', additions: [] }],
      table: 10,
      status: 'en proceso',
      generalObservation: 'nota',
      gameId: 3,
      orderType: 'En mesa',
    };

    expect(mapSaleDataToFormState(input)).toEqual({
      products: [{ id: 1, quantity: 2, observation: 'sin sal', additions: [] }],
      tableNumber: '10',
      saleStatus: 'en proceso',
      generalObservation: 'nota',
      game: '3',
      orderType: 'En mesa',
    });
  });
});
