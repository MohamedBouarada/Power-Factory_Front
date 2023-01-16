import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerStep1Component } from './pages/signup/client/step-1/customer-step1.component';
import { CustomerStep2Component } from './pages/signup/client/step-2/customer-step2.component';
import { CustomerStep3Component } from './pages/signup/client/step-3/customer-step3.component';
import { SignupComponent } from './pages/signup/signup.component';
const routes: Routes = [
  {
    path: 'signup',
    component: SignupComponent,
    children: [
      { path: 'step1', component: CustomerStep1Component, pathMatch: 'full' },
      { path: 'step2', component: CustomerStep2Component, pathMatch: 'full' },
      { path: 'step3', component: CustomerStep3Component, pathMatch: 'full' },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule {}
