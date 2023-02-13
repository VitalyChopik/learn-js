"use strict";


// const arr = [1, 2, 3, 6, 8];
// //arr.pop(); //удаляет в последний элемент
// // arr.push(10); // добавляет последний элемент
// // arr[99] = 0;
// // console.log(arr.length);



// arr.forEach(function (item, i, arr) {
//   console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for (let value of arr) {
//   console.log(value);
// }


// let a = 5,
//   b = a;

// b = b + 5;
// console.log(b);
// console.log(a);

// const obj = {
//   a: 5,
//   b: 1,
// }

// const copy = obj;

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


const add = {
  d: 17,
  e: 20
}

const clone = Object.assign({}, add);
clone.d = 20;
// console.log(add);
// console.log(clone);

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();
newArray[1] = 'asfdsfds';
console.log(newArray);
console.log(oldArray);

const video = ['youtube', 'vimeo', 'rutube'],
  blogs = ['wordpress', 'livejornal', 'blogger'],
  internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);


function log(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}
const num = [2, 4, 5];

log(...num);


const array = ['a', 'b'];

const newAarray = [...array];

const q = {
  one: 1,
  two: 2
};

const newObj = { ...q };



const personalPlanPeter = {
  name: "Peter",
  age: "29",
  skills: {
    languages: ['ru', 'eng'],
    programmingLangs: {
      js: '20%',
      php: '10%'
    },
    exp: '1 month'
  }
};


function showExperience(plan) {
  const { exp } = plan.skills;
  return exp;

}

showExperience(personalPlanPeter)
function showProgrammingLangs(plan) {
  let str = '';
  const { programmingLangs } = plan.skills;
  for (let key in programmingLangs) {
    str += `Язык ${key} изучен на ${programmingLangs[key]}\n`
  }
  return str;
}
