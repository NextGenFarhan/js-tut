// function calcCartPrice(num1) {
//     return num1;
// }
function calcCartPrice(val1, val2, ...num1) {
    return num1;
}
// console.log(calcCartPrice(200, 400, 500))
// console.log(typeof calcCartPrice())

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}
const user = {
    username: "Farhan",
    price: 998780283748
}
// handleObject(user)

// function accepting array and returning its second object
const myNewArray = [300, 400, 500, 600]
function returnSecVal(getArray) {
    return `second value is ${getArray[1]}`;
}
console.log(returnSecVal(myNewArray))
console.log(returnSecVal([200, 300, 400, 500]))