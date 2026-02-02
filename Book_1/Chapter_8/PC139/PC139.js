// List of possible words
var words = [
    "isuzu",
    "toyota",
    "ford",
    "bmw",
    "mercedes",
    "fiat",
    "opel",
    "suzuki",
    "tesla",
    "lamborgini"
];

// Pick a random word
var pickWord = function () {
    return words[Math.floor(Math.random() * words.length)];
};

// Set up the answer array with underscores
var setupAnswerArray = function (word) {
    var answerArray = [];
    for (var i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    }
    return answerArray;
};

// Show the player their current progress
var showPlayerProgress = function (answerArray) {
    alert(answerArray.join(" "));
};

// Get a guess from the player
var getGuess = function () {
    return prompt("Guess a letter, or click Cancel to stop playing.");
};

// Update the game state and return number of correct guesses
var updateGameState = function (guess, word, answerArray) {
    var correctGuesses = 0;

    for (var i = 0; i < word.length; i++) {
        if (word[i] === guess && answerArray[i] === "_") {
            answerArray[i] = guess;
            correctGuesses++;
        }
    }

    return correctGuesses;
};

// Show the final answer and congratulate the player
var showAnswerAndCongratulatePlayer = function (answerArray) {
    alert(answerArray.join(" "));
    alert("Good job! You guessed the word!");
};

// ---- GAME LOGIC ----
var word = pickWord();
var answerArray = setupAnswerArray(word);
var remainingLetters = word.length;

while (remainingLetters > 0) {
    showPlayerProgress(answerArray);

    var guess = getGuess();
    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert("Please enter a single letter.");
    } else {
        guess = guess.toLowerCase();
        var correctGuesses = updateGameState(guess, word, answerArray);
        remainingLetters -= correctGuesses;
    }
}

showAnswerAndCongratulatePlayer(answerArray);
