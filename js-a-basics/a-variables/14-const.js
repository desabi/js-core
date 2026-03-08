// DECLARATION AND INITIALIZATION OF CONST

// you must initialize a const at the time of declaration. 
// You cannot declare it first and assign it later.

// ✅ CORRECT: Declared and initialized together
const greeting = "Hello, World!";

// ❌ INCORRECT: Missing initialization
// const myAge; 
// SyntaxError: Missing initializer in const declaration

// REASSIGNMENT OF CONST
// The primary feature of const is that once a value has been assigned to it, 
// you cannot reassign a new value to that variable identifier.

const maxPlayers = 4;

// Attempting to assign a new value will crash your code
maxPlayers = 5; 
// TypeError: Assignment to constant variable.