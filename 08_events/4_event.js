// create a toggle button to darkmode when clicked
// light when clicked again

let modeBtn = document.querySelector("#mode");

let currMode = "light";

modeBtn.addEventListener("click", () => {
    // console.log("You are trying to change the mode");
    if(currMode === "light") {
        currMode = 'dark';
        document.querySelector("body").style.backgroundColor = "black";
    } else {
        currMode = 'light';
        document.querySelector("body").style.backgroundColor = "white";
    }

    console.log(currMode);
})