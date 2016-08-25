var Benchmark = require('../benchmark');
var multiples = require('../sets').multiples;
var sum       = require('../sets').sum;
var union     = require('../sets').union;

Benchmark.perform(`"Multiples of 3 and 5" ran in `, () => {
  var threes = multiples(3, 1000);
  var fives  = multiples(5, 1000);

  // 233168
  var expected = 233168;
  var result   = sum(union(threes, fives));

  console.log(result == expected, result, expected);
});
