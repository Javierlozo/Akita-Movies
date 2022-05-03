export const movies = {
  entities: {
    genres: {
      '1': {
        id: 1,
        name: 'Fantasy'
      },
      '2': {
        id: 2,
        name: 'Comedy'
      },
      '3': {
        id: 3,
        name: 'Film-Noir'
      },
      '4': {
        id: 4,
        name: 'Drama'
      },
      '5': {
        id: 5,
        name: 'Mystery'
      },
      '6': {
        id: 6,
        name: 'Thriller'
      }
    },
    actors: {
      '1': {
        id: 1,
        name: 'James Stewart'
      },
      '2': {
        id: 2,
        name: 'Grace Kelly'
      },
      '3': {
        id: 3,
        name: 'Wendell Corey'
      },
      '4': {
        id: 4,
        name: 'John McGiver'
      },
      '5': {
        id: 5,
        name: 'Marian Hailey'
      },
      '6': {
        id: 6,
        name: 'Orson Welles'
      },
      '7': {
        id: 7,
        name: 'Joseph Cotten'
      },
      '8': {
        id: 8,
        name: 'Alida Valli'
      }
    },
    movies: {
      '1': {
        id: 1,
        title: 'Rear Window',
        genres: [5, 6],
        actors: [1, 2, 3]
      },
      '2': {
        id: 2,
        title: 'Harvey',
        genres: [1, 2],
        actors: [1, 4, 5]
      },
      '3': {
        id: 3,
        title: 'The Third Man',
        genres: [3, 5, 6],
        actors: [6, 7, 8]
      }
    }
  },
  result: [1, 2, 3]
};
