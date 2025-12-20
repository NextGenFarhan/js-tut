const str = "Hello guys"
for (const string of str) {
    console.log(string)             // return karega value
}


// for array
const arr = [1, 2, 3, 4, 5, 6];
for (const num of arr) {
    // console.log(num)            // ek ek krke numbers print honge
}
const myArr = ["js", "rb", "py", "java", "cpp"]
for (const key of myArr) {
    // console.log(key)
}


// for object
const myObj = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}
// OBJECT IS NOT ITERATABLE ***
// for (const [key, value] of myObj) {
    // console.log(`${key} :- ${myObj[key]}`)
// }