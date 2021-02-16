import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrveySearchBarComponent } from './qrvey-search-bar.component';

describe('QrveySearchBarComponent', () => {
  let component: QrveySearchBarComponent;
  let fixture: ComponentFixture<QrveySearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QrveySearchBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QrveySearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
