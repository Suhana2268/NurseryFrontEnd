import { Injectable } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthJwtInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("Bearer"+sessionStorage.getItem('token'));
    if (sessionStorage.getItem('token')) {
      console.log("Interceptor called with "+ sessionStorage.getItem('token'));
      request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + sessionStorage.getItem('token')) })
    }
   
  return next.handle(request);
}
}

export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthJwtInterceptor, multi: true }
];
