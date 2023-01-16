import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BucketElementComponent } from './bucket-element.component';

describe('BucketElementComponent', () => {
  let component: BucketElementComponent;
  let fixture: ComponentFixture<BucketElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BucketElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BucketElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
