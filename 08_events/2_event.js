// SEARCH : events mdn

let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");

// EVENT OBJECT
// All event handlers have access to the event objects properties and methods
// Node.event = () => {}

btn1.onclick = (evt) => {
    console.log(evt);
    console.log("Your event type is: "+evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);
} 
btn2.ondblclick = () => {
    console.log("btn1 was clicked");
    let a = 10;
    a++;
    console.log(a);     // 11
}

let div = document.querySelector("div");
div.onmouseover = () => {
    console.log("You are inside div");   
}