import { render, screen } from '@testing-library/react';
import React from 'react';
import useBusinessType from './useBusinessType';
import { apiGet } from '@/libs/apiClient';

vi.mock('@/libs/apiClient', () => ({
  apiGet: vi.fn(),
}));

function TestComponent() {
  const { businessType, isLoading, error } = useBusinessType('restaurant');

  return React.createElement(
    'div',
    null,
    React.createElement('span', { 'data-testid': 'businessType' }, businessType),
    React.createElement('span', { 'data-testid': 'isLoading' }, isLoading ? 'loading' : 'ready'),
    React.createElement('span', { 'data-testid': 'error' }, error || 'no-error')
  );
}

describe('useBusinessType', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it('debería usar el tipo por defecto antes de cargar', () => {
    apiGet.mockResolvedValue({ type: 'restaurant' });
    render(React.createElement(TestComponent));

    expect(screen.getByTestId('businessType').textContent).toBe('restaurant');
    expect(screen.getByTestId('isLoading').textContent).toBe('loading');
  });

  it('debe cargar el tipo de negocio desde la API y normalizarlo a minúsculas', async () => {
    apiGet.mockResolvedValue({ type: 'Fruver' });
    render(React.createElement(TestComponent));

    expect(await screen.findByText('fruver')).toBeInTheDocument();
    expect(screen.getByTestId('isLoading').textContent).toBe('ready');
    expect(screen.getByTestId('error').textContent).toBe('no-error');
  });

  it('debe exponer error cuando la llamada a la API falla', async () => {
    apiGet.mockRejectedValue(new Error('API no disponible'));
    render(React.createElement(TestComponent));

    expect(await screen.findByText('API no disponible')).toBeInTheDocument();
    expect(screen.getByTestId('isLoading').textContent).toBe('ready');
    expect(screen.getByTestId('error').textContent).toBe('API no disponible');
  });
});
