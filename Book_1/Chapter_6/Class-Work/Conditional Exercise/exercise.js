console.log('_____If statements_____')

var Pizza = false;
var KFC = false;
var McDonalds = false;
var Salad = true;

if (Pizza) {
    console.log("Great! I'm having pizza!"); 
}

else if (KFC) { 
    console.log("Great! I'm having KFC!");  
}

else if (McDonalds) { 
    console.log("Great! I'm having McDonalds!");  
}

if (Salad) {
    console.log("Looks like I'm having salad..."); 
 }

//Comments for above code:
//  // Print a heading to show this example is about if statements
// console.log('_____If statements_____');

// // Boolean variables representing food choices
// // Only Salad is set to true
// var Pizza = false;
// var KFC = false;
// var McDonalds = false;
// var Salad = true;

// // Check each condition in order
// // Only the FIRST true condition in an if / else if chain will run
// if (Pizza) {
//     console.log("Great! I'm having pizza!");
// }
// else if (KFC) {
//     console.log("Great! I'm having KFC!");
// }
// else if (McDonalds) {
//     console.log("Great! I'm having McDonalds!");
// }

// // This is a SEPARATE if statement, not part of the chain above
// // It runs independently of the previous conditions
// if (Salad) {
//     console.log("Looks like I'm having salad...");
// }