import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymProgramsComponent } from './gym-programs.component';

describe('GymProgramsComponent', () => {
  let component: GymProgramsComponent;
  let fixture: ComponentFixture<GymProgramsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GymProgramsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GymProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
