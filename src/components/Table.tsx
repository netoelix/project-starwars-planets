import { Planet } from '../types';
import { Container } from './styles/FIlter/styles';
import { TableContainer } from './styles/Table/styles';

type TableProps = {
  filteredArray: Planet[];
};

function Table({ filteredArray }: TableProps) {
  const planets = filteredArray;
  return (
    <Container>
      {planets.length < 1 ? (
        <p>Loading...</p>
      ) : (
        <TableContainer>
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
            {planets.map((planet) => (
              <tr key={ planet.name }>
                <td data-testid="planet-name">{planet.name}</td>
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
        </TableContainer>
      )}
    </Container>
  );
}

export default Table;
