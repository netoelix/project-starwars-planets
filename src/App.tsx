import { useEffect, useState } from 'react';
import './App.css';
import ApiResultContext from './context/apiResult';
import getStarWarsPlanets from './services/requestAPI';
import { Planet } from './types';
import Filter from './components/Filter';

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
      <div>
        <Filter />
      </div>
    </ApiResultContext.Provider>
  );
}
export default App;
