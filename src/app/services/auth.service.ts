import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

const AUTH_API = 'https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=36e1b7758ed76c8803c14820ab1e8f69'

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token:any;

  getRequestToken(){
    return this.http.get('https://api.themoviedb.org/3/authentication/token/new?api_key=36e1b7758ed76c8803c14820ab1e8f69');
  }

  constructor(private http:HttpClient) { }

  login(username: string, password: string, request_token: string): Observable<any> {
    console.log(request_token + ' LLEGA');
    return this.http.post(AUTH_API, {
      username,
      password,
      request_token
    }, httpOptions);
  }

}
