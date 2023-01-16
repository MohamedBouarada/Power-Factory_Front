import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminNavigationComponent } from './admin-navigation/admin-navigation.component';

const ADMIN_ROUTES: Routes = [
  {
    path: 'admin',
    component: AdminNavigationComponent,
    // children: [
    //   { path: 'step1', component: CustomerStep1Component, pathMatch: 'full' },
    //   { path: 'step2', component: CustomerStep2Component, pathMatch: 'full' },
    //   { path: 'step3', component: CustomerStep3Component, pathMatch: 'full' },
    // ],
  },
  {
    path: '**',
    redirectTo: '/admin',
    pathMatch: 'full',
  },
];
@NgModule({
  imports: [RouterModule.forChild(ADMIN_ROUTES)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
