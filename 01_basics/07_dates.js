let myDate = new Date();      // date object
// console.log(myDate)
// console.log(myDate.getDate())        // bus date milega
// console.log(myDate.getFullYear())    // bus year aur bohot se functions hai
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toLocaleDateString())
// console.log(typeof myDate)    // object

// let myCreatedDate = new Date(2024, 2, 20)    // month 0 se start hota hai
// console.log(myCreatedDate.toDateString())
// console.log(myCreatedDate.toLocaleString());

let birthDate = new Date("03-06-2006")          // do digit me likhunga toh 1 se start hoga month 
// console.log(birthDate.toLocaleString());
let timeStamp = Date.now();
// console.log(timeStamp);
// console.log(birthDate.getTime());
console.log(Math.floor(Date.now()/1000))