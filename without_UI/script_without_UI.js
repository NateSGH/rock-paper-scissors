function computerPlay() {
    const gameVariants = ["Rock", "Paper", "Scissors"];
    const randVar =  Math.floor(Math.random() * gameVariants.length);
    return gameVariants[randVar];
}
function userPlay() {
    let playerSelection = prompt("Choose Rock, Paper or Scissors");
    playerSelection = playerSelection.toLowerCase();

    if ((playerSelection !== "rock") && 
        (playerSelection !== "paper") && 
        (playerSelection !== "scissors")) {
        alert("Wrong Input!");
        playerSelection = userPlay();
    } 
    
    return playerSelection;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    console.log("Player: " + playerSelection +". Computer: " + computerSelection);

    if (playerSelection === computerSelection) {
        return "It’s a tie";
    } else if ((playerSelection === "paper" && computerSelection === "rock") || 
                (playerSelection === "rock" && computerSelection === "scissors") ||
                (playerSelection === "scissors" && computerSelection === "paper")) {
        return {winner: "player",
                playerSelection: playerSelection,
                computerSelection: computerSelection}           
        // return (`You Win! ${playerSelection} beats ${computerSelection}`);
    } else if ((playerSelection === "rock" && computerSelection === "paper") || 
                (playerSelection === "scissors" && computerSelection === "rock") ||
                (playerSelection === "paper" && computerSelection === "scissors")) {
        // return (`You Lose! ${computerSelection} beats ${playerSelection}`);
        return {winner: "computer",
                playerSelection: playerSelection,
                computerSelection: computerSelection}     
    }
}

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

// const playerSelection = userPlay();
// const computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));

//alert(playRound(playerSelection, computerSelection));


