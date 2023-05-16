const rock = "rock";
const paper = "paper";
const scissors = "scissors";
const playerWin = "You beat the computer. Grats.";
const computerWin = "You lost to the computer. What a fucking loser.";
const tie = "Huh, that's weird. It's a tie.";

let playerSelection;
let computerSelection;

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let picks = [rock, paper, scissors];
    const computerChoice = picks[Math.floor(Math.random() * picks.length)];
    return(computerChoice);
}

function clickedRock(playerSelection, computerSelection) {
    playerSelection = rock;
    computerSelection = getComputerChoice();
    let winMsg = `You've won! You chose ${playerSelection} and the computer chose ${computerSelection}.`;
    let tieMsg = `It's a tie! You chose ${playerSelection} and the computer chose ${computerSelection}.`;
    let loseMsg = `You've lost! You chose ${playerSelection} and the computer chose ${computerSelection}.`;
    if (computerSelection == rock) {
    alert(tieMsg);
} else if (computerSelection == paper) {
    alert(loseMsg);
    computerScore = ++computerScore;
} else {
    alert(winMsg);
    playerScore = ++playerScore;
}   document.getElementById("playerScore").innerHTML = playerScore;
    document.getElementById("computerScore").innerHTML = computerScore;
}

function clickedPaper() {
    playerSelection = paper;
    computerSelection = getComputerChoice();
    let winMsg = `You've won! You chose ${playerSelection} and the computer chose ${computerSelection}.`;
    let tieMsg = `It's a tie! You chose ${playerSelection} and the computer chose ${computerSelection}.`;
    let loseMsg = `You've lost! You chose ${playerSelection} and the computer chose ${computerSelection}.`;
    if (computerSelection == rock) {
    alert(winMsg);
    playerScore = ++playerScore;
 } else if (computerSelection == paper) {
    alert(tieMsg);
 } else {
    alert(loseMsg);
    computerScore = ++computerScore;
}   document.getElementById("playerScore").innerHTML = playerScore;
    document.getElementById("computerScore").innerHTML = computerScore;
}

function clickedScissors() {
    playerSelection = scissors;
    computerSelection = getComputerChoice();
    let winMsg = `You've won! You chose ${playerSelection} and the computer chose ${computerSelection}.`;
    let tieMsg = `It's a tie! You chose ${playerSelection} and the computer chose ${computerSelection}.`;
    let loseMsg = `You've lost! You chose ${playerSelection} and the computer chose ${computerSelection}.`;
    if (computerSelection == rock) {
    alert(loseMsg);
    computerScore = ++computerScore;
} else if (computerSelection == paper) {
    alert(winMsg);
    playerScore = ++playerScore;
} else {
    alert(tieMsg);
}   document.getElementById("playerScore").innerHTML = playerScore;
    document.getElementById("computerScore").innerHTML = computerScore;
}

function game() {
    if (playerScore == 5) {
        alert(playerWin);
    } else if (computerScore == 5) {
        alert(computerWin);
    }
}