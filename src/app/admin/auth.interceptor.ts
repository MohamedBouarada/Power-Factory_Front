import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpHeaders, HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {


    if (request.headers.has("admin-flag")) {
      //console.log('here in interceptor',request)
      const newReq =  request.clone({
        /*
        headers: new HttpHeaders({...request.headers ,
          'Authorization': 'bearer '+localStorage.getItem('power-factory-admin-token')})
          */
        headers: request.headers.set("Authorization","bearer "+localStorage.getItem('power-factory-admin-token'))
      })
     // console.log(newReq)
      return next.handle(newReq);

    }
    return next.handle(request)
     }
}

export const AuthInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass:AuthInterceptor,
  multi:true
}
