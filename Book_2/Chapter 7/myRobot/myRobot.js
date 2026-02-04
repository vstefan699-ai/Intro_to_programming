document.getElementById("lefteye").style.backgroundColor = "blue";
document.getElementById("head").style.transform = "rotate(6deg)";
// Put a 2‐pixel‐wide, solid black border around his body.
document.getElementById("body").style.border = "2px blacksolid";
// Round the corners of his mouth.
// document.getElementById("mouth").style.borderRadius = "4px";
// Put yellow dots around his right eye.
document.getElementById("righteye").style.border = "4px yellow dotted";
document.getElementById("lefteye").style.border = "4px yellow dotted";
// Change his left arm’s color.
document.getElementById("leftarm").style.backgroundColor = "#dadada";
// Change the text color.
document.getElementById("body").style.color = "#FF0000";
// Give Douglas hair.
document.getElementById("head").style.borderTop = "10px black solid";

var state = "idle"; 
// idle → movingRight → waitingForArm → finishing

var head = document.getElementById("head");
head.addEventListener("click", startHeadMove);


var headLeft = 33;
var headTop = 0;
var headTimer;

function startHeadMove(e) {
    if (state !== "idle") return;

state = "movingRight";

    headTimer = setInterval(function () {
        headLeft++;
        head.style.left = headLeft + "%";

        if (headLeft >= 70) { // where arm is
            clearInterval(headTimer);
            state = "waitingForArm";
        }
    }, 25);
}

var leftArm = document.getElementById("leftarm");
leftArm.addEventListener("click", collapseArmAndContinue);

var armLeft = 70;

function collapseArmAndContinue(e) {
    if (state !== "waitingForArm") return;

    state = "finishing";

// collapse arm
    var armTimer = setInterval(function () {
        armLeft--;
        leftArm.style.left = armLeft + "%";

        if (armLeft <= 40) {
            clearInterval(armTimer);
            moveHeadHome();
        }
    }, 8);
}

function moveHeadHome() {
    var direction = "down";

    headTimer = setInterval(function () {

        if (direction === "down") {
            headTop++;
            head.style.top = headTop + "%";
            if (headTop >= 80) direction = "left";
        }
    }, 4);
}

function moveHeadHome() {
    var direction = "down";

    headTimer = setInterval(function () {

        if (direction === "down") {
            headTop++;
            head.style.top = headTop + "%";

            // Head reached the bottom
            if (headTop >= 80) {
                clearInterval(headTimer);
                state = "done"; // animation finished
            }
        }

    }, 4);
}

function startHeadMove(e) {

    // RESET LOGIC
    if (state === "done") {
        resetAnimation();
        return;
    }

    // NORMAL START LOGIC
    if (state !== "idle") return;

    state = "movingRight";

    headTimer = setInterval(function () {
        headLeft++;
        head.style.left = headLeft + "%";

        if (headLeft >= 70) {
            clearInterval(headTimer);
            state = "waitingForArm";
        }
    }, 25);
}

function resetAnimation() {
    // Reset positions
    headLeft = 33;
    headTop = 2;
    armLeft = 71;

    // Apply styles
    head.style.left = headLeft + "%";
    head.style.top = headTop + "%";
    leftArm.style.left = armLeft + "%";

    // Reset state
    state = "idle";
}

// var head = document.getElementById("head");
// head.addEventListener("click", moveSideToSide);

// function moveSideToSide(e) {
//     var robotPart = e.currentTarget;
//     var left = 33;
//     var id = setInterval(frame, 30) // draw every 10ms

//     function frame() {
//         robotPart.style.left = left + '%';
//         left++;
//         if (left === 70) {
//             clearInterval(id);
//         }
//     }
// }

// var leftEye = document.getElementById("lefteye");
// var rightEye = document.getElementById("righteye");

// leftEye.addEventListener("click", stopClick);
// rightEye.addEventListener("click", stopClick);

// function stopClick(e) {
//     e.stopPropagation();
// }

// var leftArm = document.getElementById("leftarm");
// leftArm.addEventListener("click", moveRightLeft);

