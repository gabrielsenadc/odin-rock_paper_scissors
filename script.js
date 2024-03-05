function playRound(playerSelection, computerSelection) {
    if(playerSelection.toUpperCase() === "ROCK"){
        if(computerSelection.toUpperCase() === "ROCK")
            return "Tie"
        if(computerSelection.toUpperCase() === "PAPER")
            return "You Lose."
        if(computerSelection.toUpperCase() === "SCISSORS")
            return "You Win!"
    }
    if(playerSelection.toUpperCase() === "PAPER"){
        if(computerSelection.toUpperCase() === "ROCK")
            return "You Win!"
        if(computerSelection.toUpperCase() === "PAPER")
            return "Tie"
        if(computerSelection.toUpperCase() === "SCISSORS")
            return "You Lose."
    }
    if(playerSelection.toUpperCase() === "SCISSORS"){
        if(computerSelection.toUpperCase() === "ROCK")
            return "You Lose."
        if(computerSelection.toUpperCase() === "PAPER")
            return "You Win!"
        if(computerSelection.toUpperCase() === "SCISSORS")
            return "Tie"
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

const imagem1 = document.querySelector("#imagem1");
const imagem2 = document.querySelector("#imagem2");
const scissors = document.querySelector("#scissors");
const rock = document.querySelector("#rock");
const papaer = document.querySelector("#paper");
const message = document.querySelector("p");
const again = document.querySelector("#again");

playGame();

function playGame(){
    imagem1.setAttribute('src', 'images/question_mark.png');
    imagem2.setAttribute('src', 'images/question_mark.png');
    message.textContent = ' ';
    again.innerHTML = '';

    let playerSelection = "nothing";
    const computerSelection = getComputerChoice();

    scissors.addEventListener("click", () => {
        imagem1.setAttribute('src', 'images/scissors.webp');
        playerSelection = "SCISSORS";
    });

    rock.addEventListener("click", () => {
        imagem1.setAttribute('src', 'images/rock.png');
        playerSelection = "ROCK";
    });

    paper.addEventListener("click", () => {
        playerSelection = "PAPER";
        imagem1.setAttribute('src', 'images/paper.png');
    });

    const play = document.querySelector("#play");
    play.addEventListener("click", () => {
        if(playerSelection === "nothing")
          playGame();
        else {
          if(computerSelection.toLowerCase() === "paper")
            imagem2.setAttribute('src', 'images/paper.png');
          if(computerSelection.toLowerCase() === "scissors")
            imagem2.setAttribute('src', 'images/scissors.webp');
          if(computerSelection.toLowerCase() === "rock")
            imagem2.setAttribute('src', 'images/rock.png');
          message.textContent = playRound(playerSelection, computerSelection);
          again.innerHTML = '<button class="againButton">Play Again</button>';
          const againButton = document.querySelector(".againButton");
          againButton.addEventListener("click", () =>{
            playGame();
          });
        }
    });
}

