import { Component, OnInit } from '@angular/core';
import { PublisherService } from 'src/app/services/publisher.service';
import { Publisher } from 'src/app/models/Publisher';
import { ActivatedRoute } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-pubedit',
  templateUrl: './pubedit.component.html',
  styleUrls: ['./pubedit.component.css']
})
export class PubeditComponent implements OnInit {

  name: string;
  country: string;
  city: string;
  address:string;
  email:string;
  phone:string;
  publisher:Publisher;
  id: string;

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
    private route: ActivatedRoute,
    private publisherService: PublisherService
  ) { 
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.getPublisher()
  }

  getPublisher(){
    this.id = this.route.snapshot.paramMap.get('id');
    return this.publisherService.getById(this.id)
      .subscribe(publisher => {
        this.publisher = publisher
        this.name = publisher.name
        this.country = publisher.country
        this.city = publisher.city 
        this.address = publisher.address
        this.email = publisher.email
        this.phone = publisher.phone
      });
  }

  editPublisher() {
    this.publisherService.editPublisher(this.currentUser.token, this.id ,this.name, this.country, this.city, this.address, this.email, this.phone)
    .subscribe(
      data => {
        this.successMessage = "Publisheredited";
        this.errorMessage = null;
      },
      error => {
        this.errorMessage = "cant edit publisher ";
        this.successMessage = null;
    });
  }

}
