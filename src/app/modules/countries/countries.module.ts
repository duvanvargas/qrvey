import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountriesRoutingModule } from './countries-routing.module';
import { QrveySearchComponent } from './components/qrvey-search/qrvey-search.component';
import { QrveyHomeComponent } from './core/qrvey-home/qrvey-home.component';
import { QrveyCountryListComponent } from './components/qrvey-country-list/qrvey-country-list.component';
import { QrveySearchBarComponent } from './components/qrvey-search-bar/qrvey-search-bar.component';
import { FilterNameCountryPipe } from 'src/app/core/pipes/filter-name-country.pipe';
import { FilterRegionCountryPipe } from 'src/app/core/pipes/filter-region-country.pipe';
import { FormsModule } from '@angular/forms';
import { QrveyCountryItemComponent } from './components/qrvey-country-item/qrvey-country-item.component';
import { QrveyCountryModalComponent } from './components/qrvey-country-modal/qrvey-country-modal.component';

@NgModule({
  declarations: [
    QrveySearchComponent,
    QrveyHomeComponent,
    QrveyCountryListComponent,
    QrveySearchBarComponent,
    FilterNameCountryPipe,
    FilterRegionCountryPipe,
    QrveyCountryItemComponent,
    QrveyCountryModalComponent,
  ],
  imports: [CommonModule, CountriesRoutingModule, FormsModule],
})
export class CountriesModule {}
