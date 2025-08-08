let humanScore = 0;
let computerScore = 0;
let roundsPlayed=0;
let totalRounds=5;

const scorePlayer = document.querySelector(".player-score");
const scoreComputer = document.querySelector(".computer-score");

function updateScore() {
  scorePlayer.textContent = `Player: ${humanScore}`;
  scoreComputer.textContent = `Computer: ${computerScore}`;
}
updateScore();
let rock=document.querySelector(".Rock");
let paper=document.querySelector(".Paper");
let scissors=document.querySelector(".Scissors");
let heading=document.querySelector(".heading");
let playerChoice=document.querySelector(".player-choice");
let computerChoice=document.querySelector(".computer-choice");
let playerImage=document.querySelector("#Player-image");
let computerImage=document.querySelector("#Computer-image");

rock.addEventListener("click", () => {
  playRound("rock", getComputerChoice().toLowerCase());
  playerImage.src="./Images/hand.png";
});

paper.addEventListener("click", () => {
  playRound("paper", getComputerChoice().toLowerCase());
  playerImage.src="./Images/paper.png";
});

scissors.addEventListener("click", () => {
  playRound("scissors", getComputerChoice().toLowerCase());
  playerImage.src="./Images/scissor.png";
});

function getComputerChoice(){
    let a=Math.ceil(Math.random()*3);
    if(a==1){
        computerImage.src="./Images/hand.png";
        return "Rock";
    }
    if(a==2){
        computerImage.src="./Images/paper.png";
        return "Paper";
    }
    if(a==3){
        computerImage.src="./Images/scissor.png";
        return "Scissors";
    }
}

function playRound(hum,com){
    if(hum==com){
        heading.textContent="Its a draw";
    }
    else if ((hum=="rock" && com=="scissors")||(hum=="paper" && com=="rock")||(hum=="scissors" && com=="paper")) {
        heading.textContent=`You Win!`;
        humanScore++;
        updateScore();
    }
    else{
        heading.textContent=`You Lose!`;
        computerScore++;
        updateScore();
    }
    roundsPlayed++;
    checkForWinner();
}

// console.log(`Final Score: Human: ${humanScore} Computer: ${computerScore}`);

function checkForWinner(){
    if(roundsPlayed==totalRounds){
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
        if (humanScore > computerScore) {
      heading.textContent = `Game Over: You won the match ${humanScore} to ${computerScore}! 🎉`;
        } else if (computerScore > humanScore) {
        heading.textContent = `Game Over: Computer won the match ${computerScore} to ${humanScore}! `;
        } else {
        heading.textContent = `Game Over: It's a tie, ${humanScore} to ${computerScore}!`;
        }
    }
}
