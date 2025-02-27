/*console.log("Hello! World. ");
console.log("Welcome To Our Game- Rock Paper Scissors." ,'\n' ,  "Lets's Start");

// Function to get Computer Input.
function getComputerChoice(){
    let choices = [ 'ROCK', "PAPER", "SCISSORS"]
    let choice = choices[Math.floor(Math.random()* choices.length)]
        return choice;
}

// Function to get User Input.
function getHumanChoice(){
  let weapons = prompt ( ` Please enter : Rock, Paper Or Scissors`);

    if (weapons.toUpperCase() === "ROCK" || weapons.toUpperCase() === "PAPER" || weapons.toUpperCase() === "SCISSORS" || weapons.toUpperCase() === "SCISSOR"){
    return weapons.toUpperCase();
    }else{
    console.log("Invalid Input. Please Try Again. & Choose between Rock or Paper or Scissors");
        return getHumanChoice(); // Recursive call for Valid Input.
    }
}

//Funtion to Play the Game.
function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        console.log(`You chose: ${humanChoice}`);
        console.log(`Computer chose: ${computerChoice}`);

        if (humanChoice === computerChoice) {
            return "It's a tie!";
        }

        else if (
            (humanChoice === "ROCK" && computerChoice === "SCISSORS") ||
            (humanChoice === "SCISSORS" && computerChoice === "PAPER") ||
            (humanChoice === "PAPER" && computerChoice === "ROCK")
        ) {
            humanScore++;
            return "You win this round!";
        } else {
            computerScore++;
            return "Computer wins this round!";
        }
    }

    // Play 5 rounds
    for (let i = 1; i <= 5; i++) {
        console.log(`Round ${i}`);
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        console.log(playRound(humanChoice, computerChoice));
        console.log(`Current Score -> You: ${humanScore}, Computer: ${computerScore}`);
        console.log("-----------------------------------");
    }

    // Display the final result
    console.log("Game Over!");
    if (humanScore > computerScore) {
        console.log(`You won the game! Final Score -> You: ${humanScore}, Computer: ${computerScore}`);
    } else if (computerScore > humanScore) {
        console.log(`Computer won the game! Final Score -> You: ${humanScore}, Computer: ${computerScore}`);
    } else {
        console.log(`It's a tie! Final Score -> You: ${humanScore}, Computer: ${computerScore}`);
    }
}

// Start the game
playGame(); */


humanScore = 0;
computerScore = 0;
let resulttext = "";

function getComputerChoice() {
  const x = Math.random();
  if (x < 0.33) {
    return "Rock";
  } else if (x < 0.66) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    resulttext = "Tie Game!!";
  } else if (humanChoice === "Rock" && computerChoice === "Paper") {
    resulttext = "You Lose! Paper beats Rock!";
    computerScore++;
  } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
    resulttext = "You Win! Rock beats Scissors!";
    humanScore++;
  } else if (humanChoice === "Paper" && computerChoice === "Rock") {
    resulttext = "You Win! Paper beats Rock!";
    humanScore++;
  } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
    resulttext = "You Lose! Scissors beats Paper!";
    computerScore++;
  } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
    resulttext = "You Lose! Rock beats Scissors!";
    computerScore++;
  } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
    resulttext = "You Win! Scissors beats Paper!";
    humanScore++;
  }
}

// Ensure JavaScript Runs After the DOM is Loaded
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("button");
  const resultContainer = document.querySelector("#result");

  // Function to handle score display
  const updateScores = () => {
    const container = document.querySelector("#score");

    // Clear existing scores before appending new ones
    container.innerHTML = "";

    const humanScoreElement = document.createElement("div");
    humanScoreElement.classList.add("score");
    humanScoreElement.style.fontSize = "50px";
    if (humanScore > computerScore) {
      humanScoreElement.style.color = "green";
    }
    humanScoreElement.textContent = "Human Score: " + humanScore;

    const computerScoreElement = document.createElement("div");
    computerScoreElement.classList.add("score");
    computerScoreElement.style.fontSize = "50px";
    if (computerScore > humanScore) {
      computerScoreElement.style.color = "green";
    }
    computerScoreElement.textContent = "Computer Score: " + computerScore;

    const result = document.createElement("div");
    result.classList.add("result");
    result.textContent = resulttext;

    // Append the scores
    container.appendChild(humanScoreElement);
    container.appendChild(computerScoreElement);
    resultContainer.innerHTML = "";
    resultContainer.appendChild(result);
  };
  // Attach event listeners for each button
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      playRound(button.id, getComputerChoice());
      updateScores(); // Update score display after each round
    });
  });
});

PlayGame();