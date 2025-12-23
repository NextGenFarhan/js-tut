const randomColor = function() {
    const hex = "0123456789ABCDEF";
    let color = '#'
    for(let i=0; i<6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};
// console.log(randomColor())

let interValid;
const startChangingColor = () => {
    if(!interValid) {
        interValid = setInterval(changeBgColor, 1000)
    }
    function changeBgColor() {
        document.body.style.backgroundColor = randomColor();
    }
}

const stopChangingColor = () => {
    clearInterval(interValid);
    interValid = null;
}


const start = document.getElementById('start').addEventListener('click', startChangingColor)
const stop = document.getElementById('stop').addEventListener('click', stopChangingColor)