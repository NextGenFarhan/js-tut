// if
const temperature = 93;
if(temperature < 50) {
    // console.log("Less than 50")
}
else {
    // console.log("Temperature is greater than 50")
}

// if, else if
const score = 200
if(score>180) {
    const power = "powerFly"
    // console.log(`User power: ${power}`)
} else if (score) {
    const power = "fly"
    // console.log(`User power: ${power}`)
} else {
    // console.log("Error detected no power fly")
}


// Nullish Coalescing Operator (??): null undefined
let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
val1 = undefined ?? 10;
// console.log(val1)

// Terniary operator
// condition ? true : false 
const ice = 100
// ice >= 80 ? console.log("More than 80") : console.log("less than 80")