import { Component } from '@angular/core';
import { IMovie } from '../interfaces/Movie';
import { MovieRepositoryService } from '../movie-repository.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {

  allMovies: IMovie[] = [];

  constructor(public movieRepo: MovieRepositoryService) { }

  ngOnI(): void {
    this.allMovies = this.movieRepo.getMovies();
  }
}
