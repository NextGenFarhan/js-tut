function myName() {
    console.log("Farhan")
}
// myName();
function addTwoNums(num1, num2) {           // parameters
    console.log(num1+num2);
    // return num1+num2;
}
// addTwoNums(4,6)                             // arguments
// addTwoNums(4,"6")

// Note
const result = addTwoNums(3, 5)
// console.log(result);
// since function is not returning anything therefore undefined aayega


function loginUserName(username) {
    return `${username} just logged in`;
}
// console.log(loginUserName("farhan"))
// console.log(loginUserName())