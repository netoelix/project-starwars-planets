import { useContext, useEffect, useState } from 'react';
import ApiResultContext from '../context/apiResult';
import Table from './Table';
import { useFilter, useSecondFilter } from '../services/customHook';
import { Planet } from '../types';

let itemOption = 'population';
let itemOperator = 'maior que';

function Filter() {
  const planets = useContext(ApiResultContext).data;

  const [searchText, useText] = useState('');
  const [value, setValue] = useState(0);
  const [finalArray, setFinalArray] = useState([]);
  const [filterArray, setFilteredArray] = useState([{}]);
  const [filters, setFilters] = useState([]);
  const [columnOptions, setColumnOptions] = useState([
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
    itemOption = event.target.value;
  };

  const HandleOperator = (event: any) => {
    itemOperator = event.target.value;
  };

  function HandleClickButton() {
    setFinalArray(secondFilteredArray);
    setFilteredArray([{ itemOperator, itemOption, value }]);
    setFilters((prevFilters) => [...prevFilters, { itemOperator, itemOption, value }]);
    setColumnOptions((prevOptions) => prevOptions
      .filter((option) => option !== itemOption));
  }

  function handleDelete(index: number) {
    setFilters((prevFilters) => {
      const filterToDelete = prevFilters[index];

      setColumnOptions((prevOptions) => [...prevOptions, filterToDelete.itemOption]);

      return prevFilters.filter((filter, i) => i !== index);
    });
  }

  function handleDeleteAll() {
    setFilters([]);

    setColumnOptions([
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ]);
    setFilters([]);
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
            onChange={ HandleColun }
            data-testid="column-filter"
          >
            {columnOptions.map((option) => (
              <option key={ option } value={ option }>{option}</option>
            ))}
          </select>
        </div>
        <div className="filter__size">
          <p>Operador</p>
          <select
            name="size"
            id="size"
            onChange={ HandleOperator }
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
          {filters.map((filter, index) => (
            <div key={ index } data-testid="filter">
              <p>{`${filter.itemOption} ${filter.itemOperator} ${filter.value}`}</p>
              <button onClick={ () => handleDelete(index) }>Delete</button>
            </div>
          ))}
          {/* {filters.length === 0 ? <p>Nenhum filtro aplicado</p>
            : <div>
              <button
                data-testid="button-remove-filters"
                onClick={ handleDeleteAll }
              >
                Remover todas filtragens

              </button>
              </div>} */}
        </div>
      </div>
      <Table filteredArray={ finalArray as Planet[] } />
    </div>
  );
}

export default Filter;
