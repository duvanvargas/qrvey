import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrveyCountryModalComponent } from './qrvey-country-modal.component';

describe('QrveyCountryModalComponent', () => {
  let component: QrveyCountryModalComponent;
  let fixture: ComponentFixture<QrveyCountryModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QrveyCountryModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QrveyCountryModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
