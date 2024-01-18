const gameChoices = ['rock','paper','scissors']; //sets the possible choices for the computer to choose from
let gameString = '';
let playerScore = 0;
let computerScore = 0;
let roundNum = 0;

function getComputerChoice(options){
    return options[Math.floor(Math.random() * options.length)];
} //selects a random string from the input array 'options' and returns


function playRound(playerSelection, computerSelection, playerScore, computerScore){
        if(playerSelection == computerSelection){

            gameString = 'It\'s a tie! You both chose ' + playerSelection + '!';

            return {gameString: gameString,
                    playerScore: playerScore,
                    computerScore: computerScore};

        } else if(playerSelection == 'rock' && computerSelection == 'paper' || //if computer wins
                    playerSelection == 'paper' && computerSelection == 'scissors' ||
                    playerSelection == 'scissors' && computerSelection == 'rock'
                    ){
                        gameString = "You lose, " + computerSelection + " beats " + playerSelection + "!";

                        computerScore++;

                        return {gameString: gameString,
                                playerScore: playerScore,
                                computerScore: computerScore};
        
        } else {
                gameString = "You win, " + playerSelection + " beats " + computerSelection + "!";

                playerScore++;

                return {gameString: gameString,
                        playerScore: playerScore,
                        computerScore: computerScore
                };
    }
}


let results = document.querySelector('#results');
    let resultList = document.querySelector('#resultList');

let choices = document.querySelector('#choices');

if (playerScore == 5 || computerScore == 5){

    function createWinner (){

        let li = document.createElement('li');
            if(playerScore > computerScore){
                li.textContent = 'Congradulations, You Won! Total Score: Player: ' + playerScore + ' | Computer: ' + computerScore; 
            } else {
                li.textContent = 'Sorry Pal, You Lost! Total Score: Player: ' + playerScore + ' | Computer: ' + computerScore;
             }
                return li; 
    }

} else {

        choices.addEventListener('click', (event) => {

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

                    let li = document.createElement('li');

                    li.textContent = 'Round ' + ++roundNum + ': ' + gameString + ' Total Score: Player: ' + playerScore + ' | Computer: ' + computerScore; 
                    
                    return li;

                }

                resultList.appendChild(createResultItem());
            
        });
}