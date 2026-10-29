let humanScore = 0;
let computerScore = 0;
let choice;

let result = document.querySelector("#result");


let rock = document.querySelector(".rock");
rock.addEventListener("click", () => {
    choice = "rock";
    playRound(choice, getComputerChoice());
});

let paper = document.querySelector(".paper");
paper.addEventListener("click", () => {
    choice = "paper";
    playRound(choice, getComputerChoice());
})

let scissors = document.querySelector(".scissors");
scissors.addEventListener("click", () => {
    choice = "scissors";
    playRound(choice, getComputerChoice());
})

function getComputerChoice(){
    let result = Math.floor(Math.random() * 3) + 1;
    let choice;
    if(result === 1){
        return choice = "rock";
    } else if (result === 2){
        return choice = "paper";
    } else {
        return choice = "scissors";
    }

}

function playRound(humanChoice, computerChoice){
    
    if (humanChoice === "paper"){
        if(computerChoice === "rock"){
            humanScore++;
        } else if (computerChoice === "scissors"){
            computerScore++;
        } 
    }

     if (humanChoice === "rock"){
        if(computerChoice === "scissors"){
            humanScore++;
        } else if (computerChoice === "paper"){
            computerScore++;
        } 
    }

     if (humanChoice === "scissors"){
        if(computerChoice === "paper"){
            humanScore++;
        } else if (computerChoice === "rock"){
            computerScore++;
        }
    }
    
    if(computerScore >= 5){
        result.textContent = "Game Over"; //change into dom
    } else if (humanScore >= 5){
        result.textContent = "Victory!";
    } else {
    result.textContent = `The score is, computer: ${computerScore} vs you: ${humanScore}`;
    }
}

function playGame(){
const computerSelection = getComputerChoice();
playRound(choice, computerSelection);
}

playGame();

//FUNCTION playGame
//FOR 5 rounds call playRound function
//END
/*
function playGame(){
    for (i=0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if(humanScore > computerScore){
        console.log("You won!");
    } else {
        console.log("You lost");
    }
       
}


playGame();
*/
