import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadCountries } from 'src/app/core/state/countries/countries.actions';
import {
  getAllCountries,
  filterRegion,
  searchTerm,
} from 'src/app/core/state/countries/countries.selectors';
import { Country } from 'src/app/core/state/countries/interfaces/country';

@Component({
  selector: 'app-qrvey-country-list',
  templateUrl: './qrvey-country-list.component.html',
  styleUrls: ['./qrvey-country-list.component.scss'],
})
export class QrveyCountryListComponent implements OnInit {
  countries$: Observable<Country[]>;
  searchTerm: string;
  openModal: boolean = false;
  selectedItem: Country;
  filterRegion: string;
  continents = ['Africa', 'America', 'Asia', 'Europe', 'Oceania', 'Favorites'];

  constructor(private store: Store<{ countries: Country[] }>) {}

  ngOnInit(): void {
    this.store.dispatch(loadCountries());
    this.countries$ = this.store.select(getAllCountries);
    //
    this.store.select(searchTerm).subscribe((item) => {
      this.searchTerm = item;
    });
    this.store.select(filterRegion).subscribe((item) => {
      this.filterRegion = item;
    });
  }

  selectItem(item) {
    this.openModal = true;
    this.selectedItem = item;
  }

  closeModalOpen() {
    this.openModal = false;
  }
}
