import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './client/pages/home/home.component';
import { ProgramsComponent } from './client/pages/programs/programs.component';
import { CoachesComponent } from './client/pages/coaches/coaches.component';


const routes: Routes = [
  { path: '', component: HomeComponent ,},
    { path: 'programs', component: ProgramsComponent },
    { path: 'coaches', component: CoachesComponent },
  // { path: '', component: HomeComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