// function moveRightLeft(e) {
//     var robotPart = e.target;
//     var left = 0;
//     var id = setInterval(frame, 10) // draw every 10ms
//     function frame() {
//         robotPart.style.left = left + '%';
//         left++;
//         if (left === 72) {
//             clearInterval(id);
//         }
//     }
// }




// CODE COMMENTS:
// // Change the left eye color to blue
// document.getElementById("lefteye").style.backgroundColor = "blue";

// // Slightly rotate the head
// document.getElementById("head").style.transform = "rotate(6deg)";

// // Put a 2px solid black border around the body
// document.getElementById("body").style.border = "2px solid black";

// // Put yellow dotted borders around both eyes
// document.getElementById("righteye").style.border = "4px yellow dotted";
// document.getElementById("lefteye").style.border = "4px yellow dotted";

// // Change the left arm color
// document.getElementById("leftarm").style.backgroundColor = "#dadada";

// // Change the text color inside the body
// document.getElementById("body").style.color = "#FF0000";

// // Add “hair” to the head using a top border
// document.getElementById("head").style.borderTop = "10px solid black";


// // --------------------
// // STATE MANAGEMENT
// // --------------------

// // Controls what the robot is allowed to do
// // idle → movingRight → waitingForArm → finishing → done
// var state = "idle";


// // --------------------
// // HEAD SETUP
// // --------------------

// var head = document.getElementById("head");

// // Clicking the head starts movement OR resets (depending on state)
// head.addEventListener("click", startHeadMove);

// // Track head position
// var headLeft = 33;
// var headTop = 0;

// // Stores the interval ID so we can stop movement
// var headTimer;


// // --------------------
// // START OR RESET HEAD MOVEMENT
// // --------------------

// function startHeadMove(e) {

//     // If animation is finished, clicking the head resets everything
//     if (state === "done") {
//         resetAnimation();
//         return;
//     }

//     // Only allow starting if idle
//     if (state !== "idle") return;

//     state = "movingRight";

//     // Move head to the right
//     headTimer = setInterval(function () {
//         headLeft++;
//         head.style.left = headLeft + "%";

//         // Stop when head reaches the arm
//         if (headLeft >= 70) {
//             clearInterval(headTimer);
//             state = "waitingForArm";
//         }
//     }, 25);
// }


// // --------------------
// // LEFT ARM SETUP
// // --------------------

// var leftArm = document.getElementById("leftarm");

// // Clicking the arm collapses it and continues animation
// leftArm.addEventListener("click", collapseArmAndContinue);

// // Track arm position
// var armLeft = 70;


// // --------------------
// // COLLAPSE ARM AND CONTINUE
// // --------------------

// function collapseArmAndContinue(e) {

//     // Only allow clicking arm at the correct time
//     if (state !== "waitingForArm") return;

//     state = "finishing";

//     // Collapse arm inward
//     var armTimer = setInterval(function () {
//         armLeft--;
//         leftArm.style.left = armLeft + "%";

//         // When arm is fully collapsed, move head down
//         if (armLeft <= 40) {
//             clearInterval(armTimer);
//             moveHeadHome();
//         }
//     }, 8);
// }


// // --------------------
// // MOVE HEAD DOWN TO FINISH
// // --------------------

// function moveHeadHome() {

//     // Head only moves downward here
//     var direction = "down";

//     headTimer = setInterval(function () {

//         if (direction === "down") {
//             headTop++;
//             head.style.top = headTop + "%";

//             // Stop animation when head reaches bottom
//             if (headTop >= 80) {
//                 clearInterval(headTimer);
//                 state = "done"; // animation fully completed
//             }
//         }

//     }, 4);
// }


// // --------------------
// // RESET EVERYTHING
// // --------------------

// function resetAnimation() {

//     // Reset position values
//     headLeft = 33;
//     headTop = 2;
//     armLeft = 71;

//     // Apply reset positions visually
//     head.style.left = headLeft + "%";
//     head.style.top = headTop + "%";
//     leftArm.style.left = armLeft + "%";

//     // Allow animation to start again
//     state = "idle";
// }