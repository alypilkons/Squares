const answerKey = [
// PRIMARY - red, blue, & yellow only
  {
    tiles: [1, 3],
    response: 2
  },
  {
    tiles: [1, 5],
    response: 6
  },
  {
    tiles: [3, 5],
    response: 4
  },

  // SECONDARY - purple, orange, & green only
  {
    tiles: [2, 4],
    response: 3
  },
  {
    tiles: [4, 6],
    response: 5
  },
  {
    tiles: [2, 6],
    response: 1
  },

  // COMBINATION - one primary color and one secondary color
  {
    tiles: [1, 2],
    response: 3
  },
  {
    tiles: [2, 3],
    response: 1
  },
  {
    tiles: [3, 4],
    response: 5
  },
  {
    tiles: [4, 5],
    response: 3
  },
  {
    tiles: [5, 6],
    response: 1
  },
  {
    tiles: [1, 6],
    response: 5
  },

  // two colors opposite each other on the color wheel (ex. red and green)
  {
    tiles: [1, 4],
    response: null
  },
  {
    tiles: [2, 5],
    response: null
  },
  {
    tiles: [3, 6],
    response: null
  }
];

export default answerKey;
