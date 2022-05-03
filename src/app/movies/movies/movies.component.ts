import { Component, OnInit } from '@angular/core';
import { ID } from '@datorama/akita';
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

  toggleView(id: ID, actorName: HTMLInputElement) {
    if (this.edits.has(id)) {
      this.edits.delete(id);
    } else {
      this.edits.add(id);
      actorName.focus();
    }
  }

  inEditMode(id: ID) {
    return this.edits.has(id);
  }
}
