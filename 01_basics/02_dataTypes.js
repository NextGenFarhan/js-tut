// 1] string 
let color = "Yellow";
let lastName = 'Johnson';
let greeting = `Hello, ${color}`; // Backticks allow string interpolation

const goodQuotes1 = 'She said "I think so!" ';
const goodQuotes2 = `She said "I'm not going in there!"`;
console.log(goodQuotes1 + goodQuotes2);
const bigmouth = 'I\'ve got no right to take my place…';
console.log(bigmouth);
console.log(typeof goodQuotes1, typeof goodQuotes2, typeof bigmouth)     // to check the type of datatype entered


// 2] NUMBER 
let length = 16;
let weight = 7.5;

// 3] BIG INT 
let a = 1234567890123456789012345n;
let b = BigInt(1234567890123456789012345n);

// 4] Boolean
let c = true;
let d = false;

// 5] NULL
let g = null;

// 6] UNDEFINED
let e;
let f;

// 7. SYMBOL 
const i = Symbol();
const j = Symbol();

// 8] OBJECT (very important in js)
const person = {firstName:"John", lastName:"Doe"};
// Array object
const cars = ["Saab", "Volvo", "BMW"];
// Date object
const date = new Date("2022-03-25");