//#1: Scorekeeper
const scores = {
    John: 0,
    David: 0,
    Simon: 0
};

scores.John = scores.John + 4;
scores.David = scores.David + 6;
scores.Simon = scores.Simon + 3;

console.log(scores);

//Comments for above code:
// // Create an object to store player names and their scores
// const scores = {
//     John: 0,
//     David: 0,
//     Simon: 0
// };

// // Update each player's score by adding points
// // Current score is read, increased, and written back
// scores.John = scores.John + 4;
// scores.David = scores.David + 6;
// scores.Simon = scores.Simon + 3;

// // Log the updated scores object to the console
// console.log(scores);



//#2: Digging into objects and Arrays
var myCrazyObject = {
  "name": "A ridiculous object",
  "some array": [7, 9, { purpose: "confusion", number: 123 }, 3.3],
  "random animal": "Banana Shark"
}

console.log(myCrazyObject["some array"][2].number)

//Comments for above code:
// // Create an object with unusual (non-standard) property names
// var myCrazyObject = {
//   "name": "A ridiculous object",
//   "some array": [
//     7,
//     9,
//     { purpose: "confusion", number: 123 }, // object nested inside the array
//     3.3
//   ],
//   "random animal": "Banana Shark"
// };

// // Accessing a deeply nested value step by step:
// console.log(myCrazyObject["some array"][2].number);