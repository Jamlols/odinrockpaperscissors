let rockButton = document.querySelector('#rock');
    rockButton.addEventListener('click', function() {
        playerSelection = 'rock';
        game();
    })
    
let paperButton = document.querySelector('#paper');
    paperButton.addEventListener('click', function() {
        playerSelection = 'paper';
        game();
    })

let scissorsButton = document.querySelector('#scissors');
    scissorsButton.addEventListener('click', function() {
        playerSelection = 'scissors';
        game();
    })

let gameCount = document.querySelector('#gameCount');
    gameCount.innerText = '';

let roundResultElement = document.querySelector('#roundResult');
    roundResultElement.innerText = '';

let playerScoreElement = document.querySelector('#playerScoreResult');
    playerScoreElement.innerText = '';

let computerScoreElement = document.querySelector('#computerScoreResult');
    computerScoreElement.innerText = '';

let finalResultElement = document.querySelector('#finalResult');
    finalResultElement.innerText = '';


const choice = ["rock", "paper", "scissors"];
const counter = gameCounter();

let playerSelection = '';

let playerScore = 0;
let computerScore = 0;

function gameCounter() { // Counts number of games.
    let count = 0;
        return function () {
            count++;
            gameCount.innerText = "Game " + count;
            return count;
        }
}

function game() {

    function getComputerChoice() { // Computer choice out of the const = choice array.
        let random = Math.floor(Math.random() * choice.length);
        return choice[random]; 
    }

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

    let currentGameCount = counter();
    updateScore(roundResult);
    roundResultElement.innerText = "Result this round: " + roundResult;
    playerScoreElement.innerText = "Player Score: " + playerScore;
    computerScoreElement.innerText = "Computer Score: " + computerScore;

    if (currentGameCount === 5) {
        winOrLose();
    }

    function winOrLose() { // Displays at the end a winner or loser based on the score.

        if (playerScore > computerScore) {
            finalResultElement.innerText = 'Player wins!';
        }
        else if (computerScore > playerScore) {
            finalResultElement.innerText = 'Computer wins!';
        }
        else {
            finalResultElement.innerText = "It's all a tie!";
        }
    }


}


