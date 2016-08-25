var Benchmark = require('../benchmark');
var BigInt    = require('../bigInt');


var factorial = (number) => {
  if (number == 1) {
    return number;
  } else {
    return number * factorial(number - 1);
  }
};

console.log(factorial(100));

process.exit(0);

var toInteger = (input) => {
  var numberAsString = input.toString();

  var temp = numberAsString.slice(0, numberAsString.indexOf('e+'));
  var number = +(temp);

  return number * Number('1' + '0'.repeat(temp.length - 2));
};

Benchmark.perform(`"Factorial digit sum" ran in `, () => {

  var numberString = toInteger(factorial(100)).toString();
  var total = 0;

  for (var c = 0; c < numberString.length; c++) {
    total += +(numberString[c]);
  }

  // 1074
  var expected = null;
  var result   = total;

  console.log(result == expected, result, expected);
});
