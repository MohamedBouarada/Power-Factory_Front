import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminNavigationComponent } from './admin-navigation/admin-navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminClientComponent } from './admin-client/admin-client.component';
import { AdminProductComponent } from './admin-product/admin-product.component';
import { AdminCourseComponent } from './admin-course/admin-course.component';
import { AdminOrderComponent } from './admin-order/admin-order.component';
import { MatTable, MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AdminNavigationComponent,
    AdminClientComponent,
    AdminProductComponent,
    AdminCourseComponent,
    AdminOrderComponent,
  ],
  imports: [
    CommonModule,
    LayoutModule,
    MatTableModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    AdminRoutingModule,
  ],
})
export class AdminModule {}
