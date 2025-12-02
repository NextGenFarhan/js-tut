// 2. constructor
    // singlton
// Object.create()

const { jsx } = require("react/jsx-runtime");


// 1. literal
let obj = {a: 1, b: 2,c: 3};
// 2 ways to call the object
// console.log(obj.c)
// console.log(obj["c"])           // better one

const mySym = Symbol("key1");           // symbol ko declare kiye

let info = {
    "full name": "Farhan Khan", 
    [sym1]: "abw2$%",                  // key me add kr diye    (imp)
    age: 19,
    knowledge: ["c", "java", "html", "CSS", "js", "React", "sprint-boot"]
}
console.log(info["full name"])  // . wale method se nhi kar sakte isko isiliye better one
console.log(info)