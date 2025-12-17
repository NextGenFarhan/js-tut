let a = 10;
const b = 20;
var c = 30;
// console.log(a, b, c);

/*  {}  -> scope    */
if(true) {
    let a1 = 29; const b1 = 39; var c1 = 49;
}
// console.log("let: and const: ", a1, b1);         nahi hoga
// console.log("var: ",c1);                         hoga therefore var is gobally scoped

function one() {
    const username = "Farhan"
    function two() {
        const website = "Google"
        console.log(username)
    }
    // console.log(website)                // error because it is out of scope
    two()
}
one()

// var: globally scoped and can be redeclared 
// const and let: are block scoped and can not be redeclared within its scope



// ********************************* Extra ***********************************************
addone(5)
function addone(num) {
    return num+1
}
// addone(5)                // likh skta hu 


// addTwo(8)               // nahi likh skte out of scope
const addTwo = function(num) {
    return num+2
}
addTwo(8)