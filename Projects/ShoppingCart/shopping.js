// Item numbers (used for display purposes only)
var nums = [1, 2, 3, 4, 5];

// Item names
var items = ["Sterrie Stampie", "2l Orange Juice", "1kg Chicken Breasts", "250g Pasta", "1kg Potatoes"];

// Price of each item (index matches items array)
var prices = [15.50, 29.99, 49.99, 24.99, 20.00];

// Quantity selected for each item (starts at 0)
var quantities = [0, 0, 0, 0, 0];

// Total cost per item (price × quantity)
var totals = [0.0, 0.0, 0.0, 0.0, 0.0];

// Running total of entire order
var totalOrderAmt = 0;


// --------------------
// ADD ITEM FUNCTION
// --------------------
function add_selection(x) {

    // x is the index of the item clicked
    console.log(x);

    // Increase quantity of selected item
    quantities[x] = quantities[x] + 1;

    // Recalculate total cost for that specific item
    totals[x] = prices[x] * quantities[x];

    // Increase overall order total
    totalOrderAmt += prices[x];

    // Refresh table display
    display_all();
}


// --------------------
// REMOVE ITEM FUNCTION
// --------------------
function remove_selection(x) {

    // Only remove item if quantity is greater than 0
    if (quantities[x] > 0) {

        // Decrease quantity
        quantities[x] = quantities[x] - 1;

        // Recalculate item total
        totals[x] = prices[x] * quantities[x];

        // Decrease overall order total
        totalOrderAmt -= prices[x];
    }

    // Refresh table display
    display_all();
}
 

// --------------------
// DISPLAY TABLE FUNCTION
// --------------------
function display_all() {

   // Start building the table as a string
   var myTable = "<table class='shop-table'>";

   // Create table headers
   myTable += "<tr>";
   myTable += "<th>Num</th>";
   myTable += "<th>Item</th>";
   myTable += "<th>Price</th>";
   myTable += "<th>Quantity</th>";
   myTable += "<th>Total</th>";
   myTable += "<th>Add</th>";
   myTable += "<th>Remove</th>";
   myTable += "</tr>";

   // Loop through all items
   for (var i = 0; i < items.length; i++) {

        myTable += "<tr>";

        // Display item number
        myTable += "<td>" + nums[i] + "</td>";

        // Display item name
        myTable += "<td>" + items[i] + "</td>";

        // Display item price
        myTable += "<td>" + prices[i] + "</td>";

        // Display selected quantity
        myTable += "<td>" + quantities[i] + "</td>";

        // Display total cost for this item
        myTable += "<td>" + totals[i] + "</td>";

        // Add button (passes item index to function)
        myTable += "<td><button id='Add' onclick='add_selection(" + i + ")'>Add</button></td>";

        // Remove button (passes item index to function)
        myTable += "<td><button id='Remove' onclick='remove_selection(" + i + ")'>Remove</button></td>";

        myTable += "</tr>";
    }

    myTable += "</table>";

    // Insert table into HTML element with id "demo"
    document.getElementById("demo").innerHTML = myTable;
}


// --------------------
// CHECKOUT FUNCTION
// --------------------
function checkout() {

    // Local variable (not strictly needed since totalOrderAmt already tracks total)
    var total = 0;

    // Loop through totals array and calculate sum
    for (var i = 0; i < totals.length; i++) {
        total += totals[i];
    }

    // Display final total (using running total variable)
    document.getElementById("total").innerHTML =
        "<h3>Total Amount: R " + totalOrderAmt.toFixed(2) + "</h3>";
}


// --------------------
// RUN WHEN PAGE LOADS
// --------------------
window.onload = function() {

    // Display table immediately when page opens
    display_all();
}
