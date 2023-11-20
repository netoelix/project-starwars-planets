import { createContext } from 'react';
import { ApiResult, Planet } from '../types';

interface ExtendedApiResult extends ApiResult {
  sortedPlanets: Planet[];
  setSortedPlanets: (planets: Planet[]) => void;
}

const ApiResultContext = createContext<ExtendedApiResult>({
  data: [],
  error: '',
  newList: [],
  sortedPlanets: [],
  setSortedPlanets: () => {},
});

export default ApiResultContext;
