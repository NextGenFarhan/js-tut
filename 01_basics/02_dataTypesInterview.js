// Data types are divied into two types 
    // primitives: String, Number, Boolean, null, undefined, Symbol, BigInt  [7 types]
    // non-primitive or reference types: Object, array, fuctions

const score = 100;              // number
const scoreValue = 100.5;       // number
const isLoggedIn = false;       // boolean
const outsideTemp = null;       // null
let userEmail;                  // undefined
const id = Symbol('123')        // symbol
const anotherId = Symbol("123") // symbol
// console.log(id === anotherId)   // false 
const bigNum = 17237926923n;    // bigint

const carsArr = ["Mahindra", "Toyota", "BMW", "audi", "tesla"]     // array
const bioObj = {                                                   // object
    Name : "Farhan",
    About : "A software developer having core knowledge in his field and also has good knowlege in devOps and artificial intelligence and had explored web development deeply! ",
    age : 20,
    education : "Is persuing B.E. in saboo siddik"
}
const func = function() {
    console.log("Hello Function")
}
// func()