var Benchmark = require('../benchmark');
var filter    = require('../sets').filter;


Benchmark.perform(`"Largest prime factor" ran in `, () => {

  // 6857
  var expected = 6857;
  var result   = null;

  console.log(result == expected, result, expected);
});
