import { Injectable } from '@angular/core';
import { IMovie } from './interfaces/Movie';

@Injectable({
  providedIn: 'root'
})
export class MovieRepositoryService {

  movies: IMovie[] = [
    { title: "Toy Story", releaseYear: 1995 },
    { title: "Forrest Gump", releaseYear: 1994 },
  ]
  constructor() { }

  getMovies(): IMovie[] {
    return this.movies
  }
}
