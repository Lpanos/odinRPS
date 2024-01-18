const gameChoices = ['rock','paper','scissors']; //sets the possible choices for the computer to choose from
let gameString = '';

function getComputerChoice(gameChoices){
    return gameChoices[Math.floor(Math.random() * gameChoices.length)];
} //selects a random string from the array 'game choices' and then returns the string


function playRound(playerSelection, computerSelection,playerScore, computerScore){
        if(!(gameChoices.includes(playerSelection))){ //checks players choice against the array to see if it DOESNT match

            gameString = 'your choice of: ' + playerSelection + ' is not a valid option';
            return {gameString: gameString,
                playerScore: playerScore,
                computerScore: computerScore}; //returns all values seperately

        } else if(playerSelection == computerSelection){

            gameString = 'It\'s a tie! You both chose ' + playerSelection + '!';

            return {gameString: gameString,
                    playerScore: playerScore,
                    computerScore: computerScore};

        } else if(playerSelection == 'rock' && computerSelection == 'paper' || //if computer wins
                    playerSelection == 'paper' && computerSelection == 'scissors' ||
                    playerSelection == 'scissors' && computerSelection == 'rock'
        ){
            gameString = "You lose, " + computerSelection + " beats " + playerSelection + "!";
            computerScore++; //increment computer score by 1
            return {gameString: gameString,
                    playerScore: playerScore,
                    computerScore: computerScore};//tell them why
        
    } else {
        gameString = "You win, " + playerSelection + " beats " + computerSelection + "!"; //if not, go here
        playerScore++; //increment player score by 1
        return {gameString: gameString,
                playerScore: playerScore,
                computerScore: computerScore
            };
    }
}


function game(){
    let computerScore = 0;
    let playerScore = 0 //define and set score variables

        for (let i = 1; i <= 5; i++){
            let computerSelection = getComputerChoice(gameChoices);

            let playerSelection = prompt('Please Enter: Rock, Paper, Or Scissors'); //prompts player to input their choice

                playerSelection = playerSelection.toLowerCase();

                while (!(gameChoices.includes(playerSelection))){
                    playerSelection = prompt('Please Enter A Valid Option (Rock, Paper, Or Scissors)')
                    playerSelection = playerSelection.toLowerCase();
                };

            results = (playRound(playerSelection,computerSelection,playerScore,computerScore)); //play one round, inputting all 4 parameters
                gameString = results.gameString;
                playerScore = results.playerScore;
                computerScore = results.computerScore;
            console.log(gameString + ' Player Score: ' + playerScore + ' | Computer Score: ' + computerScore); 


        } 
            if(playerScore < computerScore){
                return 'Sorry bozo, you ultimately lost, with a score of: ' + playerScore + ' to ' + computerScore;
            } else {
                return 'Congradulations, you won! With a score of: ' + playerScore + ' to ' + computerScore;
            }
        
    
}

console.log(game());