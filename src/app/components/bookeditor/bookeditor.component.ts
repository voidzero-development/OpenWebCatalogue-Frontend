import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthorService } from 'src/app/services/author.service';
import { PublisherService } from 'src/app/services/publisher.service';
import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/app/models/Book';
import { Author } from 'src/app/models/Author';
import { Publisher } from 'src/app/models/Publisher';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-bookeditor',
  templateUrl: './bookeditor.component.html',
  styleUrls: ['./bookeditor.component.css']
})
export class BookeditorComponent implements OnInit {

    id: string;
    book: Book;
    name: string;
    description: string;
    genre: string;
    language: string;
    publishdate:string;
    image:string;


    


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

  currentUser: any;
  errorMessage: String;
  successMessage: String;

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
    Validators.required
  ]);


  constructor(
    private route: ActivatedRoute,
    private bookService: BookService
  ) { 
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.getBook()
  }

  getBook(){
    this.id = this.route.snapshot.paramMap.get('id');
    return this.bookService.getById(this.id)
      .subscribe(book => {
        this.book = book
        this.name = book.name
        this.genre = book.genre
        this.language = book.language
        this.description= book.description
        this.publishdate = book.publishdate
        this.image = book.image
      });
  }



  //sig: token: string, id:string, name: string, description: string, genre: string, language: string, publishdate : string, image : string
  editBook() {
    this.bookService.editBook(this.currentUser.token, this.id,  this.name, this.description, this.genre, this.language, this.publishdate, this.image)
    .subscribe(
      data => {
        this.successMessage = "book has been edited";
        this.errorMessage = null;
      },
      error => {
        this.errorMessage = "book couldnt be edited";
        this.successMessage = null;
    });
  }

}
