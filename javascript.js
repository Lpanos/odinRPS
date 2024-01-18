const gameChoices = ['rock','paper','scissors']; //sets the possible choices for the computer to choose from
let gameString = '';
let playerScore = 0;
let computerScore = 0;
let roundNum = 1;
let gameOver = 0;

function getComputerChoice(options){
    return options[Math.floor(Math.random() * options.length)];
} //selects a random string from the input array 'options' and returns


function playRound(playerSelection, computerSelection, playerScore, computerScore){
        if(playerSelection == computerSelection){

            gameString = 'It\'s a tie! You both chose ' + playerSelection + '!';

            return {gameString: gameString,
                    playerScore: playerScore,
                    computerScore: computerScore,
                    tie: 1};

        } else if(playerSelection == 'rock' && computerSelection == 'paper' || //if computer wins
                    playerSelection == 'paper' && computerSelection == 'scissors' ||
                    playerSelection == 'scissors' && computerSelection == 'rock'
                    ){
                        gameString = "You lose, " + computerSelection + " beats " + playerSelection + "!";

                        computerScore++;

                        return {gameString: gameString,
                                playerScore: playerScore,
                                computerScore: computerScore,
                                tie: 0};
        
        } else {
                gameString = "You win, " + playerSelection + " beats " + computerSelection + "!";

                playerScore++;

                return {gameString: gameString,
                        playerScore: playerScore,
                        computerScore: computerScore,
                        tie: 0
                };
    }
}


let results = document.querySelector('#results');
    let resultList = document.querySelector('#resultList');

let choices = document.querySelector('#choices');



choices.addEventListener('click', (event) => {

if(!gameOver){

            let target = event.target;

            switch(target.id){
                case 'rock':
                    playerSelection = 'rock';
                    break;
                case 'paper':
                    playerSelection = 'paper';
                    break;
                case 'scissors':
                    playerSelection = 'scissors';
                    break;
            };

                function createResultItem(){

                    let roundOutcome = playRound(playerSelection,getComputerChoice(gameChoices),playerScore,computerScore);

                        gameString = roundOutcome.gameString;
                        playerScore =+ roundOutcome.playerScore;
                        computerScore =+ roundOutcome.computerScore;
                        tie = roundOutcome.tie;

                    let li = document.createElement('li');

                    if (playerScore == 5 || computerScore == 5){
            
                        if(playerScore > computerScore){
                            li.textContent = 'Round ' + roundNum + ': ' + gameString + 'Congradulations, You Won! Total Score: Player: ' + playerScore + ' | Computer: ' + computerScore + " | Refresh The Page To Restart"; 
                
                        } else {
                            li.textContent = 'Round ' + roundNum + ': ' + gameString + 'Sorry Pal, You Lost! Total Score: Player: ' + playerScore + ' | Computer: ' + computerScore + " | Refresh The Page To Restart";
                        }
                            gameOver = 1;
                         
                    } else {

                    li.textContent = 'Round ' + roundNum + ': ' + gameString + ' Total Score: Player: ' + playerScore + ' | Computer: ' + computerScore; 

                        }

                        



                    if(!tie){
                        roundNum++
                    }
                    
                    return li;

                }

                resultList.appendChild(createResultItem());
            
        

    }
});
