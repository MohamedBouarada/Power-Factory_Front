import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './client/pages/home/home.component';
import { LoginComponent } from './client/pages/login/login.component';
import { CustomerStep1Component } from './client/pages/signup/client/step-1/customer-step1.component';
import { CustomerStep2Component } from './client/pages/signup/client/step-2/customer-step2.component';
import { CustomerStep3Component } from './client/pages/signup/client/step-3/customer-step3.component';
import { SignupComponent } from './client/pages/signup/signup.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
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

  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
