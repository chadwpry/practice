var Benchmark = require('../benchmark');


var Grid = (size) => {
  var grid = new Array(size + 1);
  var c;

  for (c = 0; c <= size; c++) {
    grid[c] = new Array(size);
  }

  for (c = 0; c < size; c++) {
    grid[c][size] = 1;
    grid[size][c] = 1;
  }

  return grid;
};

Benchmark.perform(`"Lattice paths" ran in `, () => {

  var size = 20;
  var grid = Grid(size);

  for (var c = size - 1; c >= 0; c--) {
    for (var c2 = size - 1; c2 >= 0; c2--) {
      grid[c][c2] = grid[c + 1][c2] + grid[c][c2 + 1];
    }
  }

  // 137846528820
  var expected = 137846528820;
  var result   = grid[0][0];

  console.log(result == expected, result, expected);
});
