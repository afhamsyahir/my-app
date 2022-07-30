import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';


import { User } from '../model/user';


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  API_URL: string = 'http://test-demo.aemenersol.com/api';
  // headers = new HttpHeaders().set('Content-Type', 'application.json');
  currentUser = {};
  token = {};

  constructor(private httpClient: HttpClient,public router: Router){}

  login(user: User) {
    return this.httpClient.post<any>(`${this.API_URL}/account/login`, user)
      .subscribe((res: any) => {   
        localStorage.setItem('access_token', res);    
          this.currentUser = res;
          this.router.navigate(['/dashboard']);
      })
  }

  getAccessToken() { 
    return localStorage.getItem('access_token');
  }

  isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return (authToken !== null) ? true : false;
  }

  logout() {
    this.router.navigate(['/login']);
    localStorage.removeItem('access_token');
     
  }

  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}