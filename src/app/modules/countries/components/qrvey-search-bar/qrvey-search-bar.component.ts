import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Country } from 'src/app/core/state/countries/interfaces/country';
import {
  searchTermCountry,
  filterRegionCountry,
} from 'src/app/core/state/countries/countries.actions';

@Component({
  selector: 'app-qrvey-search-bar',
  templateUrl: './qrvey-search-bar.component.html',
  styleUrls: ['./qrvey-search-bar.component.scss'],
})
export class QrveySearchBarComponent implements OnInit {
  country = '';
  region = 'All';
  constructor(private store: Store<{ countries: Country[] }>) {}

  ngOnInit(): void {}

  find(): void {
    this.store.dispatch(searchTermCountry({ searchTerm: this.country }));
    this.store.dispatch(filterRegionCountry({ filterRegion: this.region }));
  }
}
