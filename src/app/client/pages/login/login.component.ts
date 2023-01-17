import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { ClientAuthService } from 'src/app/client-auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  showPassword = false;
  rating = [1, 1, 1, 1, 1];
  loginFormControl = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
    password: new FormControl('', [Validators.required]),
  });
  usernameFormControl = new FormControl('');
  constructor(
    private readonly translateService: TranslateService,
    private readonly router: Router,
    private readonly clientAuthService: ClientAuthService,
    private toastr: ToastrService
  ) {
    this.translateService.setDefaultLang('en');
    this.translateService.use(localStorage.getItem('lang') || 'en');
  }
  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
  signIn() {
    this.router.navigate(['signup']);
  }
  logIn() {
    this.clientAuthService
      .login({
        username: this.loginFormControl.get('username').value,
        password: this.loginFormControl.get('password').value,
      })
      .subscribe({
        next: (response) => {
          console.log(response);
          localStorage.setItem(
            'power-factory-client-token',
            response['access_token'].toString()
          );
          console.log(localStorage.getItem('power-factory-client-token'));
          this.router.navigate(['home']);
        },
        error: (error) => {
          console.log(error);
          this.toastr.error(error.error.message);
        },
      });
  }
}
