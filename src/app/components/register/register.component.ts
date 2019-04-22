import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { LoginService } from 'src/app/services/login.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private userService: UserService,
    private loginService: LoginService
  ) { }

  username: string;
  password: string;
  passwordRepeat: string;
  name: string;
  country: string;

  returnUrl: String;
  errorMessage: String;
  successMessage: String;

  usernameFormControl = new FormControl('', [
    Validators.required
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required
  ]);

  passwordRepeatFormControl = new FormControl('', [
    Validators.required
  ]);

 nameFormControl = new FormControl('', [
    Validators.required
  ]);


  countryFormControl = new FormControl('', [
    Validators.required
  ]);

  ngOnInit() {
    this.loginService.logout();
  }

  register() : void {
    if(this.password == this.passwordRepeat){
      this.userService.register(this.username, this.password, this.name,this.country)
        .subscribe(
          data => {
              this.successMessage = "Your account has been successfully created! You can now try to login."
              this.errorMessage = null;
          },
          error => {
            this.errorMessage = "We're sorry, that username has already been taken. Try something else.";
            this.successMessage = null;
        });
    } else {
      this.errorMessage = "We're sorry, the passwords you filled in aren't alike.";
      this.successMessage = null;
    }
  }

}
