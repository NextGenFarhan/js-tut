// falsy value
// = false, 0, -0, bigInt(0n), "", null, undefined, NaN

// truthy values
// except all falsy values are truthy value
// eg: "0", 'false', " ", [], {}, function(){}


const userEmail = "h@gmail.com"
if(userEmail){
    // console.log("Got user email")
} else{
    console.log("Don't have user email")
}
const userEmail1 = [];
if(userEmail1.length === 0){
    // console.log("Array is empty")
}
const userEmail2 = {}
if(Object,keys(userEmail2).length===0) {
    console.log("Object is empty")
}