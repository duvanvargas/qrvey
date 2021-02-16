import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Country } from '../interfaces/country';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  getAllCountries(): Observable<Country[]> {
    return this.http.get<Country[]>('https://restcountries.eu/rest/v2/all');
  }
}
