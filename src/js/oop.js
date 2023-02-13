

let str = "some";
let strObj = new String(str);

console.log(typeof (str));
console.log(typeof (strObj));

console.dir([1, 2, 3])


const soldier = {
  health: 400,
  armor: 200,
  sayHello: function () {
    console.log("hello");
  }
};
const john = Object.create(soldier);

// const john = {
//   health: 100,
// };

// proto старый метод
// john.__proto__ = soldier;

// Object.setPrototypeOf(john, soldier);

john.sayHello();