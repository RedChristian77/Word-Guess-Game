//Array for list of Words to Guess
const words = ["mindflayer","goblin","minotaur","kobold","terrasque","harpie","drow","orc","dwarves","bandit","wolf","slime","dragon","changling","skeleton","zombie","deva","basilisk","banshee","owlbear","elemental","lich","hydra","golem"];
//Word to guess in array, each index being a letter to guess
let wordToGuess = ["k","o","b","o","l","d"];
let blankword = ["_","_","_","_","_","_"];
let wincounter = 0;
let livesremaining = 4;
let stringBlanks = "";
let lettersGuessed = [];
let notgameover = false ;
let stringOfGuesses = "";
let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

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
    //After testing whether or not its a already used key
    else if(alphabet.indexOf(userschoice) !== -1) {
        //Adds choice to list listed items, as well as showing user the letters already chosen
        lettersGuessed.push(userschoice);
        stringOfGuesses = stringOfGuesses + userschoice.toUpperCase() + " ";
        document.getElementById("lettersGuessed").innerHTML = stringOfGuesses;
        
        //goes thru and replaces the blanks with letters
        if(wordToGuess.indexOf(userschoice) !== -1){
            for(k = 0; k < wordToGuess.length; k++){
                if(wordToGuess[k] === userschoice){
                    blankword[k] = userschoice;
                }
            }

            //clears stringBlanks, replaces each part with words completed
            stringBlanks="";
            blankword.forEach(filler => {
                stringBlanks = stringBlanks + " " + filler + " ";
            })
            document.getElementById("wordToGuess").innerHTML = stringBlanks;

            //Tests to see if User Won
            let wintest = 0;
            blankword.forEach(element => {      
                if(element === "_"){
                    wintest++;
                }      
            });
            if(wintest === 0){
                notgameover = false;
                wincounter++;
                document.getElementById("lettersGuessed").innerHTML = "You Win"

            }
        }

        //if letter was not in word
        else{
            livesremaining = livesremaining -1;
            document.getElementById("livesremainingID").innerHTML = livesremaining;
        }

        if(livesremaining === 0)
        {
            notgameover= false;
            document.getElementById("wordToGuess").innerHTML = "Game Over, Press Any Key";
        }

    }
    
    
}

//if Game is over or hasnt started yet
else{
    //Set values for everything
    livesremaining = 4;
    notgameover = true;
    livesremaining = 7;
    stringBlanks = "";
    lettersGuessed = [];
    stringOfGuesses = "";
    wordToGuess= [];
    blankword = [];

    //Picks Random Word, creates Blanks array and word to guess Array
    let rdmIndex = Math.floor(Math.random()*words.length);
    for(i=0;i < words[rdmIndex].length; i++){
        wordToGuess.push(words[rdmIndex].charAt(i));
        blankword.push("_");
        stringBlanks = stringBlanks + "_" + " ";
    }

    document.getElementById("livesremainingID").innerHTML = livesremaining;
    document.getElementById("lettersGuessed").innerHTML = stringOfGuesses;
    document.getElementById("wordToGuess").innerHTML = stringBlanks;
}
}