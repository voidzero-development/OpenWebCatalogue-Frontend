import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Author } from '../models/Author';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  private authorUrl = 'https://node-cside-jh.herokuapp.com/api/authors';  // URL to web api

  constructor(
    private http: HttpClient) { }

  getAll(): Observable<Author[]> {
    return this.http.get<Author[]>(this.authorUrl)
  }

  getById(id:string): Observable<Author> {
    return this.http.get<Author>(this.authorUrl+'?id='+id)
  }

  editAuthor(token: string, id:string ,name: string, country: string, bio: string, birthyear: string, imgLink: string): Observable<Author> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': token
      })
    };
    return this.http.put<Author>(this.authorUrl, { 
      "id": id,
      "name": name,
	    "country": country,
      "bio": bio,
      "birthyear": birthyear,
	    "img": imgLink}, httpOptions)
  }

  createAuthor(token: string, name: string, country: string, bio: string, birthyear: string, imgLink: string): Observable<Author> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': token
      })
    };
    return this.http.post<Author>(this.authorUrl, { 
      "name": name,
	    "country": country,
      "bio": bio,
      "birthyear": birthyear,
	    "img": imgLink}, httpOptions)
  }

  deleteAuthor(token: string, id: string): Observable<Author> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': token
      })
    };
    return this.http.delete<Author>(this.authorUrl+'?id='+id, httpOptions)
  }
}
