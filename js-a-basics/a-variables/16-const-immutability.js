// const does NOT make the value itself immutable (unchangeable). 
// It only prevents reassignment of the variable identifier.

// PRIMITIVE TYPES (STRINGS, NUMBERS, BOOLEANS)

const pi = 3.14159;
// pi is locked. You cannot change it or reassign it.

// REFERENCE TYPES (OBJECTS AND ARRAYS)

// Objects and arrays are stored in a different part of memory (the Heap), 
// and the const variable only holds a reference (or pointer) to that location.

// OBJECTS
const user = { name: "Alice", role: "Admin" };

// ✅ ALLOWED: Mutating the internal properties of the object
user.name = "Alicia"; 
user.age = 28; 

// ❌ INCORRECT: Reassigning the variable to a entirely new object
user = { name: "Bob", role: "User" }; 
// TypeError: Assignment to constant variable.

// ARRAYS
const colors = ["red", "blue"];
// ✅ ALLOWED: Adding or changing elements in the array
colors.push("green"); 
colors[0] = "yellow";

// ❌ INCORRECT: Reassigning to a new array
colors = ["purple", "orange"]; 
// TypeError: Assignment to constant variable.
