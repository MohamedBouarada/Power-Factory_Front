import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './client/pages/home/home.component';
import {StorePageComponent} from "./store/store-page/store-page.component";
import {ProductDetailsPageComponent} from "./store/product-details-page/product-details-page.component";


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'store', component: StorePageComponent},
  {path:'product/:id',component:ProductDetailsPageComponent},
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
