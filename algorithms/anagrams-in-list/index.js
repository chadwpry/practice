let fs = require('fs');

let inputs = fs.readFileSync('words-codekata.txt', 'UTF-8').split("\n");
let output = [];
let anagrams = {};

for (var c = 0; c < inputs.length; c++) {
  var index = inputs[c].split('').sort().join('');

  if (!anagrams[index]) {
    anagrams[index] = [];
  }

  anagrams[index].push(inputs[c]);
}

Object.keys(anagrams).forEach((key) => {
  if (anagrams[key].length > 1) {
    output.push(anagrams[key]);
  }
});

output.sort((a, b) => {
  if (a.length > b.length) {
    return 1;
  } else if (a.length < b.length) {
    return -1;
  } else {
    return 0;
  }
}).forEach((array) => {
  console.log(`${array.length} ${array.join(' ')}`);
});

