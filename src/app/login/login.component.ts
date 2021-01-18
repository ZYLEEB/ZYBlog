import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../Service/auth.service';
import { ActivatedRoute, Router } from '@angular/Router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new FormGroup({
    user: new FormControl(),
    password: new FormControl(),
  });

  wrongInfo: boolean = false;

  constructor(private authService: AuthService, public router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void { }

  login() {
    if (this.user.value.user?.length >= 3 && this.user.value.password?.length >= 5) {
      this.authService.login(this.user.value).subscribe(number => {
        if (number == 1) {
          this.authService.isLoginBehavior.next('true');
          this.router.navigate(['../edit'])
        } else {
          this.wrongInfo = true;
        }
      })
    }
  }
}
