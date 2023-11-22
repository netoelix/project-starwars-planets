import { useContext, useEffect, useState } from 'react';
import ApiResultContext from '../context/apiResult';
import Table from './Table';
import { useFilter, useSecondFilter } from '../services/customHook';
import { FilterType, Planet } from '../types';
import CollumSort from './CollumSort';
import { ButtonFilter, Container, ContainerAllFilters,
  ContainerFilter, ContainerSearch, ContainerValues,
  Filters, SearchLogo } from './styles/FIlter/styles';

function Filter() {
  const planets = useContext(ApiResultContext).data;
  // const planets = testData.results;
  const { sortedPlanets } = useContext(ApiResultContext);
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
    setFinalArray(sortedPlanets);
  }, [sortedPlanets]);
  useEffect(() => {
    setFinalArray(filteredArray);
  }, [filteredArray]);

  const [filteredPlanets, setFilteredPlanets] = useState<object[]>(planets);

  useEffect(() => {
    let currentPlanets = [...planets];
    filters.forEach((filter: FilterType) => {
      currentPlanets = currentPlanets.filter((planet) => {
        const planetValue = planet[filter.itemOption];
        const num = Number(filter.value);

        switch (filter.itemOperator) {
          case 'menor que':
            return planetValue < num;
          case 'maior que':
            return planetValue > num;
          case 'igual a':
            return planetValue === filter.value;
          default:
            return true;
        }
      });
    });
    setFilteredPlanets(currentPlanets);
  }, [filters, planets]);

  useEffect(() => {
    setFinalArray(filteredPlanets);
  }, [filteredPlanets]);

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

      return prevFilters.filter((_, filterIndex) => filterIndex !== index);
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
    <Container>
      <ContainerSearch>
        <input
          type="text"
          name="value"
          id="search"
          data-testid="name-filter"
          onChange={ HandleChange }
        />
        <SearchLogo />
      </ContainerSearch>
      <ContainerAllFilters className="filter">
        <ContainerFilter className="filter__sort">
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
        </ContainerFilter>
        <ContainerFilter className="filter__size">
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
        </ContainerFilter>
        <ContainerValues>
          <input
            type="number"
            name="value"
            id="value"
            data-testid="value-filter"
            onChange={ HandleNumber }
            value={ value }
          />
        </ContainerValues>
        <ButtonFilter>
          <button
            type="button"
            data-testid="button-filter"
            onClick={ HandleClickButton }
          >
            FILTRAR
          </button>
        </ButtonFilter>
        <CollumSort planets={ finalArray } />
      </ContainerAllFilters>
      <Filters>
        {filters.map((filter: FilterType, index) => (
          <div key={ index } data-testid="filter">
            <p>{`${filter.itemOption} ${filter.itemOperator} ${filter.value}`}</p>
            <button onClick={ () => handleDelete(index) }>Delete</button>
          </div>
        ))}
        <button
          data-testid="button-remove-filters"
          onClick={ handleDeleteAll }
          disabled={ filters.length === 0 }
        >
          Remover todas filtragens

        </button>
      </Filters>
      <Table filteredArray={ finalArray as Planet[] } />
    </Container>
  );
}
export default Filter;
