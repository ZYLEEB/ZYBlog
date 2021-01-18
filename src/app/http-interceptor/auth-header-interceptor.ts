import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthService } from '../Service/auth.service';

@Injectable()
export class AuthHeaderInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {

  }

  intercept(request: HttpRequest<any>, next: HttpHandler,) {
    const authToken = this.authService.isLogin;
    const authRequest = request.clone({
      setHeaders: { Authorization: authToken }
    });
    return next.handle(authRequest);

  }
}
