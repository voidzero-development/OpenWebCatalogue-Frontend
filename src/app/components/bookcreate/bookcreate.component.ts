import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { AuthorService } from 'src/app/services/author.service';
import { Author } from 'src/app/models/Author';

import { PublisherService } from 'src/app/services/publisher.service';
import { Publisher} from 'src/app/models/Publisher';

import { Router } from '@angular/router';
import { Time } from '@angular/common';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-bookcreate',
  templateUrl: './bookcreate.component.html',
  styleUrls: ['./bookcreate.component.css']
})
export class BookcreateComponent implements OnInit {

  author:string;
  publisher:string;
  name: string;
    description: string;
    genre: string;
    language: string;
    publishdate:string;
    image:string;



  authorList: Author[];
  publisherList: Publisher[];


  /*
_id: string;
    author: Author;
    publisher: Publisher;
    name: string;
    description: string;
    genre: string;
    language: string;
    publishdate:string;
    image:string;


  */


  //publisher toevoegen!

  currentUser: any;
  errorMessage: String;
  successMessage: String;

  authorFormControl = new FormControl('', [
    Validators.required
  ]);

  publisherFormControl = new FormControl('', [
    Validators.required
  ]);

  nameFormControl = new FormControl('', [
    Validators.required
  ]);

 descriptionFormControl = new FormControl('', [
    Validators.required
  ]);

 genreFormControl = new FormControl('', [
    Validators.required
  ]);

  languageFormControl = new FormControl('', [
    Validators.required
  ]);

  publishdateFormControl = new FormControl('', [
    Validators.required
  ]);


  imageFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/)
  ]);

  

  constructor(
    private router: Router,
    private bookService: BookService,
    private authorService: AuthorService,
    private publisherService: PublisherService
  ) { 
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.getAllAuthor()
    this.getAllPub()
  }

  getAllAuthor() {
    this.authorService.getAll()
      .subscribe(authors => {
        this.authorList = authors;
      })
  }

  getAllPub() {
    this.publisherService.getAll()
      .subscribe(pubs => {
        this.publisherList = pubs;
      })
  }

  createBook() {
    this.bookService.createBook(this.currentUser.token, this.author,this.publisher, this.name, this.description, this.genre, this.language, this.publishdate, this.image)
    .subscribe(
      data => {
        this.router.navigate(['bookschema']);
      },
      error => {
        this.errorMessage = "Book could not be created, please check all the details";
        this.successMessage = null;
    });
  }

}
