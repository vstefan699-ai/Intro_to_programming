// Set the age of the person
age = 12;

// Set whether the person is accompanied by an adult
accompanied = true;

// Check if the person is at least 13 years old
// OR if they are accompanied by an adult
if (age >= 13 || accompanied === true) {
  // Runs if at least one of the conditions is true
  console.log("Allowed to see the movie");
} else {
  // Runs only if both conditions are false
  console.log("Not allowed to see the movie");
}
