const gameChoices = ['rock','paper','scissors']; //sets the possible choices for the computer to choose from


function getComputerChoice(gameChoices){
    return gameChoices[Math.floor(Math.random() * gameChoices.length)];
} //selects a random string from the array 'game choices' and then returns the string

let computerSelection = getComputerChoice(gameChoices);

let playerSelection = prompt(); //prompts player to input their choice
    playerSelection = playerSelection.toLowerCase(); //

function playRound(playerSelection, computerSelection){
        if(!(gameChoices.includes(playerSelection))){ //checks players choice against the array to see if it DOESNT match
            return 'your choice of: ' + playerSelection + ' is not a valid option';
        }

    else if(playerSelection == 'rock' && computerSelection == 'paper' || //if computer wins
        playerSelection == 'paper' && computerSelection == 'scissors' ||
        playerSelection == 'scissors' && computerSelection == 'rock'
    ){
        return "You Lose, " + computerSelection + " beats " + playerSelection + "!"; //tell them why
        
    } else {
        return "You Win, " + playerSelection + " beats " + computerSelection + "!"; //if not, go here
    }
}