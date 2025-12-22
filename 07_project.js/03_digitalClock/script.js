// isse galat solution aara 
// const clock = document.getElementsByClassName('clock')
const clock = document.querySelector('.clock')

setInterval(function(){
    let date = new Date();
    // console.log(date.toLocaleTimeString())
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);