// player selection to argument
const rock = document.getElementById("rock");
rock.addEventListener("click", () => playGame("rock"));

const paper = document.getElementById("paper");
paper.addEventListener("click", () => playGame("paper"));

const scissors = document.getElementById("scissors");
scissors.addEventListener("click", () => playGame("scissors"));


  //play Game
  function playGame(playerSelection) {
    chooseYW.innerHTML = ``;
    const options = ["rock", "paper", "scissors"];
    const computerSelection = options[Math.floor(Math.random() * options.length)];

    yourChoice.innerHTML = `<h4>Your choice: ${playerSelection}.</h4>`;
    theComputerChoice.innerHTML = `<h4>The computer choice: ${computerSelection}.</h4>`;

    if (playerSelection === computerSelection) {
      result.innerHTML = `<h2>It's a tie! You both chose ${playerSelection}.</h2>`;
    } else if ((playerSelection === "rock" && computerSelection === "scissors", playerSelection === "paper" && computerSelection === "rock", playerSelection === "scissors" && computerSelection === "paper")) {
      result.innerHTML = `<h2>You won! ${capitalizeFirstLetter(playerSelection)} beats ${computerSelection}.</h2>`;
    } else {
      result.innerHTML = `<h2>You lost! ${capitalizeFirstLetter(computerSelection)} beats ${playerSelection}.</h2>`;
    }
  };
console.log(playGame());

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

// restart
restartBtn.addEventListener("click", restartGame);

function restartGame() {
chooseYW.innerHTML = `Choose your weapon: `;
yourChoice.innerHTML = `<h4>Your choice:❔.</h4>`;
theComputerChoice.innerHTML = `<h4>The computer choice:❔.</h4>`;
result.innerHTML = ``;
}

window.onload = restartGame;