import { Component, OnInit, EventEmitter } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';
import { Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchString : string;
  movies= [];
  @Output() allMovies = new EventEmitter();

  constructor(private movieService : MovieService) { }

  ngOnInit(){

  }

  displayData(searchString:string) {
      this.searchString = searchString;
      this.movieService.getMovies(this.searchString)
      .then(re=> this.movies = re.Search);
      this.allMovies.emit(this.movies);
  }

}
