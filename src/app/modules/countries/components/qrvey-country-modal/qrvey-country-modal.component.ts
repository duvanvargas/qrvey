import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { Store } from '@ngrx/store';
import {
  addFavorite,
  removeFavorite,
} from 'src/app/core/state/countries/countries.actions';
import { Country } from 'src/app/core/state/countries/interfaces/country';

@Component({
  selector: 'app-qrvey-country-modal',
  templateUrl: './qrvey-country-modal.component.html',
  styleUrls: ['./qrvey-country-modal.component.scss'],
})
export class QrveyCountryModalComponent implements OnInit {
  @Input() open: boolean;
  @Input() item: Country;
  @Output() closeModal = new EventEmitter();
  constructor(
    private eRef: ElementRef,
    private store: Store<{ countries: Country[] }>
  ) {}

  ngOnInit(): void {}

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (event.target.id === 'modal') {
      this.closeModal.emit(null);
    }
  }

  addFav(alpha2Code) {
    this.store.dispatch(addFavorite({ idCountry: alpha2Code }));
    this.closeModal.emit(null);
  }
  removeFav(alpha2Code) {
    this.store.dispatch(removeFavorite({ idCountry: alpha2Code }));
    this.closeModal.emit(null);
  }
}
