import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

export interface IClientLogin {
  username: string;
  password: string;
}

export interface IClientSignup {
  username: string;
  password: string;
  firstname: string;
  lastname: string;
  telephone: number;
}
export interface ILoginResponse {
  access_token: string;
}

@Injectable({
  providedIn: 'root',
})
export class ClientAuthService {
  constructor(private readonly http: HttpClient) {}

  login(client: IClientLogin) {
    return this.http.post<ILoginResponse>(
      environment.apiBaseUrl + '/auth/log-in/',
      client
    );
  }
  signup(client: IClientSignup) {
    console.log('in sign upppp');
    console.log(client);
    return this.http.post(environment.apiBaseUrl + '/auth/sign-up/', client);
  }
}
