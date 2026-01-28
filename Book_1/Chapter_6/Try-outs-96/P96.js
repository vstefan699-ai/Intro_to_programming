var name = 'Stefan';

if (name === 'Stefan') {
    console.log('Hello me!')
} else {
    console.log('Hello stranger!')
}
//Comments for above code:
// // Declare a variable called name and assign it the string 'Stefan'
// var name = 'Stefan';

// // Check if the value of name is exactly equal to 'Stefan'
// // === compares both value and type
// if (name === 'Stefan') {
//     // This runs when the condition is true
//     console.log('Hello me!');
// } else {
//     // This runs when the condition is false
//     console.log('Hello stranger!');
// }

var name = 'Dad';

if (name === 'Stefan') {
    console.log('Hello Me!');
} else if (name === 'Dad') {
    console.log('Hi Dad!');
} else if (name === 'Mom') {
    console.log('Hi Mom!');
} else  {
    console.log('Hello Stranger!');
}
//Comments for above code:
// // Declare a variable called name and assign it the value 'Dad'
// var name = 'Dad';

// // Check each condition from top to bottom
// // Only the FIRST true condition will run
// if (name === 'Stefan') {
//     // Runs if name is exactly 'Stefan'
//     console.log('Hello Me!');
// } else if (name === 'Dad') {
//     // Runs if the first condition is false and name is 'Dad'
//     console.log('Hi Dad!');
// } else if (name === 'Mom') {
//     // Runs if the previous conditions are false and name is 'Mom'
//     console.log('Hi Mom!');
// } else {
//     // Runs only if none of the above conditions are true
//     console.log('Hello Stranger!');
// }