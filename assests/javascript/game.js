//Array for list of Words to Guess
const words = ["mindflayer","goblin","minotaur","kobold","terrasque","harpie","drow","orc","dwarves","bandit","wolf","slime","dragon","changling","skeleton","zombie","deva","basilisk","banshee","owlbear","elemental","lich","hydra","golem"];
//Word to guess in array, each index being a letter to guess
let wordToGuess = [];
let wincounter = 0;
let livesremaining = 0;
let lettersGuessed = [];
let notgameover = true ;
let stringOfGuesses = "";
let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","r","s","t","u","v","w","x","y","z"];

const idForGuessing = document.getElementById("wordtoguess");


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

// start of when the user presses a key ------------------
 document.onkeyup = function(event){
     let userschoice = event.key.toLowerCase();
     console.log(userschoice);

// test if the games over
if(notgameover){
    //  test to see if the letter has been guessed yet
    if(lettersGuessed.indexOf(userschoice) !== -1) {
        //display that they already chose it
    }
    else if(userschoice === "backspace"){

    }
    //After testing whether or not its a already used key
    else if(alphabet.indexOf(userschoice) !== -1) {
        lettersGuessed.push(userschoice);
        stringOfGuesses = stringOfGuesses + userschoice.toUpperCase() + " ";
        document.getElementById("lettersGuessed").innerHTML = stringOfGuesses;
    }
    
    // letters.indexOf(usersguesslower)) === -1 WILL TEST IF ITS IN THE ARRAY....Im a moron, -1 is not in the array
}
else{

}
}