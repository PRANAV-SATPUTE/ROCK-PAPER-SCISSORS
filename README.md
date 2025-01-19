# ROCK-PAPER-SCISSORS

Write the logic to get the computer choice
    1. Create a new function named getComputerChoice.
    2. Write the code so that getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”.
Write the logic to get the human choice
    1. Create a new function named getHumanChoice.
    2. Write the code so that getHumanChoice will return one of the valid choices depending on what the user inputs.
Declare the players score variables
    1. Create two new variables named humanScore and computerScore in the global scope.
    2.Initialize those variables with the value of 0.
Write the logic to play a single round
    1. Create a new function named playRound.
    2. Define two parameters for playRound: humanChoice and computerChoice. Use these two parameters to take the human and computer choices as arguments.
    3. Make your function’s humanChoice parameter case-insensitive so that players can input “rock”, “ROCK”, “RocK”, or other variations.
    4. Write the code for your playRound function to console.log a string value representing the round winner, such as: “You lose! Paper beats Rock”.
    5. Increment the humanScore or computerScore variable based on the round winner.
Write the logic to play the entire game
    1. Create a new function named playGame.
    2. Move your playRound function and score variables so that they’re declared inside of the new playGame function
    3. Play 5 rounds by calling playRound 5 times.
