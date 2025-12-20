// maps : key-value pair maintaining order of insertion and has unique values
const map = new Map()
map.set('IN', "india")
map.set('USA', "united states of america")
map.set('FR', "france")
// map.set('IN', "india")        // india fir nhi aayega
map.set('IN', "bharat")          // but change ho skti hai value



// console.log(map)

// forof
for (const key of map) {
    // console.log(key)
}
for (const [key, value] of map) {
    console.log(`${key} :- ${value}`)
}