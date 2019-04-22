import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginUrl = 'https://node-cside-jh.herokuapp.com/api/login';  // URL to web api
  private loggedIn = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(
    private http: HttpClient) { }

  login (username: String, password: String): Observable<any> {
    return this.http.post<any>(this.loginUrl, {"username": username, "password": password})
      .pipe(map(user => {
        // login successful if there's a jwt token in the response
        if (user && user.token) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.loggedIn.next(true);
        }
        return user;
      }));
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.loggedIn.next(false);
  }

  
}
