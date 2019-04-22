import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Book } from 'src/app/models/Book';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  book: Book;
  currentUser: any;
  isLoggedIn$: Observable<boolean>;
  helper: JwtHelperService = new JwtHelperService();
  decodedToken: String;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
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
    this.getBook();
  }

  getBook(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.bookService.getById(id)
    .subscribe(book => this.book = book);
  }

}
