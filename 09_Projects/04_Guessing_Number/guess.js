const randomNumber = parseInt(Math.random()*100+1)
const submit = document.queryselector('#subt')
const userInput = document.queryselector('#guessField')
const remaining = document.querySelector('.lastResult')
const guessSlot = document.querySelector('.guess')
const loworhi = document.querySelector('.lowOrHi')
const starOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let preGues = []
let numGuess = 1

let playGame= true

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number')
    }else if (guess<1){
        alert ('please enter more than one')
    }else if(guess>100){
        alert('Please enter less than 100')
    }else{
        prevGuess.push(guess)
        if (numGuess === 11) {
            displayGuess(guess)
            displaymassage(`Game over . Random number was ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}
function checkGuess(guess){
    if(guess === randomNumber){
        displaymassage(`You guessed it Right`)
        endGame()
    }else if(guess<randomNumber){
        displaymassage(`Number is Too low`)
    }else if(guess>randomNumber){
        displaymassage(`num is too high`)
    }
}
function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML += `${guess}`
    numGuess++;
    remaining.innerHTML = `${11-numGuess}`
}
function displaymassage(message){
    loworhi.innerHTML = `<h2>${message}</h2>`
}
function newGame(){
userInput.value = ''
userInput.setAttribute('disable','')
p.classList.add('button')
p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
startOver.
}
function endGame(){

}
