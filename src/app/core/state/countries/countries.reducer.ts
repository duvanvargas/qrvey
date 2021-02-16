import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import {
  loadCountries,
  loadCountriesSuccess,
  loadCountriesFail,
  filterRegionCountry,
  searchTermCountry,
  addFavorite,
  removeFavorite,
} from './countries.actions';
import { Country } from './interfaces/country';
import { searchTerm } from './countries.selectors';

export interface CountryState extends EntityState<Country> {
  countriesLoaded: boolean;
  searchTerm: string;
  filterRegion: string;
}

export const adapter: EntityAdapter<Country> = createEntityAdapter<Country>({
  selectId: (Country) => Country.alpha2Code,
});

export const initialState = adapter.getInitialState({
  countriesLoaded: false,
  searchTerm: '',
  filterRegion: 'All',
});

const _countryReducer = createReducer(
  initialState,
  on(loadCountries, (state) => ({ ...initialState })),
  on(loadCountriesSuccess, (state, action) => {
    return adapter.setAll(action.countries, {
      ...state,
      countriesLoaded: true,
    });
  }),
  on(loadCountriesFail, (state) => ({ ...initialState })),
  on(searchTermCountry, (state, action) => {
    return adapter.addMany([], {
      ...state,
      searchTerm: action.searchTerm,
    });
  }),
  on(addFavorite, (state, action) => {
    return adapter.updateOne(
      {
        id: action.idCountry,
        changes: {
          favorite: true,
        },
      },
      state
    );
  }),
  on(removeFavorite, (state, action) => {
    return adapter.updateOne(
      {
        id: action.idCountry,
        changes: {
          favorite: false,
        },
      },
      state
    );
  }),
  on(filterRegionCountry, (state, action) => ({
    ...state,
    filterRegion: action.filterRegion,
  }))
);

export function countryReducer(
  state: CountryState | undefined,
  action: Action
) {
  return _countryReducer(state, action);
}

export const { selectAll, selectIds } = adapter.getSelectors();
