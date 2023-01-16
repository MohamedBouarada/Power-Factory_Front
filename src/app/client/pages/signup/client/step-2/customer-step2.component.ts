import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'seekmake-customer-step2',
  templateUrl: './customer-step2.component.html',
  styleUrls: ['./customer-step2.component.scss'],
})
export class CustomerStep2Component {
  constructor(
    private readonly router: Router,
    private readonly translateService: TranslateService
  ) {
    this.translateService.setDefaultLang('fr');
    this.translateService.use(localStorage.getItem('lang') || 'en');
  }
  nextStep() {
    this.router.navigate(['signup-step3']);
  }
  stepBack() {
    this.router.navigate(['signup-step1']);
  }
}
