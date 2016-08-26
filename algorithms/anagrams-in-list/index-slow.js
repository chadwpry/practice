let fs = require('fs');

let inputs = fs.readFileSync('words-long.txt', 'UTF-8').split("\n");
let limit = inputs.length;
let i1 = 0;
let i2 = 0;
let output = [];

var anagram = (input1, input2) => {
  return (input1.split('').sort().join('') == input2.split('').sort().join(''));
};

while (i1 < limit) {
  let anagrams = [];
  i2 = i1 + 1;

  while (i2 < limit) {
    if (anagram(inputs[i1], inputs[i2])) {
      anagrams.push(inputs.splice(i2, 1)[0]);
      limit--;
    }

    i2++;
  };

  if (anagrams.length > 0) {
    anagrams.unshift(inputs[i1]);
    output.push(anagrams);
  }

  console.log(anagrams);

  i1++;
};

console.log(output);

