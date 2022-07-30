import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = "http://test-demo.aemenersol.com/api"
  constructor(private http:HttpClient) { }

  public getData(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/dashboard`);
}
}
