const choice = ["rock", "paper", "scissors"];
const computerChoice = choice[Math.floor(Math.random() * 3)];
let playerChoice = prompt("rock, paper or scissors?");
let playerScore = 0;
let computerScore = 0;

function playRound(computerChoice, playerChoice) {
    if (playerChoice === computerChoice) {
        return "draw";
    } else if
        (playerChoice.toLowerCase() === "rock" && computerChoice === "scissors"
        || playerChoice.toLowerCase() === "paper" && computerChoice === "rock"
        || playerChoice.toLowerCase() === "scissors" && computerChoice === "paper") {
            playerScore++;
            return "round win";
        } else {
            computerScore++;
            return "round lose";
        }
    }

// function playGame(playerChoice) {
//    let player = playerChoice;
//    let computer = computerChoice;
//    for (let i = 0; i < 5; i++) {
//        playRound(player, computer);
//        if (playerScore == 5) {
//            console.log("yep");
//        } else if (computerChoice == 5) {
//            console.log("nop");
//        }
//     }
//}

console.log("player: ", playerChoice);
console.log("computer: ", computerChoice);
console.log(playRound(computerChoice, playerChoice));
console.log("score: ", playerScore, "-", computerScore);
