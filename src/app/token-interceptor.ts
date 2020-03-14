import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest
} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  token = `X3mhxdZRZN6XbOrswk8-xCaJUX3qQ8Zw6hoDSn74nAaKRHFzj34OA5I85NXSiYvGmR_qfSlgOrhe5l2dx_8YNLuYdZgH3c1aBM7bGBglm6W9tsJMLCiKewowPnU7B2aNLaoAxaLc2j39UuBeMArf1lCSQBQROcCXZEBajC66FscSpRU2O5cHYluRvkoCt-adbbN3QD6EXQBiQI1VT5AKMjCn4o8kNZrqJuikG0O1SZo`;
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.token}`
      }
    });
    return next.handle(req);
  }
}
