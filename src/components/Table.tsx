import { useContext, useState } from 'react';
import ApiResultContext from '../context/apiResult';

function Table() {
  const planets = useContext(ApiResultContext).data;
  const [searchText, useText] = useState('');

  const HandleChange = (event: any) => {
    useText(event.target.value);
  };

  const newPlanets = planets.filter((planet) => planet.name
    .toLowerCase().includes(searchText));

  return (
    <div>
      <h1>Star Wars Planets</h1>
      <input
        type="text"
        name="value"
        id="search"
        data-testid="name-filter"
        onChange={ HandleChange }
      />
      {planets.length < 1 ? (
        <p>Loading...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Rotation Period</th>
              <th>Orbital Period</th>
              <th>Diameter</th>
              <th>Climate</th>
              <th>Gravity</th>
              <th>Terrain</th>
              <th>Surface Water</th>
              <th>Population</th>
              <th>Films</th>
              <th>Created</th>
              <th>Edited</th>
              <th>URL</th>
            </tr>
          </thead>
          <tbody>
            {newPlanets.map((planet) => (
              <tr key={ planet.name }>
                <td>{planet.name}</td>
                <td>{planet.rotation_period}</td>
                <td>{planet.orbital_period}</td>
                <td>{planet.diameter}</td>
                <td>{planet.climate}</td>
                <td>{planet.gravity}</td>
                <td>{planet.terrain}</td>
                <td>{planet.surface_water}</td>
                <td>{planet.population}</td>
                <td>{planet.films.join(', ')}</td>
                <td>{planet.created}</td>
                <td>{planet.edited}</td>
                <td>{planet.url}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Table;
