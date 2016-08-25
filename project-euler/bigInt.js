let add = (a, b) => {
  var output = [0];

  var arrayA = toIntArray(a);
  var arrayB = toIntArray(b);

  while (true) {
    var tempA = zeroPop(arrayA);
    var tempB = zeroPop(arrayB);
    var temp = toIntArray(output.shift() + tempA + tempB);

    output.unshift(zeroPop(temp));
    output.unshift(zeroPop(temp));

    if (arrayA.length == 0 && arrayB.length == 0) break;
  }

  if (output[0] == 0) {
    output.shift();
  }

  return output.join('');
};

let decrement = (a) => {
  return subtract(a, 1);
};

let increment = (a) => {
  return add(a, 1);
};

let multiply = (a, b) => {
  let additiveSet = []
  let output = 0;

  if (a > b) {
    base = a;
    iterator = b;
  } else {
    base = b;
    iterator = a;
  }

  while (iterator > 0) {
    additiveSet.push(base);
    iterator = decrement(iterator);
  }

  while (additiveSet.length > 0) {
    output = add(output, additiveSet.pop())
  }

  return output.toString();
};

let subtract = (a, b) => {
  let numberBase = 10;
  var output = [];
  var temp;

  var arrayA = toIntArray(a);
  var arrayB = toIntArray(b);

  while (true) {
    var tempA = zeroPop(arrayA);
    var tempB = zeroPop(arrayB);

    if (tempA < tempB) {
      var borrow = arrayA.pop();

      if (borrow) {
        arrayA.push(borrow - 1);
      } else {
        // negative case
      }

      output.unshift((tempA + numberBase) - tempB);
    } else {
      output.unshift(tempA - tempB);
    }
    if (arrayA.length == 0 && arrayB.length == 0) break;
  }

  if (output[0] == 0 && a != b) {
    output.shift();
  }

  return output.join('');
};

let toIntArray = (number) => {
  return number.toString().split('').map((value) => +value);
};

let zeroPop = (array) => {
  return array.pop() || 0;
};

module.exports = {
  add: add,
  multiply: multiply,
  subtract: subtract
}
