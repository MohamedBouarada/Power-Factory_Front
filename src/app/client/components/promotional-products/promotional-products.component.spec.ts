import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionalProductsComponent } from './promotional-products.component';

describe('PromotionalProductsComponent', () => {
  let component: PromotionalProductsComponent;
  let fixture: ComponentFixture<PromotionalProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromotionalProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionalProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
