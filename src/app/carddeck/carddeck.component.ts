import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../movie';

@Component({
  selector: 'app-carddeck',
  templateUrl: './carddeck.component.html',
  styleUrls: ['./carddeck.component.css']
})
export class CarddeckComponent implements OnInit {

  private location='';
  private movies = [];

  constructor( private router: Router ) {
    this.location = router.url;
  }

  ngOnInit() {
  }

  allMovies(movies){
    this.movies = movies;
  }

}
