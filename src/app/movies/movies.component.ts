import { Component } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent {

  shows:any = [];
  searchText : any;

  constructor(private moviesservice: MoviesService, private router: Router){
    //Show First Page of Movies
    this.moviesservice.getshowlist().subscribe(res=>{
      this.shows = res;
      console.log(res);
     
    })
  }

  showdetails(data:any){
    console.log(data);
    localStorage.setItem("details", JSON.stringify(data));
    this.router.navigate(['movies/details']);
  }

}
