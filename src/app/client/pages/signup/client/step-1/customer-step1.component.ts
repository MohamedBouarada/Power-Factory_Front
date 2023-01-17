import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { SignupFormProvider } from 'src/app/client/providers/singup-form-provider';

@Component({
  selector: 'seekmake-customer-step1',
  templateUrl: './customer-step1.component.html',
  styleUrls: ['./customer-step1.component.scss'],
})
export class CustomerStep1Component implements OnInit {
  constructor(
    private readonly router: Router,
    private readonly translateService: TranslateService,
    private readonly signupFormProvider: SignupFormProvider
  ) {
    this.translateService.setDefaultLang('fr');
    this.translateService.use(localStorage.getItem('lang') || 'en');
  }
  form: FormGroup;
  ngOnInit() {
    this.form = new FormGroup({
      fullName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
    });
  }
  submit() {
    this.signupFormProvider.signupForm({
      firstname: this.form.get('fullName').value.split(' ')[0],
      lastname: this.form.get('fullName').value.split(' ')[1],
      username: this.form.get('email').value,
    });
    this.nextStep();
  }
  nextStep() {
    this.router.navigate(['signup-step2']);
  }
  stepBack() {
    this.router.navigate(['signup']);
  }
}
