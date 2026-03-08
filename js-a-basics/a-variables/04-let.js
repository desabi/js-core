// The let keyword is used to declare a variable whose value can change (mutate) later in your code.

// DECLARATION AND INITIALIZATION

// You can declare and initialize a variable in a single line,
// which is the most common practice:
let currentScore = 100;

// You can declare a variable without giving it a value right away.
// If you do this, JavaScript automatically assigns it the value of undefined.

let playerName; 
console.log(playerName); // Output: undefined

// Later in the code...
playerName = "Alex";
console.log(playerName); // Output: "Alex"

// REASSIGNMENT

// The primary purpose of let is to allow reassignment.
// Whenever you need a variable to act as a counter, an accumulator, 
// or a state tracker that updates over time, let is the tool for the job.
let lives = 3;
lives = lives - 1; // Player takes damage
console.log(lives); // Output: 2

// RE-DECLARATION
// Unlike var, you cannot re-declare a variable declared with let in the same scope.
// This will throw an error:
// let lives = 5; // SyntaxError: Identifier 'lives' has already been declared
// re-declaration is only forbidden within the same scope. 

// RE-DECLARATION, SHADOWING 
// because let is block-scoped, you can reuse the same variable name
// if it is in a completely different, nested block. 
// This is called Shadowing.

let color = "blue"; // Global/Outer scope

if (true) {
  let color = "red"; // Completely different variable, local to this block
  console.log(color); // Output: "red"
}

console.log(color); // Output: "blue" (The outer variable was untouched)