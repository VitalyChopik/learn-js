import { isWebp, headerFixed }from './modules'
/* Раскомментировать для использования */
// import { MousePRLX } from './libs/parallaxMouse'

/* Раскомментировать для использования */
// import Swiper, { Navigation, Pagination } from 'swiper'

// Проверка браузера на поддерку .webp изображений ====================================================================================================================================================
isWebp()
// ====================================================================================================================================================

// Паралакс мышей ====================================================================================================================================================
// const mousePrlx = new MousePRLX({})
// ====================================================================================================================================================

// Фиксированный header ====================================================================================================================================================
// headerFixed()
// ====================================================================================================================================================

if (4==5) {
    console.log('OK');
} else {
    console.log('no ok')
}


// if (num<49) {
//     console.log('error');
// } else if (num>100){
//     console.log('more');
// } else {
//     console.log('OK');
// }

// (num == 50) ? console.log('OK') : console.log('Error');

const num =50;
switch (num) {
    case 49: 
        console.log('neverno');
        break;
    case 100: 
        console.log('neverno');
        break;
    case 50: 
        console.log('verno');
        break;
    default: 
        console.log('po umolchaniy');
        break;
}

const hamburger = true;
const fries = true;
if(hamburger && fries) {
    console.log('сыт');
} 

function firstTask() {
    // Пишем решение вот тут
    for(var i = 5; i<=10; i++){
        console.log(i);
    }
}

function secondTask() {
    // Пишем решение вот тут
    for(var i=20; i>=10; i--){
        console.log(i);
        if(i <= 14) {
            break;
        }
    }
    
}
function thirdTask() {
    // Пишем решение вот тут
    for(var i = 1; i<=10; i++){
        if (i%2>0){
            continue;
        }
        console.log(i);

    }
    
    
}

for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}
let i=2;
while(i<16){
    i++;
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}


function fifthTask() {
    const arrayOfNumbers = [];

    for(let i=5; i<=10; i++) {
        arrayOfNumbers[i-5]=i;
    }
    console.log(arrayOfNumbers);
    // Не трогаем
    return arrayOfNumbers;

}

function firstTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];

    // Пишем решение вот тут
    for(var i=0; i<arr.length; i++){
        result[i] = arr[i];
    }
    console.log(result);
    
    // Не трогаем
    return result;
}

function secondTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];

    // Пишем решение вот тут
    for(var i=0; i<data.length; i++){
        if(typeof data[i] == "string") {
            data[i] = data[i] + " - done";
        } else {
            data[i] = data[i] * 2;
        }
    }
    console.log (data);
    
    // Не трогаем
    return data;
}
// Место для третьей задачи
function thirdTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];

    // Пишем решение вот тут
    for(var i=0; i<data.length; i++){
        for(var a=data.length; a<0; a--) {
            
        }
    }
    
    // Не трогаем
    return result;
}