import { useEffect, useState } from 'react';
import ApiResultContext from './context/apiResult';
import getStarWarsPlanets from './services/requestAPI';
import { Planet } from './types';
import Filter from './components/Filter';
import { FirstCircle, ST, A, R, W,
  RS, SecondCircle } from './components/styles/Logo/styles';
import { Container, Line, Main } from './components/styles/App/styles';
import { GlobalStyle } from './components/styles/GlobalStyle';

function App() {
  const [planets, setPlanets] = useState<Planet[] | null>(null);
  const [sortedPlanets, setSortedPlanets] = useState<Planet[]>([]);

  useEffect(() => {
    async function fetchPlanets() {
      try {
        const planetsData = await getStarWarsPlanets();
        setPlanets(planetsData);
      } catch (error) {
        console.log(error);
      }
    }
    fetchPlanets();
  }, []);

  return (
    <ApiResultContext.Provider
      value={ { data: planets || [], sortedPlanets, setSortedPlanets } }
    >
      {/* <GlobalStyle />
      <Main>
        <FirstCircle>
          <SecondCircle>
            <ST />
            <A />
            <R />
            <W />
            <A />
            <RS />
          </SecondCircle>
        </FirstCircle>
        <Line />
        <Container>
        </Container>
      </Main> */}
      <Filter />
    </ApiResultContext.Provider>
  );
}
export default App;
