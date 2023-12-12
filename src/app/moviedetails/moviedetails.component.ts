import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.scss']
})
export class MoviedetailsComponent {

  details: any;
  moviedetails :any;

  constructor(){
    this.details = localStorage.getItem('details');
    this.moviedetails =JSON.parse(this.details);
    
  }

  ngOnInit(){

  }
    
}
