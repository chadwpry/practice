var Benchmark = require('../benchmark');
var fibonacci = require('../sets').fibonacci;
var filter    = require('../sets').filter;
var sum       = require('../sets').sum;


Benchmark.perform(`"Even Fibonacci numbers" ran in `, () => {
  var sequence = fibonacci(0, 1, 4000000);

  var evenSequence = filter(sequence, (value) => {
    return (value % 2) == 0;
  });

  // 4613732
  var expected = 4613732;
  var result   = sum(evenSequence);

  console.log(result == expected, result, expected);
});
