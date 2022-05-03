import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Genre } from './genre.model';

export interface GenresState extends EntityState<Genre> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'genres' })
export class GenresStore extends EntityStore<GenresState> {

  constructor() {
    super();
  }

}
