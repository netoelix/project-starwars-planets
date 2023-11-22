import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from '../App';

// test('Teste se os itens principais são renderizados', () => {
//   render(<App />);
//   const colum = screen.getByText(/coluna/i);
//   expect(colum).toBeInTheDocument();
//   const operator = screen.getByText(/operador/i);
//   expect(operator).toBeInTheDocument();
//   const value = screen.getByText(/valor/i);
//   expect(value).toBeInTheDocument();
//   const filtrar = screen.getByText(/filtrar/i);
//   expect(filtrar).toBeInTheDocument();
// });
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

test('Teste se os botões de filtro (MAIOR QUE) estão funcionando', async () => {
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

test('Verifica se os botões de filtro (MENOR QUE) estão funcionando', async () => {
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
  fireEvent.change(operador, { target: { value: 'menor que' } });
  fireEvent.change(valor, { target: { value: 500 } });
  fireEvent.click(filtrarButton);
  const data2 = await screen.findByText(/Alderaan/i); 
  expect(data2).toBeInTheDocument();
});

test('Verifica se os botões de filtro (IGUAL A) estão funcionando', async () => {
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
  fireEvent.change(operador, { target: { value: 'igual a' } });
  fireEvent.change(valor, { target: { value: 500 } });
  fireEvent.click(filtrarButton);
  const data2 = await screen.findByText(/Bespin/i); 
  expect(data2).toBeInTheDocument();
});

test('Verifica se o botão (REMOVER TODAS FILTRAGENS) está funcionando', async () => {
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
  fireEvent.change(operador, { target: { value: 'igual a' } });
  fireEvent.change(valor, { target: { value: 500 } });
  fireEvent.click(filtrarButton);
  const data2 = await screen.findByText(/Bespin/i); 
  expect(data2).toBeInTheDocument();
  const removerButton = screen.getByTestId('button-remove-filters');
  expect(removerButton).toBeInTheDocument();
  fireEvent.click(removerButton);
  const data3 = await screen.findByText(/Alderaan/i);
  expect(data3).toBeInTheDocument();
});

test('Verifica se as colunas estão renderizando os valores após selecionar um Operador', async () => {
  render(<App />);
  const loading = screen.getByText(/Loading.../i);
  expect(loading).toBeInTheDocument();
  await waitFor(() => {
    expect(loading).not.toBeInTheDocument();
  }, { timeout: 5000 });

  const coluna = screen.getByTestId('column-filter');
  expect(coluna).toBeInTheDocument();
  const operador = screen.getByTestId('comparison-filter');
  expect(operador).toBeInTheDocument();
  const valor = screen.getByTestId('value-filter');
  expect(valor).toBeInTheDocument();
  const filtrarButton = screen.getByTestId('button-filter');
  expect(filtrarButton).toBeInTheDocument();
  fireEvent.change(operador, { target: { value: 'maior que' } });
  const coluna2 = await screen.findByTestId('column-filter');
  expect(coluna2).toBeInTheDocument();
  fireEvent.change(coluna2, { target: { value: 'orbital_period' } });
  const valor2 = await screen.findByTestId('value-filter');
  expect(valor2).toBeInTheDocument();
  fireEvent.change(valor2, { target: { value: 500 } });
  fireEvent.click(filtrarButton);
  const data = await screen.findByText(/Yavin IV/i);
  expect(data).toBeInTheDocument();

});

test('Teste se o botão de limpar filtro está funcionando', async () => {
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
  const limparButton = screen.getByText('Delete');
  expect(limparButton).toBeInTheDocument();
  fireEvent.click(limparButton);
  const data3 = await screen.findByText(/Alderaan/i);
  expect(data3).toBeInTheDocument();
});

test('Teste se o botão se sort está funcionando', async () => {
  render(<App />);
  const loading = screen.getByText(/Loading.../i);
  expect(loading).toBeInTheDocument();

  await waitFor(() => {
    expect(loading).not.toBeInTheDocument();
  }, { timeout: 5000 });
  const acs = screen.getByTestId('column-sort-input-asc');
  expect(acs).toBeInTheDocument();
  const desc = screen.getByTestId('column-sort-input-desc');
  expect(desc).toBeInTheDocument();

  const sort = screen.getByTestId('column-sort');
  expect(sort).toBeInTheDocument();

  const button = screen.getByTestId('column-sort-button');
  fireEvent.change(sort, { target: { value: 'orbital_period' } });
  fireEvent.click(acs);
  fireEvent.click(button);
  
  await waitFor(() => {
    const firstPlanet = screen.getByText('Bespin').closest('tr');
    expect(firstPlanet).toHaveTextContent('Bespin');
  }, { timeout: 1000 });

  fireEvent.click(desc);
  fireEvent.click(button);

  await waitFor(() => {
    const firstPlanet = screen.getByText('Coruscant').closest('tr');
    expect(firstPlanet).toHaveTextContent('Coruscant');
  }, { timeout: 1000 });

  fireEvent.change(sort, { target: { value: 'population' } });
  fireEvent.click(acs);
  fireEvent.click(button);

} );

test('Teste se as opções corretas são renderizadas para "maior que"', async () => {
  const columnMaior = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];
  render(<App />);
  const operador = screen.getByTestId('comparison-filter');
  fireEvent.change(operador, { target: { value: 'maior que' } });
  const coluna = screen.getByTestId('column-filter');
  columnMaior.forEach((option) => {
    expect(coluna).toHaveTextContent(option);
  });
});

test('Teste se as opções corretas são renderizadas para "menor que"', async () => {
  const columnMenor = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];
  render(<App />);
  const operador = screen.getByTestId('comparison-filter');
  fireEvent.change(operador, { target: { value: 'menor que' } });
  const coluna = screen.getByTestId('column-filter');
  columnMenor.forEach((option) => {
    expect(coluna).toHaveTextContent(option);
  });
});

