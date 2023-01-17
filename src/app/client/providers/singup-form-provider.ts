import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SignupFormProvider {
  private signupFormSource = {
    username: '',
    firstname: '',
    lastname: '',
    telephone: 0,
    password: '',
  };

  //signupForm$ = this.signupFormSource.asObservable();

  signupForm(data: any) {
    console.log(data);
    this.signupFormSource = { ...this.signupFormSource, ...data };
  }
  clearForm() {
    this.signupFormSource = {
      username: '',
      firstname: '',
      lastname: '',
      telephone: 0,
      password: '',
    };
  }

  getForm() {
    return this.signupFormSource;
  }
}
