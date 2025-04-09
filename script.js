const choices = ["rock", "paper", "scissors"];

let round = 1;
let humanScore = 0;
let computerScore = 0;
let humanChoice;
let computerChoice;

const getComputerSelection = function () {
    let rand = Math.floor(Math.random() * 3);
    return choices[rand];
}

const getHumanSelection = function () {
    let choice;
    do {
        choice = prompt("Enter your choice").toLowerCase();
    } while ((choice && !choices.includes(choice)));
    return choice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("Draw.");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")) {
        humanScore++;
        console.log(`${humanChoice} beats ${computerChoice}`);
    } else {
        computerScore++;
        console.log(`${computerChoice} beats ${humanChoice}`);
    }
}

function checkWinner() {
    while (round <= 5) {
        humanChoice = getHumanSelection();
        computerChoice = getComputerSelection();
        playRound(humanChoice, computerChoice);
        round++;
    }

    if (humanScore === computerChoice) {
        console.log(`Human scores: ${humanScore}\nComputer scores ${computerScore}\nDraw!`);
    } else if (humanScore > computerScore) {
        console.log(`Human scores: ${humanScore}\nComputer scores ${computerScore}\nHuman won!`);
    } else {
        console.log(`Computer scores ${computerScore}\nHuman scores: ${humanScore}\nComputer won!`);
    }
}

checkWinner()