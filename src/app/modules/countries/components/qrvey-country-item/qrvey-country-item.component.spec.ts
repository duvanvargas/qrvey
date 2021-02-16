import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrveyCountryItemComponent } from './qrvey-country-item.component';

describe('QrveyCountryItemComponent', () => {
  let component: QrveyCountryItemComponent;
  let fixture: ComponentFixture<QrveyCountryItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QrveyCountryItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QrveyCountryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
