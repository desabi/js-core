
// The defining feature of let is that it is block-scoped. 
// A "block" in JavaScript is any code wrapped in curly braces {}. 
// This includes if statements, for loops, while loops, or even just standalone sets of curly braces.

// When you declare a variable using let inside a block, 
// that variable does not exist outside of that block.
let weather = "sunny";

if (weather === "sunny") {
  let accessory = "sunglasses";
  console.log("I am wearing " + accessory); // Works perfectly
}

console.log(accessory); // ReferenceError: accessory is not defined

// Block scoping prevents variables from "leaking" out of their intended context, 
// which helps you avoid accidentally overwriting data in other parts of your program.