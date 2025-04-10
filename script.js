const choices = ["rock", "paper", "scissors"];
let round = 1;
let humanScore = 0;
let computerScore = 0;
let humanChoice;
let computerChoice;

const getComputerSelection = () => {
    let rand = Math.floor(Math.random() * 3);
    return choices[rand];
}

const options = document.querySelector("#options");
options.addEventListener("click", (e) => {
    let humanSelection;
    if (e.target.id === "rock") {
        humanSelection = "rock";
    } else if (e.target.id === "paper") {
        humanSelection = "paper";
    } else if (e.target.id === "scissors") {
        humanSelection = "scissors";
    }
    playRound(humanSelection, getComputerSelection());
})

function playRound(humanChoice, computerChoice) {
    const display = document.querySelector("#display");
    if (humanChoice === computerChoice) {
        display.textContent = "draw";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")) {
        humanScore++;
        display.textContent = `${humanChoice} beats ${computerChoice}`;
    } else {
        computerScore++;
        display.textContent = `${computerChoice} beats ${humanChoice}`;
    }
}