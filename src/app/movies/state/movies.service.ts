import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { ActorsStore } from '../actors/state/actors.store';
import { GenresStore } from '../genres/state/genres.store';
import { MoviesDataService } from './movies-data.service';
import { MoviesStore } from './movies.store';

@Injectable({ providedIn: 'root' })
export class MoviesService {

  constructor(private moviesStore: MoviesStore, private actorsStore: ActorsStore, private genresStore: GenresStore, private moviesDataService: MoviesDataService) { }

  getMovies() {
    this.moviesDataService.getMovies().subscribe(response => {
      this.actorsStore.set(response.entities.actors);
      this.genresStore.set(response.entities.genres);
      const movies = {
        entities: response.entities.movies,
        ids: response.result
      };

      this.moviesStore.set(movies);
    });
  }

  updateActorName(id: ID, name: string) {
    this.actorsStore.update(id, { name });
  }

}
