// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './pages/home/home.component';
// import { ProgramsComponent } from './pages/programs/programs.component';
// import { CoachesComponent } from './pages/coaches/coaches.component';

// const routes: Routes = [
//     // { path: '', component: HomeComponent ,},
//     // { path: 'programs', component: ProgramsComponent },
//     // { path: 'coaches', component: CoachesComponent },
// //   { path: '**', redirectTo: '/', pathMatch: 'full' },
// ];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule],
// })
// export class ClientRoutingModule {}
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './pages/notfound/notfound.component';
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
  {
    path: 'notfound',
    component: NotfoundComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule {}
