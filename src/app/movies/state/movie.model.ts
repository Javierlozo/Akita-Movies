import { ID } from '@datorama/akita';
import { Genre } from '../genres/state/genre.model';
import { Actor } from '../actors/state/actor.model';

export interface Movie {
  id: ID;
  title: string;
  genres: (ID | Genre)[];
  actors: (ID | Actor)[];
}

export function createMovie(params: Partial<Movie>) {
  return {
    ...params
  } as Movie;
}
