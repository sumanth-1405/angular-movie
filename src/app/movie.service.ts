import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {


  constructor() { }

  getMovies(searchMovies: string) {
    var uri = 'http://www.omdbapi.com/?s='+searchMovies+'&apikey=688068c3';

    return fetch(uri)
      .then(response=>response.json());
  }

}
