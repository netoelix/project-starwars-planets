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
  const keyItem = 'name';

  const filteredArray = useFilter(searchText, keyItem, planets);
  const secondFilteredArray = useSecondFilter(itemOption, itemOperator, value, planets);

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
            <option value="population">population</option>
            <option value="orbital_period">orbital_period</option>
            <option value="diameter">diameter</option>
            <option value="rotation_period">rotation_period</option>
            <option value="surface_water">surface_water</option>
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
      </div>
      <Table filteredArray={ finalArray as Planet[] } />
    </div>
  );
}

export default Filter;
