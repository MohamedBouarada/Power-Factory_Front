import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'seekmake-customer-step1',
  templateUrl: './customer-step1.component.html',
  styleUrls: ['./customer-step1.component.scss'],
})
export class CustomerStep1Component {
  constructor(
    private readonly router: Router,
    private readonly translateService: TranslateService
  ) {
    this.translateService.setDefaultLang('fr');
    this.translateService.use(localStorage.getItem('lang') || 'en');
  }
  nextStep() {
    this.router.navigate(['/customer-sign-up-2']);
  }
  stepBack() {
    this.router.navigate(['/sign-up']);
  }
}
