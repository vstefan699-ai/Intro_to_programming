var carSpeed = 100;
var carPosition = -10;
var animation;

var train = document.getElementById("car");
train.addEventListener("click", speedUp);

var stopButton = document.getElementById("stopButton");
stopButton.addEventListener("click", stopCar);

function speedUp() {
    if (carSpeed > 7) {
        carSpeed -= 7;
    }
    console.log("car speed: " + carSpeed);

    clearInterval(animation);
    animation = setInterval(frame, carSpeed);


    function frame() {
        carPosition += 2;
        car.style.left = carPosition + 'px';
        console.log(carPosition);
        checkPosition(carPosition);
    }
}

function checkPosition(currentPosition) {
    if (currentPosition === 990) {
        alert("OHH NOOO!!!");
        console.log("You Crashed!!!");
        clearInterval(animation);
    }
}

function stopCar() {
    if (carPosition < 60) {
        clearInterval(animation);
    }
}