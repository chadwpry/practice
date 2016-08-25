let list1 = [], list2 = [];
let c;

// define list1 (tens)
for (c = 0; c <= 100; c += 10) {
  list1.push(c);
};

// define list2 (odds)
for (c = 1; c <= 100; c += 2) {
  list2.push(c)
};


let mergedList = [];
let size1 = list1.length;
let size2 = list2.length;
let i1 = 0; i2 = 0;

while (i1 < size1 && i2 < size2) {
  let temp1 = list1[i1];
  let temp2 = list2[i2];

  if (temp1 > temp2) {
    mergedList.push(list2[i2++]);

  } else if (temp1 < temp2) {
    mergedList.push(list1[i1++]);

  } else {
    mergedList.push(list2[i2++]);
    i1++;
  }
};

while (i1 < size1) {
  mergedList.push(list1[i1++]);
}

while (i2 < size2) {
  mergedList.push(list2[i2++]);
}

console.log(mergedList);
