const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const resultDiv = document.querySelector(".result");

const buttons = document.querySelectorAll("button");

const matchResult = document.createElement("p");
const score = document.createElement("p");

/*
rock.addEventListener("click", () => {
    paragraph.textContent = playRound("Rock", computerPlay());
});
paper.addEventListener("click", () => {
    console.log(playRound("Paper", computerPlay()));
});
scissors.addEventListener("click", () => {
    console.log(playRound("Scissors", computerPlay()));
});
*/
gameTo5Score();

resultDiv.appendChild(matchResult);
resultDiv.appendChild(score);

function computerPlay() {
  const gameVariants = ["Rock", "Paper", "Scissors"];
  const randVar = Math.floor(Math.random() * gameVariants.length);
  return gameVariants[randVar];
}

function userPlay() {
  let playerSelection = prompt("Choose Rock, Paper or Scissors");
  playerSelection = playerSelection.toLowerCase();

  if (
    playerSelection !== "rock" &&
    playerSelection !== "paper" &&
    playerSelection !== "scissors"
  ) {
    alert("Wrong Input!");
    playerSelection = userPlay();
  }

  return playerSelection;
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  console.log(
    "Player: " + playerSelection + ". Computer: " + computerSelection
  );

  if (playerSelection === computerSelection) {
    return "It’s a tie";
  } else if (
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return {
      winner: "player",
      playerSelection: playerSelection,
      computerSelection: computerSelection,
    };
    // return (`You Win! ${playerSelection} beats ${computerSelection}`);
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "scissors" && computerSelection === "rock") ||
    (playerSelection === "paper" && computerSelection === "scissors")
  ) {
    // return (`You Lose! ${computerSelection} beats ${playerSelection}`);
    return {
      winner: "computer",
      playerSelection: playerSelection,
      computerSelection: computerSelection,
    };
  }
}

function gameTo5Score() {
  let playerSelection = "";
  let playerScore = 0;
  let computerScore = 0;
  let rounds = 0;

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      playerSelection = button.id;

      playerSelection = playerSelection.toLowerCase();
      let computerSelection = computerPlay().toLowerCase();

      let jsonStr = playRound(playerSelection, computerSelection);
      rounds++;
      if (jsonStr.winner === "computer") {
        ++computerScore;
        matchResult.textContent = `You lose this round! ${computerSelection} beats ${playerSelection}`;
      } else if (jsonStr.winner === "player") {
        ++playerScore;
        matchResult.textContent = `You win this round! ${playerSelection} beats ${computerSelection}`;
      } else {
        matchResult.textContent = jsonStr;
      }
      score.textContent = `Player vs Computer. Round ${rounds} - ${playerScore}:${computerScore}`;

      if (playerScore === 5 || computerScore === 5) {
        matchResult.textContent = "The End of The Game";
        if (playerScore > computerScore) {
          score.textContent = `You Win! ${rounds} rounds. Score - ${playerScore}:${computerScore}`;
        } else if (computerScore > playerScore) {
          score.textContent = `You Lost! ${rounds} rounds. Score - ${playerScore}:${computerScore}`;
        }
        playerScore = 0;
        computerScore = 0;
        rounds = 0;
      }
    });
  });

  //   while (playerScore !== 5 || computerScore !== 5) {}
}

/*
function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 1; i <= 5; i++) {
        const playerSelection = userPlay();
        const computerSelection = computerPlay();
        let jsonStr = playRound(playerSelection, computerSelection);
        if (jsonStr.winner === "computer")
        {
            ++computerScore;
        } else if (jsonStr.winner === "player") {
            ++playerScore;
        }
        console.log(`Player vs Computer. Round ${i} - ${playerScore}:${computerScore}`);
    }

    if (playerScore > computerScore) {
        console.log("You Win!");
        alert("You Win!");
    } else if (computerScore > playerScore) {
        console.log("You Lose!");
        alert("You Lose!");
    } else {
        console.log("It’s a tie!");
        alert("It’s a tie!");
    }
        
}

game();
*/

// const playerSelection = userPlay();
// const computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));

//alert(playRound(playerSelection, computerSelection));
