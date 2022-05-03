import { ID } from '@datorama/akita'

export interface Actor {
  id: ID;
  name: string;
}

/**
 * A factory function that creates Actors
 * @param params
 */
export function createActor(params: Partial<Actor>) {
  return {
    ...params
  } as Actor;
}
