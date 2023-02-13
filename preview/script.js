const btns = document.querySelectorAll('button');

// btn.onclick = function () {
//   alert('2131232');
// }

let i = 0;
const deleteElement = (e) => {
  alert('2131232');
  i++;
  if (i = 1) {
    btn.removeEventListener('click', deleteElement);
  }
};


btns.forEach(btn => {
  btn.addEventListener('click', deleteElement);
});


const link = document.querySelector('a');

link.addEventListener('click', (event) => {
  event.preventDefault();
  console.log(event.target);
});