import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LanguageInterceptor implements HttpInterceptor {
  //   constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const lang = localStorage.getItem('lang');
    console.log('language interceptor : ' + lang);

    if (lang) {
      const cloned = req.clone({
        setParams: { lang: lang },
      });
      return next.handle(cloned);
    }
    return next.handle(req);
  }
}
