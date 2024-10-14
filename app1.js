// Map

const numbers = [20, 21, 22, 23, 24, 25, 26, 27];
const words = ["asap", "byob", "rsvp", "diy"];

const doubles = numbers.map(function (num) {
  return num * 2;
});

// const doubles2 = [];
// for (let num of numbers) {
//     doubles2.push(num * 2)
// }

const numDetail = numbers.map(function (n) {
  return {
    value: n,
    isEven: n % 2 === 0,
  };
});

const abbrevs = words.map(function (word) {
  return word.toUpperCase().split(" ").join(".");
});

//Arrow Functions

//How it would normally be written
// const square = function (x) {
//     return x * x;
// }

//Same as above but written as an arrow function
// const square = (x) => {
//     return x * x;
// }

const isEven = (num) => {
  return num % 2 === 0;
};

const multiply = (x, y) => {
  return x * y;
};

const greet = () => {
  console.log("HI!");
};

//Implicit return

// const square = n => {
//     return n * n;
// }

// const square = n => (
//      n * n
// )

//one-line implicit return
// const square = n => n * n;

const nums = [1, 2, 3, 4, 5, 6, 7, 8];

const doubles1 = nums.map(function (n) {
  return n * 2;
});

const doubles2 = nums.map((n) => {
  return n * 2;
});

const doubles3 = nums.map((n) => n * 2);

// const parityList = nums.map (function (n) {
//     if (n % 2 === 0) return 'even';
//     return 'odd';
// })

// const parityList = nums.map ((n) => {
//     if (n % 2 === 0) return 'even';
//     return 'odd';
// });

const parityList = nums.map((n) => {
    n % 2 === 0 ? "even" : "odd";
});
