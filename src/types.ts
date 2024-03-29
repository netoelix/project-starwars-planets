export type ApiResult = {
  data: object[];
  error?: string;
  newList?: object[];
};

export type Planet = {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  films: string[];
  created: string;
  edited: string;
  url: string;
};

export type FilterType = {
  itemOption: string;
  itemOperator: string;
  value: number | string;
};
