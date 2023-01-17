import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SignupFormProvider } from 'src/app/client/providers/singup-form-provider';

@Component({
  selector: 'seekmake-customer-step2',
  templateUrl: './customer-step2.component.html',
  styleUrls: ['./customer-step2.component.scss'],
})
export class CustomerStep2Component implements OnInit {
  form: FormGroup;
  constructor(
    private readonly router: Router,
    private readonly translateService: TranslateService,
    private readonly signupFormProvider: SignupFormProvider
  ) {
    this.translateService.setDefaultLang('en');
    this.translateService.use(localStorage.getItem('lang') || 'en');
  }
  ngOnInit() {
    this.form = new FormGroup({
      address: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      zip: new FormControl('', Validators.required),
    });
  }
  submit() {
    this.signupFormProvider.signupForm({
      address: this.form.get('address').value,
      country: this.form.get('country').value,
      city: this.form.get('city').value,
      telephone: this.form.get('phone').value,
      zip: this.form.get('zip').value,
    });
    this.nextStep();
  }
  nextStep() {
    this.router.navigate(['signup-step3']);
  }
  stepBack() {
    this.router.navigate(['signup-step1']);
  }
}
