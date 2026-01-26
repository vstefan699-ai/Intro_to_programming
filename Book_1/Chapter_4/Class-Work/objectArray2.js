//Bracket.notation
console.log('_____Bracket.notation_____');
const SAsport = [
    {
        rugby: 'Springboks',
        players: '15',
        captain: 'Siya Kolisi'
    },
    {
        cricket: 'Proteas',
        players: '11',
        captain: 'Temba Bavuma'
    }
];

console.log('Sport Team:', SAsport[0]);

console.log('Players:', SAsport[1].players);

console.log('The', SAsport[0].rugby, 'has', SAsport[0].players, 'players');

// Comments for above code:
// // Print a heading to indicate this example is about bracket notation
// console.log('_____Bracket.notation_____');

// // Create an array of objects representing South African sports teams
// const SAsport = [
//     {
//         rugby: 'Springboks',
//         players: '15',
//         captain: 'Siya Kolisi'
//     },
//     {
//         cricket: 'Proteas',
//         players: '11',
//         captain: 'Temba Bavuma'
//     }
// ];

// // Access the first object in the array using bracket notation
// // Index 0 refers to the rugby team object
// console.log('Sport Team:', SAsport[0]);

// // Access a specific property (players) from the second object in the array
// // Index 1 refers to the cricket team object
// console.log('Players:', SAsport[1].players);

// // Access multiple properties from the first object to build a sentence
// console.log(
//   'The',
//   SAsport[0].rugby,
//   'has',
//   SAsport[0].players,
//   'players'
// );



//Dot.notation
console.log('\n','_____Dot.notation_____')

var A = {
    name: "Fred",
    age: 15,
    luckyNumbers: [9, 47]
};

var B = {
    name: "Pete",
    age: 16,
    luckyNumbers: [5, 11]
};

var C = {
    name: "Nate",
    age: 15,
    luckyNumbers: [13, 21]
};

var D = {
    name: "AJ",
    age: 23,
    luckyNumbers: [6, 33]
};

//Create an Array of Friends:
//The friends array now holds three elements, each of which is an object representing a friend.
var friends = [A, B, C, D];

// Accessing Objects in the Array:
console.log("Friend-Object:", friends[3]); 

//Accessing Properties within an Object:
console.log("Friend-Age:", friends[0].age); 

// Accessing Nested Arrays within Objects:
console.log("Known as", friends[1].name, "and their lucky number is", friends[0].luckyNumbers[1]); 

// Comments for above code:
// // Print a blank line and a heading to indicate dot notation examples
// console.log('\n', '_____Dot.notation_____');

// // Create objects representing different people
// var A = {
//     name: "Fred",
//     age: 15,
//     luckyNumbers: [9, 47]
// };

// var B = {
//     name: "Pete",
//     age: 16,
//     luckyNumbers: [5, 11]
// };

// var C = {
//     name: "Nate",
//     age: 15,
//     luckyNumbers: [13, 21]
// };

// var D = {
//     name: "AJ",
//     age: 23,
//     luckyNumbers: [6, 33]
// };

// // Create an array containing all the friend objects
// // Each element in the array is an object
// var friends = [A, B, C, D];

// // Accessing objects in the array:
// // Index 3 refers to the fourth object (AJ)
// console.log("Friend-Object:", friends[3]);

// // Accessing properties within an object using dot notation:
// // Index 0 refers to the first friend (Fred)
// console.log("Friend-Age:", friends[0].age);

// // Accessing nested arrays inside an object:
// // friends[1].name gets the name "Pete"
// // friends[0].luckyNumbers[1] gets the second lucky number of Fred
// console.log(
//   "Known as",
//   friends[1].name,
//   "and their lucky number is",
//   friends[0].luckyNumbers[1]
// );