import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Actor } from './actor.model';

export interface ActorsState extends EntityState<Actor> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'actors' })
export class ActorsStore extends EntityStore<ActorsState> {

  constructor() {
    super();
  }

}
