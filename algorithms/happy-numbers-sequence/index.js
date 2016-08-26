let unhappyString = [ 4, 16, 37, 58, 89, 145, 42, 20, 4 ].join('');
let output        = [];
let number        = 1;

let happy = (number, sequence = []) => {
  let stringArray = number.toString().split('');
  let sum         = 0;

  sequence.push(number);

  for (var c = 0; c < stringArray.length; c++) {
    sum += stringArray[c] * stringArray[c];
  }

  if (sum == 1) {
    return true;
  } else if (sequence.slice(sequence.length - 9, sequence.length).join('') == unhappyString) {
    return false;
  } else {
    return happy(sum, sequence);
  }
};

while (output.length <= 8) {
  if (happy(number, [number])) {
    output.push(number);
  }

  number++;
};

console.log(`${output} (${output.join('') == [ 1, 7, 10, 13, 19, 23, 28, 31, 32 ].join('')})`);
