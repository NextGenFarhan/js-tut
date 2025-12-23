// Click Event using addEventListener (Best Practice)

const btn1 = document.getElementById('1');
btn1.addEventListener('click', function (e) {
    // alert('Are you sure?');
    // console.log(e);
    // console.log("Hey");
});


// Event Bubbling vs Capturing

const ul = document.getElementById('2');
// Bubbling phase (default → false)
ul.addEventListener('click', function (e) {
    // console.log("Clicked (Bubbling - false)");
}, false);
// Capturing phase (true)
ul.addEventListener('click', function (e) {
    // console.log("Clicked (Capturing - true)");
    // e.stopPropagation();                                     // Stops bubbling
    // e.stopImmediatePropagation();                            // Stops all further listeners
    // e.preventDefault();                                      // Prevents default behavior
}, true);



// Remove Image on Click (Event Delegation)
const imagesContainer = document.querySelector('#images');
imagesContainer.addEventListener('click', function (e) {
    // Check if clicked element is an image
    if (e.target.tagName === 'IMG') {
        e.target.parentNode.remove();
    }
}, false);



// Useful Event Properties (Reference)
    // e.type
    // e.timeStamp
    // e.target
    // e.currentTarget
    // e.clientX, e.clientY
    // e.screenX, e.screenY
    // e.altKey, e.ctrlKey, e.shiftKey
