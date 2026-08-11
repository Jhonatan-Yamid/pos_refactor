import { apiGet } from '@/libs/apiClient';

export async function fetchAvailableProducts() {
  return apiGet('/api/product');
}

export async function fetchAvailableGames() {
  return apiGet('/api/game');
}

export async function fetchAvailableAdditions() {
  return apiGet('/api/product?category=adiciones');
}

export async function fetchSaleById(saleId) {
  const numericId = Number(saleId);
  if (Number.isNaN(numericId)) {
    throw new Error('ID de venta inválido');
  }
  return apiGet(`/api/sale/${numericId}`);
}

export function mapSaleApiProductToFormProduct(product) {
  return {
    ...product,
    additions: (product.additions || []).map((a) => ({
      id: a.id || a.name,
      name: a.name,
      price: a.price,
    })),
    observation: product.observation || '',
    quantity: product.quantity || 1,
  };
}

export function mapSaleDataToFormState(saleData) {
  return {
    products: Array.isArray(saleData.products)
      ? saleData.products.map(mapSaleApiProductToFormProduct)
      : [],
    tableNumber: saleData.table?.toString() || '',
    saleStatus: saleData.status || 'en proceso',
    generalObservation: saleData.generalObservation || '',
    game: saleData.gameId?.toString() || '',
    orderType: saleData.orderType || 'En mesa',
  };
}
