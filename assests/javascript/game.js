//Array for list of Words to Guess
const words = [];
//Word to guess in array, each index being a letter to guess
const wordToGuess = [];
const wincounter = 0;
const livesremaining = 0;


// Creating the blanks for the word to guess in a Array for each letter so it can be changed later
// to change with each guess.

function createBlanks(primaryword){
    let blankword = [];
    for(i=0; i < primaryword.length(); i++) {
        blankword = blankword.push("_");
    }
    return blankword;
}

// function create array
function correctArray(wordToGuess){
    let correctword = [];
    for(i=0; i < primaryword.length(); i++) {
        correctword = correctword.push(primaryword.charAt(i));
    }
}

//Letter guessing will be what the user guesses, and the correctLetter will be used in the forEach loop testing
//each point in the wordtoGuess array, will replace wordToGuess in array with correct letter, and set failtest
//up one point. If failtest is greater then 0, means at least one spot on the Array was the correct letter.
function checking(letterguessing, correctword){
    const failtest = 0;
    for(k=0; k < correctword; k++ ){
        if(letterguessing === correctword[k]){
            wordToGuess[k] = correctword[k]
            failtest++;
        }
    }
    return failtest;
}