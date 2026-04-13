// Happy path
const isLoggedIn = true;
const isAdmin = false;

// Logical Operators
console.log(true && false);  // false (AND)
console.log(true || false);  // true  (OR)
console.log(!true);          // false (NOT)

// Edge cases
// Truthy & Falsy (The Hidden Conversion)
// Falsy Values (Memorize these 7): false, 0, -0, 0n, "" (empty string), null, undefined, NaN.
// Everything else is TRUTHY.

let score = 0;
if (score) {
  console.log("You have points!"); // This will NEVER run. 0 is falsy.
} else {
  console.log("No score yet."); // This runs.
}

// Senior fix for checking if something exists (not just falsy):
if (score !== null && score !== undefined) {
    // safe
}

