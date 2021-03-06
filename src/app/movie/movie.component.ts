import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movie: any;
 // movies: any;
  public movieTitle='';
  mov = new Movie("","","","","");
  omdbMovie;
  constructor(private router: ActivatedRoute, private movieService: MovieService) { }
  ngOnInit() {
    this.router.params.subscribe((params) => {
      const id = params['movieID'];
      this.movieService.getMovie(id).subscribe(data => {
        this.movie = data;
        // console.log(data);
      });
    });
  }
  addMovie(movie) {
      this.mov.movieTitle=movie.title;
      this.mov.movieId=movie.id;
      this.mov.movieRating=movie.vote_average;
      this.mov.releaseYear=movie.release_date;
      this.mov.moviePoster=movie.poster_path;
      this.movieService.addMovie(this.mov).subscribe(res => console.log('Done'));
  }
 

}

