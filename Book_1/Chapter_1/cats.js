// Draw as many cats as you want!
var drawCats = function (howManyTimes) {
    // Loop from 0 up to (but not including) howManyTimes
    for (var i = 0; i < howManyTimes; i++) {
        // Log the current index and a cat face to the console
        console.log(i + " =^.^=");
    }
};

// Call the function and draw 10 cats
drawCats(10); // You can put any number here instead of 10


// Without using a function:

// Start a loop with i set to 8, run while i is less than 11, and increase i by 1 each time
for (var i = 8; i < 11; i++) {
    // Print the current value of i followed by a cat face to the console
    console.log(i + " =^.^=");
};
