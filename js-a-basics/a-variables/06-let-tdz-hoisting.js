// Variable declarations are "hoisted" (moved to the top of their scope before the code executes). 
// However, let handles hoisting very differently than the older var keyword.

// If you try to access a let variable before the line of code where it is declared, 
// JavaScript will throw an error. 
// The space between the start of the block and the actual declaration is called the Temporal Dead Zone (TDZ).

function play() {
  // START OF SCOPE
  // TEMPORAL DEAD ZONE STARTS HERE FOR 'score'
  
  // console.log(score); // ReferenceError: Cannot access 'score' before initialization
  
  // TEMPORAL DEAD ZONE ENDS HERE
  let score = 50; 
  console.log(score); // Output: 50
}

play();

// It is a common misconception that let variables are not hoisted. 
// They are hoisted, but unlike var (which is initialized with undefined), 
// let remains completely uninitialized until the JavaScript engine reads the line where it is declared.

// The TDZ helps catch bugs by preventing access to variables before they are declared.

// ----------

// When JavaScript processes your code before running it, it hoists variable declarations to the top of their scope. 
// This happens with both var and let. However, the behavior is completely different:

// With var, the variable is hoisted and initialized to undefined, 
// so you can technically use it before the line where you declared it.

// With let, the variable is hoisted but NOT initialized. It enters a special state called the Temporal Dead Zone (TDZ), 
// where it exists in memory but is completely inaccessible. Trying to access it throws a ReferenceError.

console.log(myVar); // undefined — var is hoisted and initialized
var myVar = 10;

console.log(myLet); // ❌ ReferenceError: Cannot access 'myLet' before initialization
let myLet = 10;

// The TDZ begins at the start of the block and ends at the exact line where the let declaration appears. 
// From that line onward, the variable is fully accessible.
// Example of TDZ in action:
{
  // --- TDZ starts here for `name` ---
  // Accessing `name` here would throw a ReferenceError
  
  let name = "Alice"; // --- TDZ ends here ---
  
  // `name` is fully accessible from this point onward
  console.log(name); // "Alice"
}