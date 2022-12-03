import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material/material.module';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  exports:[],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ]
})
export class ClientModule { }
