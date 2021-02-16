import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrveyCountryListComponent } from './qrvey-country-list.component';

describe('QrveyCountryListComponent', () => {
  let component: QrveyCountryListComponent;
  let fixture: ComponentFixture<QrveyCountryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QrveyCountryListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QrveyCountryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
