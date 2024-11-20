function getComputerChoice() {
    return ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];
}

let humanSelection = ""; 
let computerSelection = getComputerChoice();

const playerChoice = document.querySelector(".player-choice");
const computerChoice = document.querySelector(".computer-choice");

const rockButton = document.querySelector("#rockbtn");
const paperButton = document.querySelector("#paperbtn");
const scissorsButton = document.querySelector("#scissorsbtn");

rockButton.addEventListener("click", () => {
    humanSelection = "rock";
    playGame(humanSelection);
});

paperButton.addEventListener("click", () => {
    humanSelection = "paper";
    playGame(humanSelection);
});

scissorsButton.addEventListener("click", () => {
    humanSelection = "scissors";
    playGame(humanSelection);
});

function playGame(humanSelection) {
    computerSelection = getComputerChoice(); 
    playRound(humanSelection, computerSelection);

    playerChoice.textContent = `Player: ${humanSelection.toUpperCase()}`;
    computerChoice.textContent = `CPU: ${computerSelection.toUpperCase()}`;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a draw!");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log("You win!");
    } else {
        console.log("You lose!");
    }
}

console.log("Time to play!");
