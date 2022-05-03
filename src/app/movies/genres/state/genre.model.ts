import { ID } from '@datorama/akita'

export interface Genre {
  id: ID;
  name: string;
}

/**
 * A factory function that creates Genres
 * @param params
 */
export function createGenre(params: Partial<Genre>) {
  return {
    ...params
  } as Genre;
}
