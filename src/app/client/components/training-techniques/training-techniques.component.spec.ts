import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingTechniquesComponent } from './training-techniques.component';

describe('TrainingTechniquesComponent', () => {
  let component: TrainingTechniquesComponent;
  let fixture: ComponentFixture<TrainingTechniquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingTechniquesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingTechniquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
