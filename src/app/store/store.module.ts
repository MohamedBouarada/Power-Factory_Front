import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { ProductListComponent } from './product-list/product-list.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { StorePageComponent } from './store-page/store-page.component';
import {MatTreeModule} from '@angular/material/tree';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatBadgeModule} from '@angular/material/badge';
import { ProductDetailsPageComponent } from './product-details-page/product-details-page.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import {MatInputModule} from "@angular/material/input";
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
    StorePageComponent,
    ProductDetailsPageComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatTreeModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatSelectModule,
    MatBadgeModule,
    IvyCarouselModule,
    MatInputModule,
    MatExpansionModule,
    MatDividerModule,
    MatListModule

  ]
})
export class StoreModule { }
