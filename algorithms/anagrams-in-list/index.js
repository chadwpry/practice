let fs = require('fs');

let inputs = fs.readFileSync('words-long.txt', 'UTF-8').split("\n");
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
    output.push(anagrams[key].join(' '));
  }
});

output.forEach((anagramString) => {
  console.log(anagramString);
});

