

// to string
// 1)

console.log(typeof (String(null)));

// 2) конкатинация  сложение со стррокой получается строка

console.log(typeof ((5 + '')));


// пример
const num = 5;
console.log("https://vk.com/catalog/" + num);



const fontSize = 26 + 'px';


//to number 


console.log(typeof (Number('4')));

// 2)  унарный плюс  + перед значением

console.log(typeof (+'5'));

//3)

console.log(typeof (parseInt("15px", 10)));


let answ = +prompt("hello", "");


// to boolen

// 0, '', null, undefined, NaN;

// 1)
let swither = null;
if (swither) {
  console.log('working.....')
}

swither = 1;

if (swither) {
  console.log('working.....')
}

// 2) 

console.log(typeof (Boolean('4')));

// 3)

console.log(typeof (!!"2312"));