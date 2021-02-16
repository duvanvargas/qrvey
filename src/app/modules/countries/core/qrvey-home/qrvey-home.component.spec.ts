import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrveyHomeComponent } from './qrvey-home.component';

describe('QrveyHomeComponent', () => {
  let component: QrveyHomeComponent;
  let fixture: ComponentFixture<QrveyHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QrveyHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QrveyHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
