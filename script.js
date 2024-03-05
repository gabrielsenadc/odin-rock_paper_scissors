function playRound(playerSelection, computerSelection) {
    if(playerSelection.toUpperCase() === "ROCK"){
        if(computerSelection.toUpperCase() === "ROCK")
            alert("Tie");
        if(computerSelection.toUpperCase() === "PAPER")
            alert("You Lose!");
        if(computerSelection.toUpperCase() === "SCISSORS")
            alert("You Win!");
    }
    if(playerSelection.toUpperCase() === "PAPER"){
        if(computerSelection.toUpperCase() === "ROCK")
            alert("You Win!");
        if(computerSelection.toUpperCase() === "PAPER")
            alert("Tie");
        if(computerSelection.toUpperCase() === "SCISSORS")
            alert("You Lose!");
    }
    if(playerSelection.toUpperCase() === "SCISSORS"){
        if(computerSelection.toUpperCase() === "ROCK")
            alert("You Lose!");
        if(computerSelection.toUpperCase() === "PAPER")
            alert("You Win!");
        if(computerSelection.toUpperCase() === "SCISSORS")
            alert("Tie");
    }
}


function getComputerChoice(){
    let n = Math.random() * 10;
    if(n < 3.3)
        return "rock";
    if(n > 6.6)
        return "paper";
    return "scissors"
}
  
function playGame(){
    const playerSelection = prompt("What is your choice?");
    const computerSelection = getComputerChoice();
    alert("computer choice: " + computerSelection);
    console.log(playRound(playerSelection, computerSelection));
}

let answer = "yes";

while(answer.toLowerCase() === "yes"){
    playGame();
    answer = prompt("Do you wanna play?");
}