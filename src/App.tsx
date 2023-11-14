import { useEffect, useState } from 'react';
import './App.css';
import Table from './components/Table';
import ApiResultContext from './context/apiResult';
import getStarWarsPlanets from './services/requestAPI';
import { Planet } from './types';

function App() {
  const [planets, setPlanets] = useState<Planet[] | null>(null);

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
    <ApiResultContext.Provider value={ { data: planets || [] } }>
      <div>
        <Table />
      </div>
    </ApiResultContext.Provider>
  );
}
export default App;
