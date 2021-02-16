import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrveySearchComponent } from './qrvey-search.component';

describe('QrveySearchComponent', () => {
  let component: QrveySearchComponent;
  let fixture: ComponentFixture<QrveySearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QrveySearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QrveySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
