import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';
import { BookService } from '../../services/book.service';
import { Book } from 'src/app/models/Book';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  displayedColumns: string[] = ['name', 'genre', 'publisher','publishdate', 'author', 'details'];
  flist : any;

  @ViewChild(MatSort) sort: MatSort;

  constructor(private bookService: BookService){}

  ngOnInit() {
    this.getAll();
  }

  getAll(): void {
    this.bookService.getAll()
        .subscribe(books => {
          this.flist = new MatTableDataSource(books);
          this.flist.sort = this.sort;
        })
  }

}
