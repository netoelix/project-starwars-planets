import { createContext } from 'react';
import { ApiResult } from '../types';

const ApiResultContext = createContext<ApiResult>({
  data: [],
  error: '',
  newList: [],
});

export default ApiResultContext;
