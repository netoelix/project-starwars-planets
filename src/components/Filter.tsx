import { useContext, useState } from 'react';
import ApiResultContext from '../context/apiResult';
import Table from './Table';
import useFilter from '../services/customHook';
import { Planet } from '../types';

function Filter() {
  const planets = useContext(ApiResultContext).data;
  const [searchText, useText] = useState('');
  const keyItem = 'name';

  const HandleChange = (event: any) => {
    useText(event.target.value);
  };

  const HandleOptionChange = (event: any) => {
    useText(event.target.value);
  };

  const filteredArray = useFilter(searchText, keyItem, planets);
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
          <select name="sort" id="sort" data-testid="column-filter">
            <option value="population">Population</option>
            <option value="orbital_period">Orbital period</option>
            <option value="diameter">Diameter</option>
            <option value="rotation_period">Rotation period</option>
            <option value="surface_water">Surface water</option>
          </select>
        </div>
        <div className="filter__size">
          <p>Operador</p>
          <select name="size" id="size" data-testid="comparison-filter">
            <option value="small_than">Menor que</option>
            <option value="bigger_than">Maior que</option>
            <option value="equal_to">Igual a</option>
          </select>
        </div>
        <div>
          <p>Valor</p>
          <input
            type="number"
            name="value"
            id="value"
            data-testid="value-filter"
          />
        </div>
        <button type="button" data-testid="button-filter" onClick={ HandleOptionChange }>
          FILTRAR
        </button>
      </div>
      <Table filteredArray={ filteredArray as Planet[] } />
    </div>
  );
}

export default Filter;
