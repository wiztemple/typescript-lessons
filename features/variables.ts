let apples: number = 7;
let speed: string = 'fast';
let hasName: boolean = true;
let nothing: null = null;
let undefine: undefined = undefined;

// built-in object
let date: Date = new Date();

// Arrays
let colors: string[] = ['red', 'white', 'blue', 'Grey'];
let myNumbers: number[] = [1, 2, 34, 5, 67, 8, 3, 4];
let booleans: boolean[] = [true, false, false, true];


// classes
class Car {}
let car: Car = new Car();

// object literal
let point: { x: number; y: number } = {
  x: 1,
  y: 21
}

// functions
const logNumber: (i: number) => void = (i: number) => {
  console.log(i)
}

// when to use annotations
// 1. Functions that return the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates); // { x: 10, y: 20};

// 2. When we declare a variable on one line and initialize it later
let words = ["Chinyere", "Edwin", "Brendan", "Felicia", "Precious"];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'Brendan') {
    foundWord = true;
  }
}

// variable whose type cannot be inferred correctly
let numbers = [-10, -1, 20];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i]
  }
}
