//module.exports['fib'] = (max) => {
//  var list = [];
//  var length = 0;
//  var temp1 = 0;
//  var term1 = 0;
//  var term2 = 1;
//
//  while (term1 + term2 < max) {
//    list.push(term1 + term2);
//
//    temp1 = term1;
//
//    term1 = term2;
//    term2 = temp1 + term2;
//
//    length++;
//  }
//
//  return list;
//};

module.exports['fibonacci'] = (term1, term2, max) => {
  var temp = 0;

  return module.exports['sequence'](term1, max, (value) => {
    temp  = term1 + term2;
    term1 = term2;
    term2 = temp;

    return term2;
  });
};

module.exports['filter'] = (array, callback) => {
  var list = [];

  for (var c = 0; c < array.length; c++) {
    if (callback(array[c])) {
      list.push(array[c]);
    }
  }

  return list;
};

module.exports['multiples'] = (number, max) => {
  var list = [];

  for (var c = 1; c < (max / number); c++) {
    var multiple = c * number;

    if (multiple < max) {
      list.push(multiple);
    } else {
      break;
    }
  }

  return list;
};

module.exports['sequence'] = (start, max, callback) => {
  var list = [start];
  var length = list.length;
  var current = start;

  while (current < max) {
    current = callback(current);
    list.push(current);

    length++;
  }

  return list;
};

module.exports['sum'] = (array) => {
  return array.reduce((previous, value, index) => {
    return previous + value;
  }, 0);
};

module.exports['union'] = (array1, array2) => {
  var list = [];
  var size1 = array1.length;
  var size2 = array2.length;
  var ref1 = 0;
  var ref2 = 0;

  while (ref1 < size1 && ref2 < size2) {

    if (array1[ref1] < array2[ref2]) {
      //console.log(`${array1[ref1]} < ${array2[ref2]}`);
      list.push(array1[ref1++]);

    } else if (array2[ref2] < array1[ref1]) {
      //console.log(`${array1[ref1]} > ${array2[ref2]}`);
      list.push(array2[ref2++]);

    } else {
      //console.log(`${array1[ref1]} == ${array2[ref2]}`);
      list.push(array2[ref2++]);
      ref1++;
    }
  }

  while (ref1 < size1) {
    list.push(array1[ref1++]);
  }

  while (ref2 < size2) {
    list.push(array2[ref2++]);
  }

  return list;
};
