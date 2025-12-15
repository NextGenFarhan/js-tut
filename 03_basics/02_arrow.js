// console.log(this)
// this : here it refers the default object and in browser it refers the window object
const user = {
    username: "Farhan",
    price: 999,
    welcomeMessage: function() {
        // this is keyword for current context
        console.log(`Hello! ${this.username} , welcome to website`)
    }
}
// user.welcomeMessage()
user.username = "Sam"
// user.welcomeMessage()


let user1 = function () {
    // let username = "Farhan Khan"
    // console.log(this);
}

// ARROW FUNCTION 
let user2 = () => {
    let username = "Farhan Khan"
    console.log(this);
}
// user2()
const addTwo = (num1, num2) => (num1+num2);
console.log(addTwo(2, 5))
const addTwoo = (num1, num2) => ({username: "Farhan"});