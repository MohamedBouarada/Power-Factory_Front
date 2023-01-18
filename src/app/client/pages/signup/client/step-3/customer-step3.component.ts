import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { ClientAuthService } from 'src/app/client-auth.service';
import { SignupFormProvider } from 'src/app/client/providers/singup-form-provider';

@Component({
  selector: 'seekmake-customer-step3',
  templateUrl: './customer-step3.component.html',
  styleUrls: ['./customer-step3.component.scss'],
})
export class CustomerStep3Component implements OnInit {
  passwordFormControl = new FormGroup({
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl(''),
  });
  confirm: FormControl = this.passwordFormControl.get(
    'confirmPassword'
  ) as FormControl;
  username = '';
  firstname = '';
  lastname = '';
  telephone = 0;

  constructor(
    private readonly translateService: TranslateService,
    private readonly router: Router,
    private readonly clientAuthService: ClientAuthService,
    private readonly toastr: ToastrService,
    private readonly signupFormProvider: SignupFormProvider
  ) {
    this.translateService.setDefaultLang('fr');
    this.translateService.use(localStorage.getItem('lang') || 'en');
  }
  ngOnInit() {
    console.log('here third step');
    console.log('data : ', this.signupFormProvider.getForm());
    this.username = this.signupFormProvider.getForm()['username'];
    this.firstname = this.signupFormProvider.getForm()['firstname'];
    this.lastname = this.signupFormProvider.getForm()['lastname'];
    this.telephone = this.signupFormProvider.getForm()['telephone'];
    console.log('got : ');
    console.log(this.firstname);
    console.log(this.lastname);
    console.log(this.telephone);
    console.log(this.username);
  }
  /*
    this.signupFormProvider.getForm().subscribe({
      next: (data) => {
        if (
          data.step1 && // 👈 null and undefined check
          Object.keys(data.step1).length === 0 &&
          Object.getPrototypeOf(data.step1) === Object.prototype
        ) {
          console.log('data : ', data);
          this.username = data['step1']['email'];
          this.firstname = data['step1']['fullName'].split(' ')[0];
          this.lastname = data['step1']['fullName'].split(' ')[1];
        }
        if (
          data.step2 && // 👈 null and undefined check
          Object.keys(data.step2).length === 0 &&
          Object.getPrototypeOf(data.step2) === Object.prototype
        ) {
          this.telephone = data['step2']['phone'];
        }
        console.log('got : ');
        console.log(this.firstname);
        console.log(this.lastname);
        console.log(this.telephone);
        console.log(this.username);
      },
    });
  */

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
  matchPasswords() {
    if (
      this.passwordFormControl.get('confirmPassword').value !==
      this.passwordFormControl.get('password').value
    ) {
      this.confirm.setErrors({ mismatch: true });
    }
  }
  signUp() {
    this.matchPasswords();
    console.log('before form valid');
    console.log(this.passwordFormControl);
    console.log(this.passwordFormControl.valid);
    if (this.passwordFormControl.valid) {
      console.log('in form valid');
      this.clientAuthService
        .signup({
          username: this.username,
          password: this.passwordFormControl.get('password').value,
          firstname: this.firstname,
          lastname: this.lastname,
          telephone: this.telephone,
        })
        .subscribe({
          next: (response) => {
            console.log('response', response);

            // this.signupFormProvider.password =
            //   this.passwordFormControl.get('password').value;25
            this.router.navigate(['']);
          },
          error: (error) => {
            console.log(error);
            this.toastr.error(error.error.message);
          },
        });
    }
  }
}
