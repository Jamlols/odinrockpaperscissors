const choice = ["rock", "paper", "scissors"];
const counter = gameCounter();


let playerScore = 0;
let computerScore = 0;

function gameCounter() { // Counts number of games.
    let count = 0;
        return function () {
            count++;
            console.log("Game " + count);
        }
}

function game() {

    function getComputerChoice() { // Computer choice out of the const = choice array.
        let random = Math.floor(Math.random() * choice.length);
        return choice[random]; 
    }

    const playerSelection = "rock";
    const computerSelection = getComputerChoice();

    function playRound() { // The game logic.
        if (playerSelection == computerSelection) {
            return "tie";
        }
        else if (playerSelection == "rock" && computerSelection == "paper") {
            return "lose";
        }
        else if (playerSelection == "rock" && computerSelection == "scissors") {
            return "win"; 
        }
        else if (playerSelection == "scissors" && computerSelection == "rock") {
            return "lose"
        }
        else if (playerSelection == "scissors" && computerSelection == "paper") {
            return "win"
        }
        else if (playerSelection == "paper" && computerSelection == "scissors") {
            return "lose"
        }
        else if (playerSelection == "paper" && computerSelection == "rock") {
            return "win";
        }
        else {
            return "Please enter a valid input!";
        }
    }

    function updateScore(result) { // Score tracker.
        if (result == "win") {
            playerScore++;
        }
        else if (result == "lose") {
            computerScore++;
        }
        else {
        }
    }

    let roundResult = playRound();

    counter();
    console.log(roundResult);
    updateScore(roundResult);
    console.log(playerScore);
    console.log(computerScore);
}

function winOrLose() { // Displays at the end a winner or loser based on the score. 
    if (playerScore > computerScore) {
        console.log("Player wins!");
    }
    else if (computerScore > playerScore) {
        console.log("Computer wins!");
    }
    else {
        console.log("It's all a tie!");
    }
}

game();
game();
game();
game();
game();
winOrLose();