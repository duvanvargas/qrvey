import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountriesModule } from './modules/countries/countries.module';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { countryReducer } from './core/state/countries/countries.reducer';
import { CountriesEffects } from './core/state/countries/countries.effects';
import { FormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CountryService } from './core/state/countries/services/country.service';
import { EffectsModule } from '@ngrx/effects';
@NgModule({
  declarations: [AppComponent],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CountriesModule,
    StoreModule.forRoot({ countries: countryReducer }),
    EffectsModule.forRoot([CountriesEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 100,
    }),
  ],
  providers: [CountryService],
  bootstrap: [AppComponent],
})
export class AppModule {}
