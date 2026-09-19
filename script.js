const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");

const result = document.querySelector(".result");
const picks = document.querySelector(".picks");
const playerScoreEl = document.querySelector(".player-score");
const computerScoreEl = document.querySelector(".computer-score");
const playAgainBtn = document.querySelector(".play-again");
const choiceBtns = document.querySelectorAll(".choice");

// alert(
//     "Welcome! This game uses browser alerts and the Developer Console for logs.\n\n" +
//         "To open the console:\n" +
//         "• Windows/Linux: Press F12 or Ctrl + Shift + J\n" +
//         "• Mac: Press Cmd + Option + J\n\n" +
//         "Type startGame() in the console and press Enter to begin.",
// );

const choices = ["Rock", "Paper", "Scissors"];

// emoji for each choice
const emoji = {
    Rock: "✊",
    Paper: "✋",
    Scissors: "✌️",
};

// ascii art for choices
const art = {
    Rock: `
    _______
---'   ____)
      (_____)
      (_____)
      (____)
---.__(___)
`,

    Paper: `
     _______
---'    ____)____
           ______)
          _______)
         _______)
---.__________)
`,

    Scissors: `
    _______
---'   ____)____
          ______)
       __________)
      (____)
---.__(___)
`,
};

let computerScore = 0;
let playerScore = 0;
let gameOver = false;

// computerPlay function returns random move
function computerPlay() {
    let compSelIndex = Math.floor(Math.random() * 3);
    return choices[compSelIndex];
}

// where a round is played and decided. should return the winner
function playRound(playerSelection, computerSelection) {
    if (gameOver) return;

    console.log("==========");
    console.log(`Computer picks ${computerSelection}\n${art[computerSelection]}`);
    console.log(`Player picks ${playerSelection}\n${art[playerSelection]}`);

    picks.textContent = `${emoji[playerSelection]} vs ${emoji[computerSelection]}`;

    if (computerSelection === playerSelection) {
        result.textContent = "Draw!";
        result.className = "result draw";
    } else if (
        (playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Scissors" && computerSelection === "Paper")
    ) {
        result.textContent = "You Win!";
        result.className = "result win";
        playerScore++;
    } else {
        result.textContent = "Computer Wins!";
        result.className = "result lose";
        computerScore++;
    }
    
    // restart the pop animation
    void result.offsetWidth;
    result.classList.add("pop");

    playerScoreEl.textContent = playerScore;
    computerScoreEl.textContent = computerScore;

    if (playerScore === 5) {
        result.textContent = "You Win the Game! 🎉";
        endGame();
    } else if (computerScore === 5) {
        result.textContent = "The Computer Wins the Game! 😔";
        endGame();
    }
}

// disable buttons and show play again
function endGame() {
    gameOver = true;
    choiceBtns.forEach((btn) => (btn.disabled = true));
    playAgainBtn.hidden = false;
}

// reset everything for a new game
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    gameOver = false;
    playerScoreEl.textContent = 0;
    computerScoreEl.textContent = 0;
    picks.textContent = "Make your move";
    result.textContent = "";
    result.className = "result";
    choiceBtns.forEach((btn) => (btn.disabled = false));
    playAgainBtn.hidden = true;
}

// event listeners
rockBtn.addEventListener("click", () => {
    playRound("Rock", computerPlay());
});

paperBtn.addEventListener("click", () => {
    playRound("Paper", computerPlay());
});

scissorsBtn.addEventListener("click", () => {
    playRound("Scissors", computerPlay());
});

playAgainBtn.addEventListener("click", resetGame);
