import { Component, OnInit } from '@angular/core';
import { AuthorService } from 'src/app/services/author.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Author } from 'src/app/models/Author';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-authordetail',
  templateUrl: './authordetail.component.html',
  styleUrls: ['./authordetail.component.css']
})
export class AuthordetailComponent implements OnInit {

  author: Author;
  currentUser: any;
  isLoggedIn$: Observable<boolean>;
  helper: JwtHelperService = new JwtHelperService();
  decodedToken: String;

  constructor(
    private route: ActivatedRoute,
    private authorService: AuthorService,
    private location: Location,
    private loginService : LoginService
  ) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
   }

  ngOnInit() {
    this.isLoggedIn$ = this.loginService.isLoggedIn;
    
    if(this.currentUser != undefined){
      this.decodedToken = this.helper.decodeToken(this.currentUser.token);
      console.log(this.decodedToken)
    }
    this.getAuthor();
  }

  getAuthor(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.authorService.getById(id)
    .subscribe(author => this.author = author);
  }


}
