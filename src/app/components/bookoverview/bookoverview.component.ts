import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { BookService } from 'src/app/services/book.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-bookoverview',
  templateUrl: './bookoverview.component.html',
  styleUrls: ['./bookoverview.component.css']
})
export class BookoverviewComponent implements OnInit {

  displayedColumns: string[] = ['name', 'author','publisher', 'delete', 'details'];

  /*
 author: Author;
    name: string;
    description: string;
    genre: string;
    language: string;
    publishdate:string;
    image:string;
    publisher:Publisher;

  */
  schedule : any;

  @ViewChild(MatSort) sort: MatSort;

  currentUser: any;
  isLoggedIn$: Observable<boolean>;
  helper: JwtHelperService = new JwtHelperService();
  decodedToken: any;

  errorMessage: String;
  successMessage: String;

  constructor(
    private bookService: BookService
    ){
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.bookService.getAll()
        .subscribe(books => {
          this.schedule = new MatTableDataSource(books);
          this.schedule.sort = this.sort;
        })
  }

  deleteBook(bookId:string) {
    this.bookService.delete(this.currentUser.token, bookId)
    .subscribe(
      data => {
        this.successMessage = "Book deleted, you cannot reverse this change.";
        this.errorMessage = null;
        this.getAll();
      },
      error => {
        this.errorMessage = "This book could not be removed.";
        this.successMessage = null;
    });
  }

}
