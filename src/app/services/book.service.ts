import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from '../models/Book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private bookUrl = 'https://node-cside-jh.herokuapp.com/api/books';  // URL to web api

  constructor(
    private http: HttpClient) { }

  getAll (): Observable<Book[]> {
    return this.http.get<Book[]>(this.bookUrl)
  }

  getFive (): Observable<Book[]> {
    return this.http.get<Book[]>(this.bookUrl+'?limit=10')
  }

  getPopular (): Observable<Book> {
    return this.http.get<Book>(this.bookUrl+'?limit=1')
  }

  getById(id:string): Observable<Book> {
    return this.http.get<Book>(this.bookUrl+'?id='+id)
  }

  delete(token:string, id:string): Observable<Book> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': token
      })
    };
    return this.http.delete<any>(this.bookUrl+'?id='+id, httpOptions)
  }

  createBook(token: string, author: string, publisher : string, name: string, description: string, genre: string, language: string, publishdate : string, image : String): Observable<Book> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': token
      })
    };
    return this.http.post<Book>(this.bookUrl, { 
      "author": author,
      "publisher" : publisher,
      "name": name,
      "description": description,
	    "genre": genre,
      "language": language,
      "publishdate" : publishdate,
      "img" : image}, httpOptions)
  }

  editBook(token: string, id:string, name: string, description: string, genre: string, language: string, publishdate : string, image : string): Observable<Book> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': token
      })
    };
    return this.http.put<Book>(this.bookUrl, { 
      "id": id,
      "name": name,
      "description": description,
	    "genre": genre,
      "language": language,
      "publishdate" : publishdate,
      "img" : image,}, httpOptions)
  }
}
