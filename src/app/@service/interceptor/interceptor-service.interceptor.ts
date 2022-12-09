import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class InterceptorServiceInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log(request.url);
    if (request.url.includes('weatherapi')) {
      request = request.clone({
        setParams: { key: `58e9336973e94619bc1100938220912` },
      });
    } else if (request.url.includes('mapbox')) {
      request = request.clone({
        setParams: {
          access_token: `pk.eyJ1IjoibXVrdWwwNTk2IiwiYSI6ImNqdzF4empkczBvczkzenBzOWxpZTJrdzAifQ.skvI3yfkPhyRI9upXgU5tA`,
        },
      });
    }
    return next.handle(request);
  }
}
