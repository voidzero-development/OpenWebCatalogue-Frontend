import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';
import { BookService } from '../../services/book.service';
import { Book } from 'src/app/models/Book';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  displayedColumns: string[] = ['name', 'genre', 'publisher', 'author', 'details'];
  schedule : any;
  dbook: Book;

  @ViewChild(MatSort) sort: MatSort;

  constructor(private bookService: BookService){}

  ngOnInit() {
    this.getFive();
    this.getPopular();
  }

  getFive(): void {
    this.bookService.getFive()
        .subscribe(books => {
          this.schedule = new MatTableDataSource(books);
          this.schedule.sort = this.sort;
        })
  }

  getPopular(): void{
    this.bookService.getPopular()
        .subscribe(books => {
          this.dbook = books;
        })
  }
}
