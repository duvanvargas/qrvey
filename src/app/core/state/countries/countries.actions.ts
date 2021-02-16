import { createAction, props } from '@ngrx/store';
import { Country } from './interfaces/country';

export const loadCountries = createAction(
  '[Countries component] Load Countries'
);
export const loadCountriesSuccess = createAction(
  '[Countries component] Load Countries Success',
  props<{ countries: Country[] }>()
);
export const loadCountriesFail = createAction(
  '[Countries component] Load Countries Fail'
);
export const searchTermCountry = createAction(
  '[Countries component] searchTermCountry',
  props<{ searchTerm: string }>()
);
export const filterRegionCountry = createAction(
  '[Countries component] filterRegionCountry',
  props<{ filterRegion: string }>()
);
