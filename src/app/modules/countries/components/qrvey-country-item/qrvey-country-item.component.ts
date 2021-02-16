import { Component, Input, OnInit } from '@angular/core';
import { Country } from 'src/app/core/state/countries/interfaces/country';

@Component({
  selector: 'app-qrvey-country-item',
  templateUrl: './qrvey-country-item.component.html',
  styleUrls: ['./qrvey-country-item.component.scss'],
})
export class QrveyCountryItemComponent implements OnInit {
  @Input() item: Country;
  constructor() {}

  ngOnInit(): void {}
}
