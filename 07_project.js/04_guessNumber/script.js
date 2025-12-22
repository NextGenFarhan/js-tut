let randomNum = parseInt((Math.random()*100 + 1));

const userInput = document.querySelector("#guessField")
const submit = document.querySelector('#subt')
const startOver = document.querySelector(".resultParas")
const remaining = document.querySelector(".lastResult")
const guessSlot = document.querySelector(".guesses")
const lowOrHigh = document.querySelector(".lowOrHi")

const p = document.createElement('p');
let prevGuess = [];
let newGuess = 0;

let playGame = true;


 console.log(parseInt(userInput.value));
if(playGame) {
    submit.addEventListener('click', function(e) {
        e.preventDefault()                  // isko server pr jaane se rokta hai
        const guess = parseInt(userInput.value);
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    if(isNaN(guess)) {
        alert(`Please enter a valid number.`);
    } else if(guess < 1) {
        alert(`Please enter a valid number`)
    } else if (guess > 100) {
        alert(`Please enter a number less than 100`)
    } else {
        prevGuess.push(guess)
        if(newGuess === 10 ) {
            displayGuess(guess)
            displayMessage(`Game Over. Random number was: ${randomNum}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if(guess === randomNum) {
        displayMessage("You guessed it right")
        endGame()
    } else if(guess < randomNum){
        displayMessage("Your number is low")
    } else {
        displayMessage("Your number is greater than the random number")
    }
}

function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    newGuess++;
    remaining.innerHTML = `${11-newGuess}`
}

function displayMessage(message) {
    lowOrHigh.style.border = "2px solid black";
    lowOrHigh.style.margin = "30px";
    lowOrHigh.style.borderRadius = "5px";
    lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}


function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`
    p.style.backgroundColor = "black"
    p.style.color = "white"
    startOver.appendChild(p)
    playGame = false;
    newGame()
}

function newGame() {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(e) {
        randomNum = parseInt((Math.random()*100 + 1));
        prevGuess = [];
        newGuess = '';
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${10-newGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    })
}