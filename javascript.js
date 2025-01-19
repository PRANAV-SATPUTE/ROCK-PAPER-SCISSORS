console.log("Hello! World. ");
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
playGame();