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

const winninCondition = document.querySelector(".winning-condition")

let playerWins = 0;
let cpuWins = 0;
let totalGames = 0;

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

    playerChoice.textContent = `Player Choice: ${humanSelection.toUpperCase()}`;
    computerChoice.textContent = `CPU Choice: ${computerSelection.toUpperCase()}`;

    console.log(`Player Wins: ${playerWins}`);
    console.log(`CPU Wins: ${cpuWins}`);
    console.log(`Win Percentage: ${calculateWinPercentage()}%`);
}

function playRound(humanChoice, computerChoice) {
    totalGames++;

    if (humanChoice === computerChoice) {
        winninCondition.textContent = "It's a draw!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        winninCondition.textContent = "You win!";
        playerWins++;
    } else {
        winninCondition.textContent = "You lose!";
        cpuWins++;
    }

}

function calculateWinPercentage() {
    if (totalGames === 0) return 0;
    return ((playerWins / totalGames) * 100).toFixed(2); // Return percentage with two decimals
}

console.log("Time to play!");
