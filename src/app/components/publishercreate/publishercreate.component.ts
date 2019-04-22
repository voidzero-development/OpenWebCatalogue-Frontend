import { Component, OnInit } from '@angular/core';
import { PublisherService } from 'src/app/services/publisher.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-publishercreate',
  templateUrl: './publishercreate.component.html',
  styleUrls: ['./publishercreate.component.css']
})
export class PublishercreateComponent implements OnInit {

  name: string;
  country: string;
  city: string;
  address:string;
  email:string;
  phone:string;

  currentUser: any;
  errorMessage: String;
  successMessage: String;

  nameFormControl = new FormControl('', [
    Validators.required
  ]);

  countryFormControl = new FormControl('', [
    Validators.required
  ]);

  cityFormControl = new FormControl('', [
    Validators.required
  ]);

  

  addressFormControl = new FormControl('', [
    Validators.required
  ]);

  emailFormControl = new FormControl('', [
    Validators.required
  ]);

  phoneFormControl = new FormControl('', [
    Validators.required
  ]);

  


  constructor(
    private router: Router,
    private publisherService: PublisherService
  ) { 
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
  }

  createPublisher() {
    this.publisherService.createPublisher(this.currentUser.token, this.name, this.country, this.city, this.address, this.email, this.phone)
    .subscribe(
      data => {
        this.router.navigate(['publisherschema']);
      },
      error => {
        this.errorMessage = "Fatal error occured, publisher could not be created";
        this.successMessage = null;
    });
  }

}
