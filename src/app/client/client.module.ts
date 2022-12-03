import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material/material.module';
import { HomeComponent } from './pages/home/home.component';
import { VideoComponent } from './components/video/video.component';
import { DefaultVideoPipe } from './pipes/default-video.pipe';

@NgModule({
  declarations: [
    HomeComponent,
    VideoComponent,
    DefaultVideoPipe,
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
