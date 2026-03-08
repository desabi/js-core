
// Hoisting is a JavaScript mechanism where variable and function declarations
// are put into memory during the "compile" phase, before the code is actually executed.
//  Conceptually, it feels like your var declarations are physically moved to the top of their scope.

// Only the declaration is hoisted, not the initialization (assignment).

console.log(myPet); // Outputs: undefined (No error!)
var myPet = "Dog";
console.log(myPet); // Outputs: "Dog"

// How the JavaScript engine reads the code above:

// Step 1: Hoist the declaration
// var myPet; 

// Step 2: Execute the code
// console.log(myPet); // Naturally, it is undefined here
// myPet = "Dog";      // Step 3: The assignment happens where it was originally written
// console.log(myPet); // Now it has a value