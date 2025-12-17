// Immediately invoked function expresions (IIFE)
// ()()
// jahan bana wahi call hota hai.


(function myFunc() {
    console.log(`DB CONNECTED BY NORMAL FUNCTION`)
})();

(() => {
    console.log(`DB CONNECTED BY ARROW FUNCTION`)
})();