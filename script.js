let humanScore = 0;
let computerScore = 0;


/* 
FUNCTION getComputerChoice
(get a random number between 1 and 3)
SET random number between (1,3) 
IF random number = 1, SET choice = rock;
ELSE IF random number = 2, SET choice = paper;
ELSE SET choice = scissors
END FUNCTION
*/

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

/*
FUNCTION getHumanChoice
GET user input (rock, paper, scissors)
RETURN user input
END FUNCTION
*/

function getHumanChoice() {
    let choice = prompt("Pick Rock, Paper or Scissors", "");
    return choice;
}


/*
FUNCTION playRound
SET PARAM humanChoice and computerChoice
SET humanChoice to lower case;
IF humanChoice equals paper and computerChoice is scissors, add a point to computerScore;
ELSE IF computerChoice is rock, add a point to humanChoice
ELSE add no point (its a draw)

repeat this with humanChoice for rock and scisssor.
*/

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    
    if (humanChoice === "paper"){
        if(computerChoice === "rock"){
            humanScore++;
        } else if (computerChoice === "scissors"){
            computerScore++;
        } else {
            console.log("draw!");
        }
    }

     if (humanChoice === "rock"){
        if(computerChoice === "scissors"){
            humanScore++;
        } else if (computerChoice === "paper"){
            computerScore++;
        } else {
            console.log("draw!");
        }
    }

     if (humanChoice === "scissors"){
        if(computerChoice === "paper"){
            humanScore++;
        } else if (computerChoice === "rock"){
            computerScore++;
        } else {
            console.log("draw!");
        }
    }

    console.log(`The score is, computer:${computerScore} vs you:${humanScore}`);
}

//FUNCTION playGame
//FOR 5 rounds call playRound function
//END

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