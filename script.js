const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");

const result = document.querySelector(".result");
const score = document.querySelector(".score");

// alert(
//     "Welcome! This game uses browser alerts and the Developer Console for logs.\n\n" +
//         "To open the console:\n" +
//         "• Windows/Linux: Press F12 or Ctrl + Shift + J\n" +
//         "• Mac: Press Cmd + Option + J\n\n" +
//         "Type startGame() in the console and press Enter to begin.",
// );

const choices = ["Rock", "Paper", "Scissors"];

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

    if (computerSelection === playerSelection) {
        result.textContent = "Draw!";
    } else if (
        (playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Scissors" && computerSelection === "Paper")
    ) {
        result.textContent = "You Win!";
        playerScore++;
    } else {
        result.textContent = "Computer Wins!";
        computerScore++;
    }
    
    score.textContent = `You ${playerScore} - ${computerScore} Computer`;

    if (playerScore === 5) {
        result.textContent = "You Win the Game! 🎉";
        gameOver = true;
    } else if (computerScore === 5) {
        result.textContent = "The Computer Wins the Game! 😔";
        gameOver = true;
    }
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
