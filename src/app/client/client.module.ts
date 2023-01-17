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
import { PromotionalProductsComponent } from './components/promotional-products/promotional-products.component';
import { TitleComponent } from './components/shared/title/title.component';
import { MethodsComponent } from './components/methods/methods.component';
import { ButtonComponent } from './components/shared/button/button.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProgramsComponent } from './pages/programs/programs.component';
import { DefaultLandingImagePipe } from './pipes/default-landing-image.pipe';
import { GymClassesComponent } from './components/gym-classes/gym-classes.component';
import { GymProgramsComponent } from './components/gym-programs/gym-programs.component';
import { CoachesComponent } from './pages/coaches/coaches.component';
import { TrainersComponent } from './components/trainers/trainers.component';
import { TrainingTechniquesComponent } from './components/training-techniques/training-techniques.component';
import { CardComponent } from './components/shared/card/card.component';
import { ScrollAnimationDirectiveDirective } from './directives/scroll-animation-directive.directive';
import { NavbarDirective } from './components/navbar/navbar.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { TranslateModule } from '@ngx-translate/core';
import { StepProgressComponent } from './components/shared/step-progress/step-progress.component';
import { CustomerStep1Component } from './pages/signup/client/step-1/customer-step1.component';
import { CustomerStep2Component } from './pages/signup/client/step-2/customer-step2.component';
import { CustomerStep3Component } from './pages/signup/client/step-3/customer-step3.component';
import { ClientRoutingModule } from './client-routing.module';
import {ClientAuthInterceptorProvider} from "./client.interceptor";
import { NotfoundComponent } from './pages/notfound/notfound.component';

@NgModule({
  declarations: [
    HomeComponent,
    VideoComponent,
    DefaultVideoPipe,
    NavbarComponent,
    AboutUsComponent,
    BlogsComponent,
    PartnersComponent,
    PromotionalProductsComponent,
    TitleComponent,
    MethodsComponent,
    ButtonComponent,
    FooterComponent,
    ProgramsComponent,
    DefaultLandingImagePipe,
    GymClassesComponent,
    GymProgramsComponent,
    CoachesComponent,
    TrainersComponent,
    TrainingTechniquesComponent,
    CardComponent,
    ScrollAnimationDirectiveDirective,
    NavbarDirective,

    LoginComponent,
    SignupComponent,
    StepProgressComponent,
    CustomerStep1Component,
    CustomerStep2Component,
    CustomerStep3Component,
    NotfoundComponent,
  ],
  exports: [NavbarComponent,FooterComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    ClientRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    CarouselModule,
    // ClientRoutingModule

    ReactiveFormsModule,
    CarouselModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers : [ClientAuthInterceptorProvider]
})
export class ClientModule {}
