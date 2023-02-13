'use strict';

const box = document.getElementById('box'),
  btns = document.getElementsByTagName('button'),
  cirles = document.getElementsByClassName('circle'),
  hearts = document.querySelectorAll('.heart'),
  oneHeart = document.querySelector('.heart'),
  wrapper = document.querySelector('.wrapper');


box.style.backgroundColor = "blue";
box.style.width = '520px';


box.style.cssText
btns[1].style.borderRadius = '100%';


// for (let i = 0; i < hearts.length; i++) {
//   hearts[i].style.backgroundColor = "blue";
// }

hearts.forEach(item => {
  item.style.backgroundColor = "blue";
});

const div = document.createElement('div');
// const text = document.createTextNode('Тут был я');


div.classList.add('black');

// добавляет элемент в конец
wrapper.append(div);

// добавляет в начало
// wrapper.prepend(div);

hearts[0].replaceWith(cirles[0]);

div.innerHTML = "Hello World";