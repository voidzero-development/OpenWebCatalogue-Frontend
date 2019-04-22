import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Publisher } from '../models/Publisher';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PublisherService {

  private publisherUrl = 'https://node-cside-jh.herokuapp.com/api/publishers';  // web api url

  constructor(
    private http: HttpClient) { }

  getAll(): Observable<Publisher[]> {
    return this.http.get<Publisher[]>(this.publisherUrl)
  }

  getById(id:string): Observable<Publisher> {
    return this.http.get<Publisher>(this.publisherUrl+'?id='+id)
  }

  editPublisher(token: string, id:string ,name: string, country: string, city: string, address: string,  email: string, phone: string): Observable<Publisher> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': token
      })
    };
    return this.http.put<Publisher>(this.publisherUrl, { 
      "id": id,
      "name": name,
	    "country": country,
      "city": city,
      "address": address,
      "email": email,
    "phone" : phone}, httpOptions)
  }

  createPublisher(token: string ,name: string, country: string, city: string, address: string,  email: string, phone: string): Observable<Publisher> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': token
      })
    };
    return this.http.post<Publisher>(this.publisherUrl, { 
      "name": name,
	    "country": country,
      "city": city,
      "address": address,
      "email": email,
      "phone" : phone}, httpOptions)
  }

  deletePublisher(token: string, id: string): Observable<Publisher> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': token
      })
    };
    return this.http.delete<Publisher>(this.publisherUrl+'?id='+id, httpOptions)
  }
}
