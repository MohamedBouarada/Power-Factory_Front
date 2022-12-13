import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material/material.module';
import { HomeComponent } from './pages/home/home.component';
import { VideoComponent } from './components/video/video.component';
import { DefaultVideoPipe } from './pipes/default-video.pipe';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { PartnersComponent } from './components/partners/partners.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    HomeComponent,
    VideoComponent,
    DefaultVideoPipe,
    NavbarComponent,
    AboutUsComponent,
    BlogsComponent,
    PartnersComponent,
  ],
  exports:[],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    CarouselModule
  ]
})
export class ClientModule { }
