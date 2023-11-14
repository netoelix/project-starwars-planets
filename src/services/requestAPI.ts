import { Planet } from '../types';

const getStarWarsPlanets = async (): Promise<Planet[]> => {
  const fetchURL = 'https://swapi.dev/api/planets/';
  const response = await fetch(fetchURL);
  const data = await response.json();
  const planetsData = data.results.map((planet: Planet) => ({
    name: planet.name,
    rotation_period: planet.rotation_period,
    orbital_period: planet.orbital_period,
    diameter: planet.diameter,
    climate: planet.climate,
    gravity: planet.gravity,
    terrain: planet.terrain,
    surface_water: planet.surface_water,
    population: planet.population,
    films: planet.films,
    created: planet.created,
    edited: planet.edited,
    url: planet.url,
  }));
  return planetsData;
};

export default getStarWarsPlanets;
