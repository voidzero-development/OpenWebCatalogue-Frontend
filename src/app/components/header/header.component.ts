import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from '../../services/login.service';
import { JwtHelperService } from '@auth0/angular-jwt';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentUser: any;
  isLoggedIn$: Observable<boolean>;
  helper: JwtHelperService = new JwtHelperService();
  decodedToken: String;

  constructor(
    private loginService : LoginService
  ) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
   }

  ngOnInit() {
    this.isLoggedIn$ = this.loginService.isLoggedIn;
    
    if(this.currentUser != undefined){
      this.decodedToken = this.helper.decodeToken(this.currentUser.token);
    }
  }

  onLogout(){
    this.loginService.logout();
  }
  

}
