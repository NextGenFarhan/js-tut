// async: function ko promise bana deta hai
async function consumePromiseFive(){
    try {
        // await: promise ke result ka wait karta hai
        const response = await promise5;
        console.log(response)
    } catch(error) {
        console.log(error)
    }
}
// consumePromiseFive()

// FETCH API using .then() / .catch()
fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        return response.json();
    })
    .then((value) => {
        // console.log(value)
    })
    .catch((error) => {
        console.log(error)
    })

// FETCH API using async / await
async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        // console.log(response)
        const data = await response.json();
        console.log(data);
    } catch(error) {
        console.log(error);
    }   
}
// getAllUsers()