import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  url:string = 'https://api.themoviedb.org/3/movie/';
  key:string = '?api_key=36e1b7758ed76c8803c14820ab1e8f69';

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get('https://api.themoviedb.org/3/search/movie?api_key=36e1b7758ed76c8803c14820ab1e8f69&page=1&include_adult=true&query=a');
  }

  getByID(id:any){
    return this.http.get(this.url + id + this.key);
  }
}
