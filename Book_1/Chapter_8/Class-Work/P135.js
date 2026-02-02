var sixthLetter = function (name) {
   if (name.length < 6) {
    return;
  }
 
  return "The sixth letter of your name is " + name[5] + ".";
};

console.log(sixthLetter("Stefan"));