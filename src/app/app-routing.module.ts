import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './client/pages/home/home.component';
import { LoginComponent } from './client/pages/login/login.component';
import { CustomerStep1Component } from './client/pages/signup/client/step-1/customer-step1.component';
import { CustomerStep2Component } from './client/pages/signup/client/step-2/customer-step2.component';
import { CustomerStep3Component } from './client/pages/signup/client/step-3/customer-step3.component';
import { SignupComponent } from './client/pages/signup/signup.component';
import { StorePageComponent } from './store/store-page/store-page.component';
import { ProductDetailsPageComponent } from './store/product-details-page/product-details-page.component';
import { AdminNavigationComponent } from './admin/admin-navigation/admin-navigation.component';
import { AdminClientComponent } from './admin/admin-client/admin-client.component';
import { AdminProductComponent } from './admin/admin-product/admin-product.component';
import { AdminCourseComponent } from './admin/admin-course/admin-course.component';
import { AdminOrderComponent } from './admin/admin-order/admin-order.component';
import { ProgramsComponent } from './client/pages/programs/programs.component';
import { CoachesComponent } from './client/pages/coaches/coaches.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'programs', component: ProgramsComponent },
  { path: 'coaches', component: CoachesComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'admin',
    component: AdminNavigationComponent,
    children: [
      {
        path: '1',
        component: AdminClientComponent,
      },
      {
        path: '2',
        component: AdminProductComponent,
      },
      {
        path: '3',
        component: AdminCourseComponent,
      },
      {
        path: '4',
        component: AdminOrderComponent,
      },

      {
        path: '**',
        redirectTo: '1',
      },
    ],
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'signup-step1',
    component: CustomerStep1Component,
    pathMatch: 'full',
  },
  {
    path: 'signup-step2',
    component: CustomerStep2Component,
    pathMatch: 'full',
  },
  {
    path: 'signup-step3',
    component: CustomerStep3Component,
    pathMatch: 'full',
  },

  { path: 'store', component: StorePageComponent },
  { path: 'product/:id', component: ProductDetailsPageComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:'enabled'})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
