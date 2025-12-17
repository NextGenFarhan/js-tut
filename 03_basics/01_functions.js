function myName() {
    console.log("Farhan")
}
// myName();


function addTwoNums(num1, num2) {           // parameters
    // console.log(num1+num2);
    // return num1+num2;
}
// addTwoNums(4,6)                             // arguments
// addTwoNums(4,"6")


function sum(a, b, c=7) {
    console.log(a+b); 
    // return a+b+c;
    // sum(3, 5)
    // console.log("The sum of tese numbers is: "+ sum);
}
let result2 = sum(3, 5, 9)
// console.log("The sum of thsese numbers is: "+ result2);


function loginUserName(username) {
    return `${username} just logged in`;
}
// console.log(loginUserName("farhan"))
// console.log(loginUserName())