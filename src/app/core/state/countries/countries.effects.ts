import { loadCountries, loadCountriesSuccess } from './countries.actions';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { concatMap, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CountryService } from './services/country.service';

@Injectable()
export class CountriesEffects {
  loadCountries$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCountries),
      concatMap(() => this.countryService.getAllCountries()),
      map((countries) => loadCountriesSuccess({ countries }))
    )
  );

  constructor(
    private countryService: CountryService,
    private actions$: Actions,
    private router: Router
  ) {}
}
