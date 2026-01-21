// Using the (!) NOT operator:
// Inverts the boolean value (true becomes false, false becomes true)
var isWeekend = true;
var needToShowerToday = !isWeekend;
needToShowerToday;

// Joining strings together (concatenation):
// Combines two strings into one
var greeting = "Hello";
var myName = "Nick";
greeting + myName;

// Finding the length of the string:
// Returns the number of characters in the string
"Helloworld".length;

// Getting a single character from a string:
// Strings are zero-indexed, so index 1 is the second character
var myName = "Nick";
myName[1];

// Numbers and operators:
// JavaScript follows normal math order of operations
1234 + 57 * 3 - 31 / 4;

// Post / Pre incrementing:
// Increases the value by 1
var highFives = 0;
++highFives;

// Pre decrementing:
// Decreases the value by 1
var highFives = 5;
--highFives;

// Boolean AND operator (&&):
// Returns true only if both values are true
var isRaining = true;
var isNotRaining = false;
isRaining && isNotRaining;

// OR operator (||):
// Returns true if at least one value is true
var hasApple = true;
var hasBanana = false;
hasApple || hasBanana;

// Numbers with Boolean comparison:
// Compares two numbers and returns a boolean
var height = 65;
var heightRestriction = 60;
height < heightRestriction;

// Converting a string to upper case:
// Changes all letters to capital letters
"Hello there, how are you doing?".toUpperCase();

// Converting a string to lower case:
// Changes all letters to lowercase
"hELlo THERE, hOW ARE yOu doINg?".toLowerCase();

// Strict equality (===):
// Checks both value AND type
var mySecretNumber = 5;
var chicoGuess = 3;
mySecretNumber === chicoGuess;

// Loose equality (==):
// Converts types before comparing (not recommended)
var stringNumber = "5";
var actualNumber = 5;
stringNumber == actualNumber;

// Slice method:
// Extracts a portion of a string without modifying the original

// Example 1:
// Takes characters from index 0 up to (but not including) index 4
"This is a long string".slice(0, 4);

// Example 2:
// Takes characters from index 7 up to (but not including) index 12
"Hello, World!".slice(7, 12);
