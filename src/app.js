/* We'll create a basic "Number Guessing Game" where the computer randomly selects a number, and the player needs to guess it.
Number Guessing Game:
Features:
The computer randomly selects a number between a specified range. 
    let randomNumber = (Math.random())*10;
The player has a limited number of attempts to guess the correct number.
    variable -> attempts = 3
Provide feedback on whether the guessed number is too high, too low, or correct.
    conditionnal statement, condition that checks if number by player and random number > < or ===.
Display the number of attempts remaining.
    If number isn't correct, attempts-- and dipslay it to player
End the game when the player correctly guesses the number or runs out of attempts.
    If the player guesses the correct number -> end the game
    Or if attempts===0 -> end the game
Display a win/lose message at the end.
Steps to Implement:
Initialize the Game:
Generate a random number within a specified range.
Display Initial State:
Display a message prompting the player to guess a number.
Display the number of attempts remaining.
Take Player Input:
Accept a number from the player.
Check and Update:
Check if the guessed number is too high, too low, or correct.
Update the number of attempts remaining.
Provide Feedback:
Inform the player if the guessed number is too high, too low, or correct.
Repeat:
Repeat steps 3-5 until the player correctly guesses the number or runs out of attempts.
End the Game:
Display a win/lose message based on the outcome.
Additional Challenges:
Implement input validation to ensure the player enters a valid number.
Allow the player to choose the range of numbers at the beginning of the game.
Add a scoring system based on the number of attempts taken.
This simpler project should still give you a good opportunity to practice arrays, objects, conditionals, and loops. Feel free to modify or expand upon it as you see fit! */

let computer = Math.round((Math.random())*10);
let guessedNumber = null;
let attempts = 3;
let isWinner = false;
let results = document.getElementById('results');
console.log(computer);

let guessInput = document.getElementById('guessedNumber');
let submitButton = document.getElementById('submit');
let restartButton = document.createElement("button"); 

submitButton.addEventListener('click',function (){
    guessedNumber = guessInput.value;
    
    if(attempts > 1){
        if(guessedNumber>computer){
            results.innerHTML = 'Too high';
        } else if(guessedNumber<computer){
            results.innerHTML = 'Too low';
        } else {
            console.log("That is correct!");
            gameResults(true);
        }
    } else if(attempts === 1){
        if(Number(guessedNumber) === computer){
            console.log("That is correct!");
            gameResults(true);
        } else{
            console.log("You lost.");
            gameResults(false);
        }
    }
    guessInput.value = "";
    attempts--;
})

// if guessed number equals computer
// get rid of the input field
// print to the screen "you won"
// display a button to restart the game and reinitialize attempts and guessed number, redisplay the input field, delete the button

const gameResults = (isWinner) => {
    if(isWinner){
        console.log('You won!');
        results.innerHTML = 'You won!';
    } else {
        console.log('You lost!');
        results.innerHTML = 'You lost!';
    }
    endOfGameScreen(isWinner);
}
 let body = document.getElementById("body");
 console.log(typeof body, body);

const endOfGameScreen = (isWinner) => {
    guessInput.style.display="none";
    submitButton.style.display="none";
    restartButton.style.display="block";
    restartButton.innerHTML = "Restart the game";
    restartButton.setAttribute('onclick','restartTheGame()');
    body.appendChild(restartButton);
}

const restartTheGame = () => {
    console.log('restart');
    guessInput.style.display="inline-block";
    submitButton.style.display="inline-block";
    restartButton.style.display="none";
    clearResults();
}

const clearResults = () => {
    results.innerHTML="Guess a number";
}

modules.exports = guessingGame;
//For next time : styling, check if it is a number, let the player choose the range of the game and the number of attempts, and get a different score based on that, refactor to use a loop