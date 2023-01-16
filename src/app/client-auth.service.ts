import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

export interface IClientLogin {
  username: string;
  password: string;
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
}
