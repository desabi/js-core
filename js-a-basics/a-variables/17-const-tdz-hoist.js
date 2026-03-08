// const declarations are hoisted, but they are not initialized 
// with a default value of undefined.
// Instead, they are placed in a Temporal Dead Zone (TDZ) 
// from the start of the block until the exact line of code
//  where the declaration occurs.

// ← TDZ for 'score' begins here

console.log(score); // ReferenceError: Cannot access 'score' before initialization

const score = 100; // ← TDZ ends here. 'score' is now accessible.

console.log(score); 