import { useContext, useEffect, useState } from 'react';
import ApiResultContext from '../context/apiResult';
import Table from './Table';
import { useFilter, useSecondFilter } from '../services/customHook';
import { FilterType, Planet } from '../types';

function Filter() {
  const planets = useContext(ApiResultContext).data;

  const [searchText, useText] = useState('');
  const [value, setValue] = useState(0);
  const [finalArray, setFinalArray] = useState<object[]>([]);
  const [filters, setFilters] = useState([]);
  const [selectedOperator, setSelectedOperator] = useState<string>('maior que');
  const [itemOption, setItemOption] = useState('population');
  const [itemOperator, setItemOperator] = useState('maior que' as string);

  const [columnMaior, setColumnMaior] = useState<string[]>([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);
  const [columnMenor, setColumnMenor] = useState<string[]>([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);
  const [columnIgual, setColumnIgual] = useState<string[]>([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  const keyItem = 'name';

  const filteredArray = useFilter(searchText, keyItem, planets);
  const secondFilteredArray = useSecondFilter(
    itemOption,
    itemOperator,
    value,
    finalArray,
  );
  useEffect(() => {
    setFinalArray(filteredArray);
  }, [filteredArray]);

  const HandleChange = (event: any) => {
    useText(event.target.value);
    setFinalArray(filteredArray);
  };

  const HandleNumber = (event: any) => {
    setValue(event.target.value);
  };

  const HandleColun = (event: any) => {
    setItemOption(event.target.value);
  };

  const HandleOperator = (event: any) => {
    setItemOperator(event.target.value);
    setSelectedOperator(itemOperator);
  };

  function HandleClickButton() {
    setFinalArray(secondFilteredArray);
    setFilters((prevFilters) => [...prevFilters, { itemOperator, itemOption, value }]);
    if (selectedOperator === 'maior que') {
      setColumnMaior((prevOptions) => prevOptions
        .filter((option) => option !== itemOption));
    } else if (selectedOperator === 'menor que') {
      setColumnMenor((prevOptions) => prevOptions
        .filter((option) => option !== itemOption));
    } else if (selectedOperator === 'igual a') {
      setColumnIgual((prevOptions) => prevOptions
        .filter((option) => option !== itemOption));
    }
  }

  function handleDelete(index: number) {
    setFilters((prevFilters) => {
      const filterToDelete = prevFilters[index];

      if (selectedOperator === 'maior que') {
        setColumnMaior((prevOptions) => [...prevOptions, filterToDelete.itemOption]);
      } else if (selectedOperator === 'menor que') {
        setColumnMenor((prevOptions) => [...prevOptions, filterToDelete.itemOption]);
      } else if (selectedOperator === 'igual a') {
        setColumnIgual((prevOptions) => [...prevOptions, filterToDelete.itemOption]);
      }

      return prevFilters.filter((filter, i) => i !== index);
    });
  }

  function handleDeleteAll() {
    setFilters([]);
    setColumnMaior([
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ]);
    setColumnMenor([
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ]);
    setColumnIgual([
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ]);
    setFinalArray(planets);
  }

  return (
    <div>
      <div>
        <input
          type="text"
          name="value"
          id="search"
          data-testid="name-filter"
          onChange={ HandleChange }
        />
      </div>
      <div className="filter">
        <div className="filter__sort">
          <p>Coluna</p>
          <select
            name="sort"
            id="sort"
            onClick={ HandleColun }
            data-testid="column-filter"
          >
            {selectedOperator === 'maior que' ? columnMaior.map((option) => (
              <option key={ option } value={ option }>{option}</option>
            )) : null}
            {selectedOperator === 'menor que' ? columnMenor.map((option) => (
              <option key={ option } value={ option }>{option}</option>
            )) : null}
            {selectedOperator === 'igual a' ? columnIgual.map((option) => (
              <option key={ option } value={ option }>{option}</option>
            )) : null}
          </select>
        </div>
        <div className="filter__size">
          <p>Operador</p>
          <select
            name="size"
            id="size"
            onClick={ HandleOperator }
            data-testid="comparison-filter"
          >
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>
        </div>
        <div>
          <p>Valor</p>
          <input
            type="number"
            name="value"
            id="value"
            data-testid="value-filter"
            onChange={ HandleNumber }
            value={ value }
          />
        </div>
        <button
          type="button"
          data-testid="button-filter"
          onClick={ HandleClickButton }
        >
          FILTRAR
        </button>
        <div>
          {filters.map((filter: FilterType, index) => (
            <div key={ index } data-testid="filter">
              <p>{`${filter.itemOption} ${filter.itemOperator} ${filter.value}`}</p>
              <button onClick={ () => handleDelete(index) }>Delete</button>
            </div>
          ))}
          {filters.length === 0 ? <p>Nenhum filtro aplicado</p>
            : <button
                data-testid="button-remove-filters"
                onClick={ handleDeleteAll }
            >
              Remover todas filtragens
            </button>}
        </div>
      </div>
      <Table filteredArray={ finalArray as Planet[] } />
    </div>
  );
}

export default Filter;