test('Teste se as opções corretas são renderizadas para "igual a"', async () => {
  const columnIgual = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];
  render(<App />);
  const operador = screen.getByTestId('comparison-filter');
  fireEvent.change(operador, { target: { value: 'igual a' } });
  const coluna = screen.getByTestId('column-filter');
  columnIgual.forEach((option) => {
    expect(coluna).toHaveTextContent(option);
  });
});

test('Teste se a opção correta é adicionada de volta para "maior que"', async () => {
  const list1 = [
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];
  const list2 = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];
  render(<App />);
  const operador = screen.getByTestId('comparison-filter');
  fireEvent.change(operador, { target: { value: 'maior que' } });
  const coluna = screen.getByTestId('column-filter');
  const optionToDelete = 'population';
  const value = screen.getByTestId('value-filter');
  fireEvent.change(value, { target: { value: 500 } });
  fireEvent.change(coluna, { target: { value: optionToDelete } });
  const button = screen.getByTestId('button-filter');
  fireEvent.click(button);

  list1.forEach((option) => {
    expect(coluna).toHaveTextContent(option);
  });

  const deleteButton = await screen.getByText('Delete');
  expect(deleteButton).toBeInTheDocument();

  fireEvent.click(deleteButton);

  list2.forEach((option) => {
    expect(coluna).toHaveTextContent(option);
  });
});

test('Teste se a opção correta é adicionada de volta para "menor que"', async () => {
  render(<App />);
  const list1 = [
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];
  const list2 = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];
  const operador = screen.getByTestId('comparison-filter');
  fireEvent.change(operador, { target: { value: 'menor que' } });
  const coluna = screen.getByTestId('column-filter');
  const optionToDelete = 'population';
  fireEvent.change(coluna, { target: { value: optionToDelete } });
  const value = screen.getByTestId('value-filter');
  fireEvent.change(value, { target: { value: 500 } });
  fireEvent.change(coluna, { target: { value: optionToDelete } });
  const button = screen.getByTestId('button-filter');
  fireEvent.click(button);
  
  list1.forEach((option) => {
    expect(coluna).toHaveTextContent(option);
  });

  const deleteButton = await screen.getByText('Delete');
  expect(deleteButton).toBeInTheDocument();

  fireEvent.click(deleteButton);

  list2.forEach((option) => {
    expect(coluna).toHaveTextContent(option);
  });
});

test('Teste se a opção correta é adicionada de volta para "igual a"', async () => {
  render(<App />);
  const list1 = [
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];
  const list2 = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];
  const operador = screen.getByTestId('comparison-filter');
  fireEvent.change(operador, { target: { value: 'igual a' } });
  const coluna = screen.getByTestId('column-filter');
  const optionToDelete = 'population';
  fireEvent.change(coluna, { target: { value: optionToDelete } });
  const value = screen.getByTestId('value-filter');
  fireEvent.change(value, { target: { value: 500 } });
  fireEvent.change(coluna, { target: { value: optionToDelete } });
  const button = screen.getByTestId('button-filter');
  fireEvent.click(button);
  
  list1.forEach((option) => {
    expect(coluna).toHaveTextContent(option);
  });

  const deleteButton = await screen.getByText('Delete');
  expect(deleteButton).toBeInTheDocument();

  fireEvent.click(deleteButton);

  list2.forEach((option) => {
    expect(coluna).toHaveTextContent(option);
  });
});
