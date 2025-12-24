// this OBJECT represents the eventual completion or failure of an asyncronous operation and its resulting value. 
// it has three states: pending, fullfilled and rejected.

//  PROMISE 1 (Basic Promise)
const promise1 = new Promise(function(resolve, reject) {
    // Do an async call
        // like DB calls, cryptography, network call
    setTimeout(function() {
        // console.log("async task is completed")
        resolve()
    }, 1000)
})
// Jab promise complete (resolve) ho jaaye, tab .then() chalti hai.
promise1.then(function() {
    // console.log("Promised consumed");  
})

// PROMISE 2 (Direct Promise without variable)
new Promise(function(resolve, reject) {
    setTimeout(function() {
        // console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function() {
    // console.log("Promised consumed 2")
})

// Promise 3 (Returning Object)
const promise3 = new Promise(function(resolve, reject){
    setTimeout(function() {
        resolve({username: "Farhan", email: "farhan@gmail.com"})
    }, 1000)
})
promise3.then(function(user) {
    // console.log(user)
})

// PROMISE 4 (Chaining + catch + finally)
const promise4 = new Promise(function(resolve, reject) {
    setTimeout(function(){
        let error = false;
        if(!error) {
            resolve({username:"farhan", password:"ajhvasb"})
        } else {
            reject('ERROR: something went wrong')
        }
    }, 1000)
})
promise4.then((user) => { 
        // console.log(user); 
        return user.username; 
    }).then((username) => {
        // console.log(username);
        
    }).catch((error) => {
        // console.log(error)
    }).finally(()=> {
        // console.log("It works when both promise either rejected or resolved. ")
    })

// PROMISE 5 (async / await with try-catch)
const promise5 = new Promise(function(resolve, reject) {
    setTimeout(function(){
        let error = false;
        if(!error) {
            resolve({username:"js", password:"dsmdns"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});