const userEmail = "h@gmail.com"

if (userEmail) {
    console.log("Got user email")
} else {
    console.log("Don't have user email")
}

// falsy value
// = false, 0, -0, bigInt(0n), "", null, undefined, NaN

// truthy values
// except all falsy values are truthy value
// eg: "0", 'false', " ", [], {}, function(){}