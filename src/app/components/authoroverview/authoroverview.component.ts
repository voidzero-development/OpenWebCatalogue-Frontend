import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthorService } from 'src/app/services/author.service';
import { MatTableDataSource, MatSort } from '@angular/material';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-authoroverview',
  templateUrl: './authoroverview.component.html',
  styleUrls: ['./authoroverview.component.css']
})
export class AuthoroverviewComponent implements OnInit {

  displayedColumns: string[] = ['name', 'bio', 'delete', 'details'];
  list: any;

  currentUser: any;

  errorMessage: String;
  successMessage: String;

  @ViewChild(MatSort) sort: MatSort;

  constructor(private authorService:AuthorService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
   }

  ngOnInit() {
    this.getAll();
  }

  getAll(): void {
    this.authorService.getAll()
      .subscribe(authors => {
        this.list = new MatTableDataSource(authors);
      })
  }

  deleteAuthor(authorId:string) {
    this.authorService.deleteAuthor(this.currentUser.token, authorId)
    .subscribe(
      data => {
        this.successMessage = "The author has been removed.";
        this.errorMessage = null;
        this.getAll();
      },
      error => {
        this.errorMessage = "The author couldn't be removed";
        this.successMessage = null;
    });
  }

}
