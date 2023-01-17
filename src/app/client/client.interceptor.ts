import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthInterceptor} from "../admin/auth.interceptor";

@Injectable()
export class ClientInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const newReq =  request.clone({

      headers: request.headers.set("Authorization","bearer "+localStorage.getItem('power-factory-client-token'))
    })
    console.log('aaaaaaaaaaaaaaaaaaa')
    return next.handle(newReq);
  }

}

export const ClientAuthInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass:ClientInterceptor,
  multi:true
}
