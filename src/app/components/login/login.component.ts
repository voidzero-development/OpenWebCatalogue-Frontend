import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

import {Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private loginService: LoginService){ }

  username: String;
  password: String;
  returnUrl: String;
  errorMessage: String;
  successMessage: String;

  ngOnInit() {
    this.loginService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() : void {
    this.loginService.login(this.username, this.password)
    .subscribe(
      data => {
          this.router.navigate([this.returnUrl]);
      },
      error => {
        this.errorMessage = "You tried to login with incorrect credentials!";
    });
  }
}
