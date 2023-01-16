import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'seekmake-customer-step3',
  templateUrl: './customer-step3.component.html',
  styleUrls: ['./customer-step3.component.scss'],
})
export class CustomerStep3Component {
  constructor(
    private readonly translateService: TranslateService,
    private readonly router: Router
  ) {
    this.translateService.setDefaultLang('fr');
    this.translateService.use(localStorage.getItem('lang') || 'en');
  }
  showPassword = [false, false];
  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
  }
  toggleShowPassword(i: number) {
    this.showPassword[i] = !this.showPassword[i];
  }
  stepBack() {
    this.router.navigate(['signup-step2']);
  }
}
