//#1: Awesome Animals
var animals = ['Cat', 'Fish', 'Lemur', 'Komodo Dragon'];

for (var i = 0; i < animals.length; i++) {
    animals[i] = 'Awesome ' + animals[i];
}

console.log(animals)

//Comments for above code:
// // Create an array of animal names
// var animals = ['Cat', 'Fish', 'Lemur', 'Komodo Dragon'];

// // Loop through the array from index 0 to the last index
// // animals.length ensures the loop adapts if the array size changes
// for (var i = 0; i < animals.length; i++) {
//     // Update each element in the array by prefixing it with the word "Awesome"
//     // animals[i] refers to the current animal in the loop
//     animals[i] = 'Awesome ' + animals[i];
// }

// // Log the modified array to the console
// console.log(animals);



//#2: Random String Generator
console.log('_____Random String Generator_____');

var alphabet = "abcdefghijklmnopqrstuvwxyz";

var randomString = "";

while (randomString.length < 6) {
    var randomIndex = Math.floor(Math.random() * alphabet.length);
    var randomLetter = alphabet[randomIndex];
    randomString += randomLetter;
}

console.log(randomString)

//Comments for above code:
// // Print a heading to indicate this example generates a random string
// console.log('_____Random String Generator_____');

// // String containing all lowercase letters of the alphabet
// var alphabet = "abcdefghijklmnopqrstuvwxyz";

// // Start with an empty string that will be built character by character
// var randomString = "";

// // Keep looping until the string reaches a length of 6 characters
// while (randomString.length < 6) {
//     // Generate a random index based on the alphabet length
//     var randomIndex = Math.floor(Math.random() * alphabet.length);

//     // Get the character at the random index
//     var randomLetter = alphabet[randomIndex];

//     // Append the random letter to the end of the string
//     randomString += randomLetter;
// }

// // Output the final random 6-character string
// console.log(randomString);



//#3: h4ck3r sp34k 
var input = "javascript is awesome";
var output = "";

for (var i = 0; i < input.length; i++) {
    var letter = input[i];

    if (letter === 'a' ) {
        output += '4';
    } else if (letter === 'e') {
        output += '3';
    } else if (letter === 'i') {
        output += '1';
    } else if (letter === 'o') {
        output += '0';
    } else {
        output += letter;
    }
}

console.log(output);

//Comments for above code:
// // Input string that will be converted to "hacker speak"
// var input = "javascript is awesome";

// // Empty string that will store the converted result
// var output = "";

// // Loop through each character in the input string
// for (var i = 0; i < input.length; i++) {

//     // Get the current character at position i
//     var letter = input[i];

//     // Replace specific lowercase letters with numbers
//     if (letter === 'a') {
//         output += '4';          // a → 4
//     } else if (letter === 'e') {
//         output += '3';          // e → 3
//     } else if (letter === 'i') {
//         output += '1';          // i → 1
//     } else if (letter === 'o') {
//         output += '0';          // o → 0
//     } else {
//         // Keep the original character if no replacement is needed
//         output += letter;
//     }
// }

// // Print the final converted string
// console.log(output);