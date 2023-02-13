"use strict";


const arr = [1, 2, 3, 6, 8];
//arr.pop(); //удаляет в последний элемент
// arr.push(10); // добавляет последний элемент
// arr[99] = 0;
// console.log(arr.length);



arr.forEach(function (item, i, arr) {
  console.log(`${i}: ${item} внутри массива ${arr}`);
});

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

for (let value of arr) {
  console.log(value);
}


let a = 5,
  b = a;

b = b + 5;
console.log(b);
console.log(a);

const obj = {
  a: 5,
  b: 1,
}

const copy = obj;

// copy.a = 10;
// console.log(copy);
// console.log(obj);

function copy(mainObj) {
  let objCopy = {};
  let key;
  for (key in mainObj) {
    objCopy[key] = mainObj[key];
  }
  return objCopy;
}

const numbers = {
  a: 2,
  b: 5,
  c: {
    x: 7,
    y: 4,
  }
}

const newNumbers = copy(numbers);
newNumbers.a = 10;
console.log(newNumbers);
console.log(numbers);