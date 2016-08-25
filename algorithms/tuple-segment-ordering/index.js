let input = [];
let size = input.length;
let position = 0;

input.push([1, 4]);
input.push([10, 15]);
input.push([3, 7]);
input.push([2, 3]);
input.push([9, 11]);

console.log('original: ', input);

// SORT
input.sort((a, b) => {
  if (a[0] < b[0]) {
    return -1;
  } else if (a[1] > b[0]) {
    return 1;
  } else {
    return 0;
  }
});

// COMBINE
while (position < (input.length - 1)) {

  if (input[position][1] >= input[position + 1][0]) {
    if (input[position][1] < input[position + 1][1]) {
      input[position][1] = input[position + 1][1];
    }

    input.splice(position + 1, 1);

  } else {
    position++;

  }
}

console.log('output: ', input);
