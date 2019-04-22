import { Component, OnInit } from '@angular/core';
import { AuthorService } from 'src/app/services/author.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-authorcreate',
  templateUrl: './authorcreate.component.html',
  styleUrls: ['./authorcreate.component.css']
})
export class AuthorcreateComponent implements OnInit {

  name:string;
  country: string;
  bio: string;
  birthyear: string;
  imgUri:string;

  currentUser: any;
  errorMessage: String;
  successMessage: String;

  nameFormControl = new FormControl('', [
    Validators.required
  ]);

  bioFormControl = new FormControl('', [
    Validators.required
  ]);

  countryFormControl = new FormControl('', [
    Validators.required
  ]);

  birthyearFormControl = new FormControl('', [
    Validators.required
  ]);

  imgUriFormControl = new FormControl('', [
    Validators.pattern(/^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/)
  ]);

  constructor(
    private router: Router,
    private authorService: AuthorService
  ) { 
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
  }

  createAuthor() {
    this.authorService.createAuthor(this.currentUser.token, this.name, this.country, this.bio, this.birthyear, this.imgUri)
    .subscribe(
      data => {
        this.router.navigate(['authorschema']);
      },
      error => {
        this.errorMessage = "Fatal error occured, author could not be created";
        this.successMessage = null;
    });
  }

}
