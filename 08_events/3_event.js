// Add event listeners

let btn1 = document.querySelector('#btn1');

btn1.addEventListener("click", (evt) => {
    console.log("button was clicked");
    console.log(evt);
    console.log(evt.type);
})
btn1.addEventListener("click", () => {
    console.log("button was clicked - handler1");
})
btn1.addEventListener("click", () => {
    console.log("button was clicked - handler2");
})
btn1.addEventListener("click", () => {
    console.log("button was clicked - handler3");
})

const handler4 = () => {
    console.log("button was clicked - handler4");
};
btn1.addEventListener("click", handler4);


// Remove event listeners
btn1.removeEventListener("click", handler4);