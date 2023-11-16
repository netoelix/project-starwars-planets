import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from '../App';

test('Teste se os itens principais são renderizados', () => {
  render(<App />);
  const colum = screen.getByText(/coluna/i);
  expect(colum).toBeInTheDocument();
  const operator = screen.getByText(/operador/i);
  expect(operator).toBeInTheDocument();
  const value = screen.getByText(/valor/i);
  expect(value).toBeInTheDocument();
  const filtrar = screen.getByText(/filtrar/i);
  expect(filtrar).toBeInTheDocument();
});
test('Teste se os itens da API estão carregando', async () => {
  render(<App />);
  const loading = screen.getByText(/Loading.../i);
  expect(loading).toBeInTheDocument();

  await waitFor(() => {
    expect(loading).not.toBeInTheDocument();
  }, { timeout: 5000 });
  const data = await screen.findByText(/Alderaan/i);
  expect(data).toBeInTheDocument();

} );

test('Teste se os botões de filtro estão funcionando', async () => {
  render(<App />);
  const loading = screen.getByText(/Loading.../i);
  expect(loading).toBeInTheDocument();

  await waitFor(() => {
    expect(loading).not.toBeInTheDocument();
  }, { timeout: 5000 });
  const data = await screen.findByText(/Alderaan/i);
  expect(data).toBeInTheDocument();

  const coluna = screen.getByTestId('column-filter');
  expect(coluna).toBeInTheDocument();
  const operador = screen.getByTestId('comparison-filter');
  expect(operador).toBeInTheDocument();
  const valor = screen.getByTestId('value-filter');
  expect(valor).toBeInTheDocument();
  const filtrarButton = screen.getByTestId('button-filter');
  expect(filtrarButton).toBeInTheDocument();
  fireEvent.change(coluna, { target: { value: 'orbital_period' } });
  fireEvent.change(operador, { target: { value: 'maior que' } });
  fireEvent.change(valor, { target: { value: 500 } });
  fireEvent.click(filtrarButton);
  const data2 = await screen.findByText(/Yavin IV/i); 
  expect(data2).toBeInTheDocument();
} );
