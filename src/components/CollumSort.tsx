import { useContext, useState } from 'react';
import { Planet } from '../types';
import ApiResultContext from '../context/apiResult';
import { ButtonFilter, ContainerFilter } from './styles/FIlter/styles';

function CollumSort({ planets }: { planets: Planet[] }) {
  const { setSortedPlanets } = useContext(ApiResultContext);
  const [order, setOrder] = useState({ column: 'population', sort: 'ASC' });

  const handleSort = () => {
    const sortedPlanets = [...planets].sort((a, b) => {
      let aValue = Number(a[order.column]);
      let bValue = Number(b[order.column]);

      if (a[order.column] === 'unknown') {
        aValue = order.sort === 'ASC' ? Infinity : -Infinity;
      }

      if (b[order.column] === 'unknown') {
        bValue = order.sort === 'ASC' ? Infinity : -Infinity;
      }

      if (order.sort === 'ASC') {
        return aValue - bValue;
      }
      return bValue - aValue;
    });

    setSortedPlanets(sortedPlanets);
  };

  return (
    <div>
      <select
        name="sort"
        id="sort"
        data-testid="column-sort"
        onChange={ (e) => setOrder({ ...order, column: e.target.value }) }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>

      <label>
        Ascendente
        <input
          type="radio"
          data-testid="column-sort-input-asc"
          value="ASC"
          name="sortOrder"
          onChange={ () => setOrder({ ...order, sort: 'ASC' }) }
        />
      </label>

      <label>
        Descendente
        <input
          type="radio"
          data-testid="column-sort-input-desc"
          value="DESC"
          name="sortOrder"
          onChange={ () => setOrder({ ...order, sort: 'DESC' }) }
        />
      </label>

      <button data-testid="column-sort-button" onClick={ handleSort }>
        Ordenar
      </button>
    </div>
  );
}

export default CollumSort;
