import { Component, OnInit } from '@angular/core';
import { AuthorService } from 'src/app/services/author.service';
import { Author } from 'src/app/models/Author';
import { ActivatedRoute } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-authoreditor',
  templateUrl: './authoreditor.component.html',
  styleUrls: ['./authoreditor.component.css']
})
export class AuthoreditorComponent implements OnInit {

  name:string;
  bio: string;
  birthyear:string;
  country:string;
  img:string;
  cauthor: Author;
  id: string;

  /*
token: string, id:string ,name: string, country: string, bio: string, birthyear: string, imgLink: string
  */

  currentUser: any;
  errorMessage: String;
  successMessage: String;

  nameFormControl = new FormControl('', [
    Validators.required
  ]);

  bioFormControl = new FormControl('', [
    Validators.required
  ]);

  birthyearFormControl = new FormControl('', [
    Validators.required
  ]);

  countryFormControl = new FormControl('', [
    Validators.required
  ]);

  imgFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/)
  ]);

  constructor(
    private route: ActivatedRoute,
    private authorService: AuthorService
  ) { 
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.getAuthor()
  }

  getAuthor(){
    this.id = this.route.snapshot.paramMap.get('id');
    return this.authorService.getById(this.id)
      .subscribe(author => {
        this.cauthor = author
        this.name = author.name
        this.country = author.country
        this.bio = author.bio
        this.birthyear = author.birthyear
        this.img = author.img
      });
  }

  editAuthor() {
    this.authorService.editAuthor(this.currentUser.token, this.id ,this.name,this.country, this.bio, this.birthyear, this.img)
    .subscribe(
      data => {
        this.successMessage = "Author successfully edited";
        this.errorMessage = null;
      },
      error => {
        this.errorMessage = "The author couldnt be edited, sorry.";
        this.successMessage = null;
    });
  }

}
