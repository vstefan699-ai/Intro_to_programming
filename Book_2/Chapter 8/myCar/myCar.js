var dreamCar = {
    make: "Oldsmobile",
    model: "98",
    color: "brown",
    year: 1983,
    bodyStyle: "Luxury Car",
    price: 4500
   };

  alert("The type of dreamCar is: " + typeof dreamCar);

document.getElementById('rotateBtn').addEventListener('click', function() {
    const frontwheel = document.getElementById('frontwheel');
    const backwheel = document.getElementById('backwheel'); 

  frontwheel.classList.toggle('rotate-active');
  backwheel.classList.toggle('rotate-active');
});

// document.getElementById("pricetag").innerHTML = dreamCar.price;
// document.getElementById("modelyear").innerHTML = dreamCar.year;
// document.getElementById("body").style.backgroundColor = dreamCar.color;
// document.getElementById("body").innerHTML = dreamCar.make + " " + dreamCar.model;