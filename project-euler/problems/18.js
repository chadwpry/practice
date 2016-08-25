var Benchmark = require('../benchmark');
var fs        = require('fs');

var filename  = 'artifacts/18_triangle.txt';

Benchmark.perform(`"Maximum path sum I" ran in `, () => {

  fs.readFile(filename, (error, data) => {
    if (error) throw error;

    var rows = data.toString().split("\n").map((row) => {
      return row.split(' ').map((number) => {
        return +number;
      })
    });

    for (var rowIndex = rows.length - 1; rowIndex > 0; rowIndex--) {
      for (var numberIndex = 0; numberIndex < rows[rowIndex].length - 1; numberIndex++) {
        var left  = rows[rowIndex][numberIndex];
        var right = rows[rowIndex][numberIndex + 1];

        if (left > right) {
          rows[rowIndex - 1][numberIndex] += left;
        } else {
          rows[rowIndex - 1][numberIndex] += right;
        }
      }
    }

    // 1074
    var expected = 1074;
    var result   = rows[0][0];

    console.log(result == expected, result, expected);
  });
});
