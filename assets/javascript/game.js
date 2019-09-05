

// Creates an array that lists out all of the alphabet.
var computerChoices = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z];

for (var i = 0; i < computerChoices.length; i++) {
    computerChoices[i] = str(computerChoices[i]);
}

// Creating variables to hold the number of wins, losses, and tries left. They start at 0.
var wins = 0;
var losses = 0;
var remaining = 9;
var guesses = [];

// Create variables that hold references to the places in the HTML where we want to display things.
var directionsText = document.getElementById("directions-text");
// var userChoiceText = document.getElementById("userchoice-text");
// var computerChoiceText = document.getElementById("computerchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var numLeft = document.getElementById("num-left");
var soFar = document.getElementById("so-far");

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

    // Determines which key was pressed.
    var userGuess = event.key;

    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    // Reworked our code from last step to use "else if" instead of lots of if statements.

    // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number
    if (userGuess === computerGuess) {
        win++;
        remaining--;
        guesses.push(userGuess)
    } else {
        losses++;
        remaining--;
        guesses.push(userGuess)
    }

    // Hide the directions
    directionsText.textContent = "";

    // Display the user and computer guesses, and wins/losses/ties.
    // userChoiceText.textContent = "You chose: " + userGuess;
    // computerChoiceText.textContent = "The computer chose: " + computerGuess;
    winsText.textContent = wins;
    lossesText.textContent = losses;
    numLeft.textContent = remaining;
    soFar.textContent = guesses;
    }
};
