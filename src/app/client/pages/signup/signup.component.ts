import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  rating = [1, 1, 1, 1, 1];
  selected = 0;
  constructor(
    private readonly router: Router,
    private readonly translateService: TranslateService
  ) {
    this.translateService.setDefaultLang('en');
    this.translateService.use(localStorage.getItem('lang') || 'en');
  }

  toggleSelected(target: number) {
    this.selected = target;
  }
  handleCreateAccount() {
    if (this.selected === 0) {
      this.router.navigate(['signup-step1']);
    } else {
      console.log('under construction');
      this.router.navigateByUrl('signup/step1');
    }
  }
  handleLogin() {
    this.router.navigateByUrl('/login');
  }
}
