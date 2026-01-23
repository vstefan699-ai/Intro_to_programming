var mixedDataTypes = ['Boelie' , [2 , 4 , 6 , 8 , 10] , 'Max' , [1 , 3 , 5 , 7 , 9] , 'Roxy'];
console.log('Data type value:' , mixedDataTypes[1][3]);
console.log('Data type value:' , mixedDataTypes[2]);

// // Create an array that contains mixed data types:
// // strings and nested arrays of numbers
// var mixedDataTypes = [
//   'Boelie',
//   [2, 4, 6, 8, 10],
//   'Max',
//   [1, 3, 5, 7, 9],
//   'Roxy'
// ];

// // Access the element at index 2 (arrays are zero-indexed)
// // Index 2 contains the string "Max"
// console.log('Data type value:', mixedDataTypes[2]);


var foods = ['Steak' , 'Fish' , 'Chops' , 'Pizza'];
console.log('Food Types:' , foods);

foods.push('Mac&Cheese' , 'Burgers');
console.log("After-appending:", foods);

// // Create an array containing different food items
// var foods = ['Steak', 'Fish', 'Chops', 'Pizza'];

// // Log the original array to the console
// console.log('Food Types:', foods);

// // Add new items to the END of the array using push()
// foods.push('Mac&Cheese', 'Burgers');

// // Log the array again to show the updated contents
// console.log('After-appending:', foods);


console.log('Remove item:' , foods.pop());
console.log('Array after pop:' , foods);

// // Remove the LAST item from the foods array and return it
// console.log('Remove item:', foods.pop());

// // Log the array after pop() to show that the last item is gone
// console.log('Array after pop:', foods);


var allArrays = foods.concat(mixedDataTypes); 
console.log("Concat:",allArrays);

// // Combine the foods array with the mixedDataTypes array
// // concat() returns a NEW array and does NOT modify the originals
// var allArrays = foods.concat(mixedDataTypes);

// // Log the newly combined array
// console.log("Concat:", allArrays);


//9.  Finding Index: 
console.log("Index-Of the value:",allArrays.indexOf('Boelie'));

// // 9. Finding index:
// // indexOf() returns the position of the value in the array
// // If the value is not found, it returns -1
// console.log("Index-Of the value:", allArrays.indexOf('Boelie'));


//10. Turning into a String: 
// Convert the array into a single string with elements separated by a comma. 
var mixedString = mixedDataTypes.join(' _ ');
console.log("Coverted String:",mixedString);

// 10. Turning an array into a string:
// // join() combines all elements into a single string
// // The provided string (' _ ') is used as the separator
// var mixedString = mixedDataTypes.join(' _ ');
// console.log("Converted String:", mixedString);


//11.  Building with push: Add new items to the end of the array. 
var numbers = [];
numbers.push(10, 20, 30, 40, 50, 60, 70);
console.log("Numbers Array:",numbers);

// // 11. Building an array with push:
// // Start with an empty array
// var numbers = [];
// // push() adds one or more values to the END of the array
// numbers.push(10, 20, 30, 40, 50, 60, 70);
// console.log("Numbers Array:", numbers);


//12.  Adding to the beginning of the array: 
numbers.unshift(-25, -85, -65);
console.log("Added:",numbers);

// // 12. Adding to the beginning of the array:
// // unshift() adds values to the START of the array
// // This shifts all existing elements to the right
// numbers.unshift(-25, -85, -65);
// console.log("Added:", numbers);