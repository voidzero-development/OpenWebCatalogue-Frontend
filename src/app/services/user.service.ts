import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl = 'http://node-cside-jh.herokuapp.com/api/users';

  constructor(
    private http: HttpClient) {
      
    }


  register (username: string, password: string, name: string, country: string): Observable<any> {
    return this.http.post<any>(this.userUrl, {"username": username, "password": password, "name": name, "country": country})
      .pipe(map(user => {
        // login successful if there's a jwt token in the response
        if (user && user.code == 201) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            return user;
        } else {
          return false;
        }
      }));
  }

  getById(id:String): Observable<User> {
    return this.http.get<User>(this.userUrl+'?id='+id)
  }

  changeDetails (token: string, name: string, country: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': token
      })
    };
    console.log(country)
    return this.http.put<any>(this.userUrl, {"name" : name , "country": country}, httpOptions)
      .pipe(map(user => {
        // login successful if there's a jwt token in the response
        if (user && user.code == 201) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            return user;
        } else {
          return false;
        }
      }));
  }

  changePassword (token: string, password: string, newPassword: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': token
      })
    };
    return this.http.put<any>(this.userUrl, {"password": password, "newPassword": newPassword}, httpOptions)
      .pipe(map(user => {
        // login successful if there's a jwt token in the response
        if (user && user.code == 201) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            return user;
        } else {
          return false;
        }
      }));
  }
}
