//Option 2
//Insult Generator using the + operator
console.log("\n","$$$___Insults That Are Random!!!___$$$");

var generateRandomInsult = function () {
var humanBodyParts = ["face", "hairline", "voice", "legs", "posture", "eye"];
var adjectives = ["confusing", "tragic", "questionable", "embarrassing", "painful"];
var animals = ["dwarf goat", "little pigeon", "undergrown sloth", "drunk hyena", "sleepy donkey", "slimmy fish", "buff kangaroo"];
var animalBodyParts = ["knees", "teeth", "tail", "ears", "nostrils", "skin"];

var bodyPart = humanBodyParts[Math.floor(Math.random() * humanBodyParts.length)];
var adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
var animal = animals[Math.floor(Math.random() * animals.length)];
var animalPart = animalBodyParts[Math.floor(Math.random() * animalBodyParts.length)];

return 'Your ' + bodyPart + ' is like a ' + adjective + ' ' + animal + "'s " + animalPart
};

console.log(generateRandomInsult());









//Option 3
//Insult Generator creating the array and joins using " " 
console.log("\n","$$$___Insults That Are Random!!!___$$$");

function generateRandomInsult() {
var humanBodyParts = ["face", "hairline", "voice", "legs", "posture", "eye"];
var adjectives = ["confusing", "tragic", "questionable", "embarrassing", "painful"];
var animals = ["dwarf goat", "little pigeon", "undergrown sloth", "drunk hyena", "sleepy donkey", "slimmy fish", "buff kangaroo"];
var animalBodyParts = ["knees", "teeth", "tail", "ears", "nostrils", "skin"];

return "Your " + 
          humanBodyParts[Math.floor(Math.random() * humanBodyParts.length)] + 
          " is like a " + 
          adjectives[Math.floor(Math.random() * adjectives.length)] + 
          " " + 
          animals[Math.floor(Math.random() * animals.length)] + 
          "'s " +
          animalBodyParts[Math.floor(Math.random() * animalBodyParts.length)] +
          "!!!";
};

console.log(generateRandomInsult());





// //#4: Joining Numbers
// var numbers = [3, 2, 1];

// var joiningNumbers = [numbers[0], "is bigger than", numbers[1], "is bigger than", numbers[2]].join(" ");

// console.log(joiningNumbers);

// //COMMENTS FOR ABOVE CODE:
// // // Create an array of numbers in descending order
// // var numbers = [3, 2, 1];

// // // Build a new array that mixes numbers and strings
// // // numbers[0], numbers[1], and numbers[2] access specific elements by index
// // // join(" ") combines everything into a single string with spaces in between
// // var joiningNumbers = [
// //   numbers[0], "is bigger than",
// //   numbers[1], "is bigger than",
// //   numbers[2]
// // ].join(" ");

// // // Output the final sentence to the console
// // console.log(joiningNumbers);