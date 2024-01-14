const gameChoices = ['rock','paper','scissors']; //sets the possible choices for the computer to choose from
let computerScore = 0;
let playerScore = 0 //define and set score variables
let gameString = '';

function getComputerChoice(gameChoices){
    return gameChoices[Math.floor(Math.random() * gameChoices.length)];
} //selects a random string from the array 'game choices' and then returns the string


function playRound(playerSelection, computerSelection,playerScore, computerScore){
        if(!(gameChoices.includes(playerSelection))){ //checks players choice against the array to see if it DOESNT match
            return 'your choice of: ' + playerSelection + ' is not a valid option';

        } else if(playerSelection == computerSelection){
            return 'It\'s a tie! You both chose ' + playerSelection;

        } else if(playerSelection == 'rock' && computerSelection == 'paper' || //if computer wins
        playerSelection == 'paper' && computerSelection == 'scissors' ||
        playerSelection == 'scissors' && computerSelection == 'rock'
    ){
        gameString = "You lose, " + computerSelection + " beats " + playerSelection + "!";
        computerScore = 1;
        return {gameString, playerScore, computerScore};//tell them why
        
    } else {
        gameString = "You win, " + playerSelection + " beats " + computerSelection + "!"; //if not, go here
        playerScore = 1;
        return {gameString, playerScore, computerScore};
    }
}


function game(playerScore,computerScore){
    for (let i = 1; i <= 5; i++){
        let computerSelection = getComputerChoice(gameChoices);

        let playerSelection = prompt(); //prompts player to input their choice
        playerSelection = playerSelection.toLowerCase(); //

        playRound(playerSelection,computerSelection,playerScore,computerScore);
            console.log(playerScore,computerScore);
    } return {gameString,playerScore,computerScore};
    
}

console.log(game(playerScore,computerScore));