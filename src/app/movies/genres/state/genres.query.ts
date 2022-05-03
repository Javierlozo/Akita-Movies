import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { GenresStore, GenresState } from './genres.store';

@Injectable({ providedIn: 'root' })
export class GenresQuery extends QueryEntity<GenresState> {

  constructor(protected store: GenresStore) {
    super(store);
  }

}
