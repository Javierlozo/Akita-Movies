import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { ActorsStore, ActorsState } from './actors.store';

@Injectable({ providedIn: 'root' })
export class ActorsQuery extends QueryEntity<ActorsState> {

  constructor(protected store: ActorsStore) {
    super(store);
  }

}
