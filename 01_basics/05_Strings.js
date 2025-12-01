console.log("This is String tutorial in javascript.")
console.log("Do you know? It is immutable (cannot be changed) and is object")

let myName = "Farhan"                                                     // double quote
let friend = 'Sufiyan'                                                    // single quote
console.log(`His name is ${myName} and his friends name is ${friend}`)    // template literal (backtick)
// string interpolation
console.log("His name is "+myName+" and his friend's name is "+friend)

// ESCAPE SEQUENCE LITERALS ( \ )
console.log("Hii \nIts Farhan")
console.log("Hii\t Its Farhan")        // \n&\t are considered as 1 character.

let a = 'sulaiman';
// letters dekhna hai
console.log(a[0])
console.log(a[2])
console.log(a[5])
// length dekhna hai
console.log(a.length)

// STRING METHODS (buildin function)
let b = "Dawood"
console.log(typeof b);                               // type batayega variable ka
console.log(b.toUpperCase())                         // all capital
console.log(b.slice(1,4))                            // including index 1 and excluding index 4
console.log(b.replace("Daw","7"))                    // 7ood
console.log(b.concat(a, " Shaikh"))                  // add karega
console.log(b.trim())                                // whitespace ko remove karega
console.log(b.charAt(0))
console.log(b.indexOf("oo"))