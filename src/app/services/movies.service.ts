import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  header = new HttpHeaders({
    "x-rapidapi-host" : "movies-api14.p.rapidapi.com",
    "x-rapidapi-key" : "033f789094msh481735d1ed57eb6p19ddf3jsn2d23a8b3b157"
  });

  url = "https://movies-api14.p.rapidapi.com/shows";

  constructor(private http : HttpClient) {}
    getshowlist(){
      return this.http.get(this.url, {headers : this.header})
  }
}
