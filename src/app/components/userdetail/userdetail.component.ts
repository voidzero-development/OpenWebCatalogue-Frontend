import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/User';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {
  currentUser: any;
  user: User;
  isLoggedIn$: Observable<boolean>;
  helper: JwtHelperService = new JwtHelperService();
  decodedToken: any;

  errorMessage: String;
  successMessage: String;

  name: string;
  country: string;
  password: string;
  newPassword: string;

  constructor(private userService: UserService) { 
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.getUser();
  }

  getUser(){
    this.decodedToken = this.helper.decodeToken(this.currentUser.token);
    return this.userService.getById(this.decodedToken.userId)
      .subscribe(user => {
        this.user = user
        this.name = user.name
        this.country = user.country
      });
  }

  changeDetails(){
    this.userService.changeDetails(this.currentUser.token, this.name, this.country)
    .subscribe(
      data => {
          this.getUser();
          this.successMessage = "Account succesfully edited!!"
          this.errorMessage = null;
      },
      error => {
        this.errorMessage = "Due to an error we were unable to edit your user, please try at a later moment.";
        this.successMessage = null;
    });
  }

  changePassword(){
    this.userService.getById(this.decodedToken.userId)
      .subscribe(user => {
        if (user.password == this.password){
          if (this.password !== this.newPassword){
            this.userService.changePassword(this.currentUser.token, this.password, this.newPassword)
              .subscribe(
                data => {
                    this.getUser();
                    this.successMessage = "Your account has been successfully edited!"
                    this.errorMessage = null;
                },
                error => {
                  this.errorMessage = "Due to some difficulties we are unable to change your details, try again.";
                  this.successMessage = null;
              });
          } else {
            this.errorMessage = "Your old and new password are the same, your password hasn't been changed.";
            this.successMessage = null;
          }
        } else {
          this.errorMessage = "The password you've given, isn't the same as the one in our database.";
          this.successMessage = null;
        }
    });
  }

}
