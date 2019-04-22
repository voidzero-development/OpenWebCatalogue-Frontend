import { Component, OnInit, ViewChild } from '@angular/core';
import { PublisherService } from 'src/app/services/publisher.service';
import { MatTableDataSource, MatSort } from '@angular/material';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-pubview',
  templateUrl: './pubview.component.html',
  styleUrls: ['./pubview.component.css']
})
export class PubviewComponent implements OnInit {

  displayedColumns: string[] = ['name', 'country', 'city', 'address', 'email','phone', 'delete', 'details'];
  list: any;

  /*

  name: string;
    country: string;
    city: string;
    address:string;
    email:string;
    phone:string;


  */

  currentUser: any;

  errorMessage: String;
  successMessage: String;

  @ViewChild(MatSort) sort: MatSort;

  constructor(private publisherService:PublisherService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
   }

  ngOnInit() {
    this.getAll();
  }

  getAll(): void {
    this.publisherService.getAll()
      .subscribe(publishers => {
        this.list = new MatTableDataSource(publishers);
      })
  }

  deletePublisher(publisherId:string) {
    this.publisherService.deletePublisher(this.currentUser.token, publisherId)
    .subscribe(
      data => {
        this.successMessage = "The publisher has been removed";
        this.errorMessage = null;
        this.getAll();
      },
      error => {
        this.errorMessage = "The publisher cant be removed";
        this.successMessage = null;
    });
  }

}
