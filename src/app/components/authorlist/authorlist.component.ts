import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';
import { AuthorService } from '../../services/author.service';
import { Author } from 'src/app/models/Author';

@Component({
  selector: 'app-authorlist',
  templateUrl: './authorlist.component.html',
  styleUrls: ['./authorlist.component.css']
})
export class AuthorlistComponent implements OnInit {

  
  /*
  name: string;
    country: string;
    bio: string;
    birthyear: string;
    img: string;


  */
  

  displayedColumns: string[] = ['name', 'country', 'birthyear', 'details'];
  authlist : any;

  @ViewChild(MatSort) sort: MatSort;

  constructor(private authorService: AuthorService){}

  ngOnInit() {
    this.getAll();
  }

  getAll(): void {
    this.authorService.getAll()
        .subscribe(ats => {
          this.authlist = new MatTableDataSource(ats);
          this.authlist.sort = this.sort;
        })
  }

}
