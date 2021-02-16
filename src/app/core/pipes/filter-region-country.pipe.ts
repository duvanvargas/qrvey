import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterRegionCountry',
})
export class FilterRegionCountryPipe implements PipeTransform {
  transform(countries: any, term: string): any {
    //check if the search term is defined
    if (!countries || !term) return countries;

    //return updated countries array
    return countries.filter(function (country) {
      return country.region.toLowerCase().includes(term.toLowerCase());
    });
  }
}
