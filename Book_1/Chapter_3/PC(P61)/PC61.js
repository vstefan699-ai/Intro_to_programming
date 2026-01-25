//Insult Generator using the + operator
console.log("\n","$$$___Insults That Are Random!!!___$$$");

var humanBodyParts = ["face", "hairline", "voice", "legs", "posture", "eye"];
var adjectives = ["confusing", "tragic", "questionable", "embarrassing", "painful"];
var animals = ["dwarf goat", "little pigeon", "undergrown sloth", "drunk hyena", "sleepy donkey", "slimmy fish", "buff kangaroo"];
var animalBodyParts = ["knees", "teeth", "tail", "ears", "nostrils", "skin"];

var bodyPart = humanBodyParts[Math.floor(Math.random() * humanBodyParts.length)];
var adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
var animal = animals[Math.floor(Math.random() * animals.length)];
var animalPart = animalBodyParts[Math.floor(Math.random() * animalBodyParts.length)];

var insult = "Your " + bodyPart + " is more " + adjective + " than a " + animal + "'s " + animalPart + ".";

console.log(insult);

// COMMENTS FOR ABOVE CODE:
// // Print a blank line and a title for the random insult generator
// console.log("\n", "$$$___Insults That Are Random!!!___$$$");

// // Arrays containing different categories of words
// var humanBodyParts = ["face", "hairline", "voice", "legs", "posture", "eye"];
// var adjectives = ["confusing", "tragic", "questionable", "embarrassing", "painful"];
// var animals = [
//   "dwarf goat",
//   "little pigeon",
//   "undergrown sloth",
//   "drunk hyena",
//   "sleepy donkey",
//   "slimmy fish",
//   "buff kangaroo"
// ];
// var animalBodyParts = ["knees", "teeth", "tail", "ears", "nostrils", "skin"];

// // Select one random item from each array
// // Math.random() generates a number between 0 and 1
// // Multiplying by the array length ensures a valid index range
// // Math.floor() converts it into a whole number index
// var bodyPart = humanBodyParts[Math.floor(Math.random() * humanBodyParts.length)];
// var adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
// var animal = animals[Math.floor(Math.random() * animals.length)];
// var animalPart = animalBodyParts[Math.floor(Math.random() * animalBodyParts.length)];

// // Build the final insult sentence by combining all the random parts
// var insult =
//   "Your " + bodyPart +
//   " is more " + adjective +
//   " than a " + animal +
//   "'s " + animalPart + ".";

// // Output the generated insult to the console
// console.log(insult);



//Insult Generator creating the array and joins using " " 
console.log("\n","$$$___Insults That Are Random!!!___$$$");

var humanBodyParts = ["face", "hairline", "voice", "legs", "posture", "eye"];
var adjectives = ["confusing", "tragic", "questionable", "embarrassing", "painful"];
var animals = ["dwarf goat", "little pigeon", "undergrown sloth", "drunk hyena", "sleepy donkey", "slimmy fish", "buff kangaroo"];
var animalBodyParts = ["knees", "teeth", "tail", "ears", "nostrils", "skin"];

var bodyPart = humanBodyParts[Math.floor(Math.random() * humanBodyParts.length)];
var adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
var animal = animals[Math.floor(Math.random() * animals.length)];
var animalPart = animalBodyParts[Math.floor(Math.random() * animalBodyParts.length)];

var insult = ["Your ", bodyPart, " is more " , adjective, " than a ", animal, "'s ", animalPart, "."].join("");

console.log(insult);

//COMMENTS FOR ABOVE CODE:
// // Print a blank line and a title for the random insult generator
// console.log("\n", "$$$___Insults That Are Random!!!___$$$");

// // Arrays holding words used to build the insult
// var humanBodyParts = ["face", "hairline", "voice", "legs", "posture", "eye"];
// var adjectives = ["confusing", "tragic", "questionable", "embarrassing", "painful"];
// var animals = [
//   "dwarf goat",
//   "little pigeon",
//   "undergrown sloth",
//   "drunk hyena",
//   "sleepy donkey",
//   "slimmy fish",
//   "buff kangaroo"
// ];
// var animalBodyParts = ["knees", "teeth", "tail", "ears", "nostrils", "skin"];

// // Randomly select one item from each array
// // Math.random() creates a value between 0 and 1
// // Multiplying by array.length ensures a valid index range
// // Math.floor() converts it into an integer index
// var bodyPart = humanBodyParts[Math.floor(Math.random() * humanBodyParts.length)];
// var adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
// var animal = animals[Math.floor(Math.random() * animals.length)];
// var animalPart = animalBodyParts[Math.floor(Math.random() * animalBodyParts.length)];

// // Build the insult using an array and join()
// // join("") merges all elements into one string with no separator
// var insult = [
//   "Your ", bodyPart,
//   " is more ", adjective,
//   " than a ", animal,
//   "'s ", animalPart,
//   "."
// ].join("");

// // Output the final random insult
// console.log(insult);



//#3: Use + or join?
// I prefer the one where you create the array and join it with " " 
// It looks better rounded off



//#4: Joining Numbers
var numbers = [3, 2, 1];

var joiningNumbers = [numbers[0], "is bigger than", numbers[1], "is bigger than", numbers[2]].join(" ");

console.log(joiningNumbers);

//COMMENTS FOR ABOVE CODE:
// // Create an array of numbers in descending order
// var numbers = [3, 2, 1];

// // Build a new array that mixes numbers and strings
// // numbers[0], numbers[1], and numbers[2] access specific elements by index
// // join(" ") combines everything into a single string with spaces in between
// var joiningNumbers = [
//   numbers[0], "is bigger than",
//   numbers[1], "is bigger than",
//   numbers[2]
// ].join(" ");

// // Output the final sentence to the console
// console.log(joiningNumbers);