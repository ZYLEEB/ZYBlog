import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLogin: string = 'false';
  public isLoginBehavior = new BehaviorSubject(this.isLogin);
  public sharedIsLogin = this.isLoginBehavior.asObservable();

  constructor(private http: HttpClient) {

    this.sharedIsLogin.subscribe(isLogin => {
      this.isLogin = isLogin
    })
  }

  auth() {
    return this.http.get(environment.baseURL + "/authentication.do")
  }

  login(condition): Observable<number> {
    let param = new HttpParams();
    param = param
      .set('user', condition.user)
      .set('password', condition.password);
    return this.http.post<number>(environment.baseURL + "/login.do", param)
  }
}
