let humanScore=0;
let computerScore=0;
function getComputerChoice(){
    let a=Math.ceil(Math.random()*3);
    if(a==1){
        return "Rock";
    }
    if(a==2){
        return "Paper";
    }
    if(a==3){
        return "Scissors";
    }
}
function playRound(hum,com){
    if(hum==com){
        console.log("Its a draw");
    }
    else if ((hum=="rock" && com=="scissors")||(hum=="paper" && com=="rock")||(hum=="scissors" && com=="paper")) {
        console.log(`You Win!, ${hum} beats ${com}`);
        humanScore++;
    }
    else{
        console.log(`You Lose!, ${com} beats ${hum}`);
        computerScore++;
    }
}
function playGame(){
    const humanSelection=prompt("Please enter your choice");
    const computerSelection=getComputerChoice();
    playRound(humanSelection.toLocaleLowerCase(),computerSelection.toLocaleLowerCase());
}
for(let i=0;i<5;i++){
    playGame();
}
console.log(`Final Score: Human: ${humanScore} Computer: ${computerScore}`);
if(humanScore>computerScore){
    console.log("Human Wins");
}
else if(humanScore==computerScore){
    console.log("Its a tie!");
}
else{
    console.log("Computer Wins")
}