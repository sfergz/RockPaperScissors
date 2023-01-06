// params no args
// body generates a # and uses it to return a string
// returns string one of Rock, Paper, or Scissors
function getComputerChoice () {
    // Get a random number: 0, 1, or 2
    let randomNumber = Math.floor(Math.random() * 3);
    // If the number is 0, return rock. 1, return paper. 2, return scissors.
    if (randomNumber === 0) {
        return "Rock"
    } else if (randomNumber === 1) {
        return "Paper"
    } else {
        return "Scissors"
    }
}
console.log(getComputerChoice ())
// Write a function that plays a single round of Rock Paper Scissors
// params playerSelection, computerSelection (both are strings)
// returns a string (You win/lose! x beats y")
// side effect - none
function playRound (playerSelection, computerSelection) {
    //get lowercase versions of each selection 
    let x = playerSelection.toUpperCase() 
    let y = computerSelection.toUpperCase()

    //compare selections to one another using if else
    //rock > scissors
    //scissors > paper
    //paper > rock
    if (x === "ROCK") {
        if (y === "ROCK") {
            return "It's a tie!"
        } else if (y === "PAPER") {
            return "You lose! Paper beats Rock."
        } else if (y === "SCISSORS") {
            return "You win! Rock beats Scissors."
        }
    } else if (x === "PAPER") {
        if (y === "ROCK") {
            return "You win! Paper beats Rock."
        } else if (y === "PAPER") {
            return "It's a tie!"
        } else if (y === "SCISSORS") {
            return "You win! Paper beats Scissors."
        }
    } else if (x === "SCISSORS") {
        if (y === "ROCK") {
            return "You lose! Rock beats Scissors."
        } else if (y === "PAPER") {
            return "You win! Scissors beat Paper."
        } else if (y === "SCISSORS") {
            return "It's a tie!"
        }
    } else {
        return "INVALID ITEM, please choose rock paper or scissors"
    }
}