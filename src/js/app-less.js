var numberOfFilms = +prompt("Сколько фильмов вы уже просмотрели?", '');
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privar: false
};


for (let i = 0; i < 2; i++) {
  const a = prompt('Один из последних просмотренных фильмов?', ''),
    b = prompt('На сколько оцените его?', '');
  if (a != null && b != null && a != '' && b != '' && a.length < 50) {
    personalMovieDB.movies[a] = b;
  } else {
    i--;
  }

}
if (personalMovieDB.count < 10) {
  console.log("просмотрено мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
  console.log("вы классический зритель");
} else if (personalMovieDB.count > 10) {
  console.log("Вы киноман");
} else {
  console.log("Произошла ошибка");
}
console.log(personalMovieDB);



function showFirstMessage(text) {
  console.log(text);
  let num = 20;
}
showFirstMessage("hello world");
console.log(num);

function calc(a, b) {
  return (a + b);
}
console.log(calc(4, 3))


function ret() {
  let num = 50;
  return num;
}

const anotherrNum = ret();
console.log(anotherrNum);

//function declaration
function declaration() {
  //локальная переменная 
  let num = 50;
  //возврат return
  // return;
  //глобальный возврат 
  return num;
}
// создаем переменную с возвращенным глобальным значением
const returnNum = declaration();
console.log(returnNum);

//function expression  объявляется как переменная
const logger = function () {
  console.log("Hello");
};
logger()

// стрелочная функция 

const calc = (a, b) => { return a + b };



const uddCurr = 28;
const discount = 0.9;

function convert(amount, curr) {
  return curr * amount;
}


function promotion(result) {
  console.log(result * discount);
}

const res = convert(500, uddCurr)
promotion(res);


function test() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
    if (i === 3) return;
  }
  console.log("done");
}
test();


function doNothing() { };
console.log(doNothing() === undefined);


// Место для первой задачи
function sayHello(a) {
  return "Привет, " + a + "!";
}

// Место для второй задачи
function returnNeighboringNumbers(a) {
  let arrayValue = [];
  for (let i = 0; i < 3; i++) {
    let value = a - 1;
    arrayValue[i] = value;
    value++;
  }
  return arrayValue;
}
returnNeighboringNumbers(5);
const result = returnNeighboringNumbers(arrayValue);
console.log(arrayValue);

function returnNeighboringNumbers(num) {
  return [num - 1, num, num + 1];
}
returnNeighboringNumbers(5);

// Место для третьей задачи
function getMathResult(a, b) {

}

//lenght - получить длину (строки, массива)
//свойства пишутся через . // arr.lenght

// методы пишутся: метод()

let str = "test";

// изменить регистр. возвращает новое значение
console.log(str.toUpperCase());

//изменяет регистр в нижний
console.log(str.toLowerCase());



const fruit = "some fruit";
console.log(fruit.indexOf("fruit"))

const logg = "hello world!";

console.log(logg.slice(6, 11))


console.log(logg.substring(6, 11))

console.log(logg.substr(6, 5))


const num = 12.2;
// Округление
console.log(Math.round(num));

const test = "17.2px";
// console.log(parseInt(test));
console.log(parseFloat(test));


const numer = 12.2;
console.log(Math.round(numer));

const test = "15.2px";
console.log(parseInt(test));
console.log(parseFloat(test));
