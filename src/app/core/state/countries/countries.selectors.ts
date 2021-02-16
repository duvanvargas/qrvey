import { CountryState } from './countries.reducer';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { selectAll } from './countries.reducer';

export const countryFeatureSelector = createFeatureSelector<CountryState>(
  'countries'
);

export const getAllCountries = createSelector(
  countryFeatureSelector,
  selectAll
);

export const arecountriesLoaded = createSelector(
  countryFeatureSelector,
  (state) => state.countriesLoaded
);

export const searchTerm = createSelector(
  countryFeatureSelector,
  (state) => state.searchTerm
);

export const filterRegion = createSelector(
  countryFeatureSelector,
  (state) => state.filterRegion
);
