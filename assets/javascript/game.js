

// Creates an array that lists out all of the alphabet.
var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// Creating variables to hold the number of wins, losses, and tries left. They start at 0.
var wins = 0;
var losses = 0;
var remaining = 9;
var guesses = [];

// Create variables that hold references to the places in the HTML where we want to display things.

var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var numLeft = document.getElementById("num-left");
var soFar = document.getElementById("so-far");

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {


    // Determines which key was pressed.
    var userGuess = event.key.toLowerCase();

    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    console.log(userGuess);
    console.log("-----------");
    console.log(computerGuess);
    console.log("-----------");



    // Reworked our code from last step to use "else if" instead of lots of if statements.

    // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number

    if (remaining > 0) {
        if (userGuess === computerGuess) {
            wins++;
            remaining--;
            guesses.push(" " + userGuess);
        } 
        else {
            losses++;
            remaining--;
            guesses.push(" " + userGuess);
        }
    }
    else {
        remaining = "GAME OVER";
    }

    // Display the user and computer guesses, and wins/losses/ties.
    
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    numLeft.textContent = "Guesses left: " + remaining;
    soFar.textContent = "Your guesses so far: " + guesses;
    };

