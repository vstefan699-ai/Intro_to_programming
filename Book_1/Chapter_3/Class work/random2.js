console.log('\n', "-------------------Generating a random Array------------------------")
var randomWords = ["Explosion", "Cave", "Batman", "Robin", "Batmobile", "Joker", "Alfred"];
var randomIndex = Math.floor(Math.random() * 4);
console.log("random word:", randomWords[randomIndex]);

// // Print a blank line and a heading to separate output in the console
// console.log('\n', "-------------------Generating a random Array------------------------");

// // Create an array of possible words to choose from
// var randomWords = ["Explosion", "Cave", "Batman", "Robin", "Batmobile", "Joker", "Alfred"];

// // Generate a random index between 0 and 3
// // Math.random() gives a number between 0 (inclusive) and 1 (exclusive)
// // Multiplying by 4 limits the range to the first 4 items only
// // Math.floor() rounds down to the nearest whole number
// var randomIndex = Math.floor(Math.random() * 4);

// // Use the random index to select and print a word from the array
// console.log("random word:", randomWords[randomIndex]);


console.log('\n', "-------------------Generating a random Array------------------------")
var randomWords = ["Explosion", "Cave", "Batman", "Robin", "Batmobile", "Joker", "Alfred"];
var randomIndex = Math.floor(Math.random() * randomWords.length);
console.log("random word:", randomWords[randomIndex]);

// // Print the heading again for the improved version
// console.log('\n', "-------------------Generating a random Array------------------------");

// // Recreate the same array of words
// var randomWords = ["Explosion", "Cave", "Batman", "Robin", "Batmobile", "Joker", "Alfred"];

// // Generate a random index using the FULL array length
// // This ensures every word in the array has an equal chance of being selected
// var randomIndex = Math.floor(Math.random() * randomWords.length);

// // Use the random index to select and print a random word
// console.log("random word:", randomWords[randomIndex]);


console.log('\n', "-------------Random BodyPart Generator------------------")

var randomBodyParts = ["Face", "Nose", "Hair", "Leg", "Arm", "Shoulder"];
var randomIndex1 = Math.floor(Math.random() * randomBodyParts.length);
console.log("random word:", randomBodyParts[randomIndex1]);

// // Print a blank line and a heading to separate this output in the console
// console.log('\n', "-------------Random BodyPart Generator------------------");

// // Create an array containing different body parts
// var randomBodyParts = ["Face", "Nose", "Hair", "Leg", "Arm", "Shoulder"];

// // Generate a random index based on the array length
// // This ensures every body part has an equal chance of being selected
// var randomIndex1 = Math.floor(Math.random() * randomBodyParts.length);

// // Use the random index to select and print a random body part
// console.log("random word:", randomBodyParts[randomIndex1]);


console.log('\n', "-------------Random Adjectives Generator------------------")

var randomAdjectives = ["Smelly", "Boring", "Stupid"];
var randomIndex2 = Math.floor(Math.random() * randomAdjectives.length);
console.log("random word:", randomAdjectives[randomIndex2])

// // Print a blank line and a heading to separate this output in the console
// console.log('\n', "-------------Random Adjectives Generator------------------");

// // Create an array containing different adjectives
// var randomAdjectives = ["Smelly", "Boring", "Stupid"];

// // Generate a random index based on the array length
// // Ensures each adjective has an equal chance of being selected
// var randomIndex2 = Math.floor(Math.random() * randomAdjectives.length);

// // Use the random index to select and print a random adjective
// console.log("random word:", randomAdjectives[randomIndex2]);


console.log('\n', "-------------Random Animal Generator------------------")

var randomAnimal = ["Bat", "Pig", "Sloth", "Monkey", "Rat", "Dog"];
var randomIndex3 = Math.floor(Math.random() * randomAnimal.length);
console.log("random word:", randomAnimal[randomIndex3])

// // Print a blank line and a heading to separate this output in the console
// console.log('\n', "-------------Random Animal Generator------------------");

// // Create an array containing different animal names
// var randomAnimal = ["Bat", "Pig", "Sloth", "Monkey", "Rat", "Dog"];

// // Generate a random index using the length of the array
// // This ensures every animal has an equal probability of being selected
// var randomIndex3 = Math.floor(Math.random() * randomAnimal.length);

// // Use the random index to select and print a random animal
// console.log("random word:", randomAnimal[randomIndex3]);


console.log('\n', "-------------Random Insult Generator------------------")

var randomBodyParts = ["Face", "Nose", "Hair"];
var randomAdjectives = ["Smelly", "Boring", "Stupid"];
var randomWords = ["Fly", "Pig", "Stick", "Monkey", "Rat", "dog"];

// Pick a random body part from the randomBodyParts array:
var randomBodyPart = randomBodyParts[Math.floor(Math.random() * 3)];

// Pick a random adjective from the randomAdjectives array: 
var randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)];

// Pick a random word from the randomWords array:
var randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];

// Join all the random strings into a sentence:
var randomInsult = "Your " + randomBodyPart + " is like a " + randomAdjective + " " + randomWord + "!!!";

console.log(randomInsult);

// // Print a blank line and a heading for the random insult generator
// console.log('\n', "-------------Random Insult Generator------------------");

// // Arrays containing the different parts used to build the insult
// var randomBodyParts = ["Face", "Nose", "Hair"];
// var randomAdjectives = ["Smelly", "Boring", "Stupid"];
// var randomWords = ["Fly", "Pig", "Stick", "Monkey", "Rat", "dog"];

// // Pick a random body part from the randomBodyParts array
// // Math.random() * 3 limits selection to the 3 items in the array
// // Math.floor() converts it to a valid array index
// var randomBodyPart = randomBodyParts[Math.floor(Math.random() * 3)];

// // Pick a random adjective from the randomAdjectives array
// // Same logic: random index between 0 and 2
// var randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)];

// // Pick a random word from the randomWords array
// // Uses the array length so every word can be selected
// var randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];

// // Join all the random values into a single insult sentence
// var randomInsult =
//   "Your " + randomBodyPart + " is like a " + randomAdjective + " " + randomWord + "!!!";

// // Output the final random insult to the console
// console.log(randomInsult);
