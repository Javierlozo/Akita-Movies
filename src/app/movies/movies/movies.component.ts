import { Component, OnInit } from '@angular/core';
import { ID } from '@datorama/akita';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { Actor } from '../actors/state/actor.model';
import { ActorsQuery } from '../actors/state/actors.query';
import { Movie } from '../state/movie.model';
import { MoviesQuery } from '../state/movies.query';
import { MoviesService } from '../state/movies.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  pencil = faPencil;
  movies$: Observable<Movie[]> | any;
  actors$: Observable<Actor[]> | any;
  isLoading$: Observable<boolean> | any;
  private edits = new Set();

  constructor(private moviesQuery: MoviesQuery, private actorsQuery: ActorsQuery, private moviesService: MoviesService) { }

  ngOnInit() {
    this.isLoading$ = this.moviesQuery.selectLoading();
    this.movies$ = this.moviesQuery.selectMovies();
    this.actors$ = this.actorsQuery.selectAll();
    this.moviesService.getMovies();
  }

  edit(id: ID, name: string) {
    this.moviesService.updateActorName(id, name);
    this.edits.delete(id);
  }

  inEditMode(id: ID) {
    return this.edits.has(id);
  }
}
