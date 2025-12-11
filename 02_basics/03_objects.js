// 1. literal     Jab tum {} laga kar seedha object bana do
let obj = {a: 1, b: 2,c: 3};
// TWO WAYS TO CALL THE OBJECT
// console.log(obj.c)
// console.log(obj["c"])                                // better one


const mySym = Symbol("key1");                           // symbol ko declare kiye
let info = {
    "full name": "Farhan Khan", 
    [mySym]: "abw2$%",                                  // key me add kr diye    (imp) ***
    age: 19,
    isFalse: true,
    knowledge: ["c", "java", "html", "CSS", "js", "React", "sprint-boot"]
}
// Accessing VALUES and KEYS.
// console.log(info["full name"])                          // . wale method se nhi kar sakte isko isiliye better one
// console.log(info)
// CHANGING VALUES
// Object.freeze(info)                                     // value change nhi hogi 
info.knowledge = ["c", "java", "html", "CSS", "js", "React", "sprint-boot", "ai", "devOps"]
// console.log(info)




// SINGLETON ?
// Pure program me sirf ONE object create hota hai  
// Chahe jitni baar call karo → same instance milta hai  
// Example: Ek hi TV remote, sab usko use karte hain  