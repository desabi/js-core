// ========================================
// JavaScript Variable Declaration Concepts
// ========================================

console.log("=== Variable Declaration Examples ===");

// 1. VAR (Function-scoped, older syntax)
console.log("\n--- VAR Examples ---");

// var is function-scoped
function varExample() {
    var message = "Hello from var!";
    console.log("Inside function:", message);
    
    if (true) {
        var message = "Changed inside block"; // This affects the outer scope!
        console.log("Inside block:", message);
    }
    
    console.log("After block:", message); // Still "Changed inside block"
}

varExample();

// var can be redeclared
var age = 25;
var age = 30; // This is allowed with var
console.log("Age (var):", age);

// var is hoisted
console.log("Hoisted var value:", hoistedVar); // undefined, not ReferenceError
var hoistedVar = "I was hoisted!";

// 2. LET (Block-scoped, modern syntax)
console.log("\n--- LET Examples ---");

// let is block-scoped
function letExample() {
    let message = "Hello from let!";
    console.log("Inside function:", message);
    
    if (true) {
        let message = "Different message in block"; // This is a new variable
        console.log("Inside block:", message);
    }
    
    console.log("After block:", message); // Still "Hello from let!"
}

letExample();

// let can be reassigned but not redeclared
let name = "John";
name = "Jane"; // Reassignment is allowed
console.log("Name (let):", name);

// This would cause an error:
// let name = "Bob"; // SyntaxError: Identifier 'name' has already been declared

// let is not hoisted in the same way
// console.log(hoistedLet); // ReferenceError: Cannot access 'hoistedLet' before initialization
let hoistedLet = "I am not hoisted like var";

// 3. CONST (Block-scoped, immutable reference)
console.log("\n--- CONST Examples ---");

// const must be initialized
const PI = 3.14159;
console.log("PI (const):", PI);

// const cannot be reassigned
// PI = 3.14; // TypeError: Assignment to constant variable

// const with objects and arrays
const person = {
    name: "Alice",
    age: 25
};

// You can modify object properties (const prevents reassignment of the reference, not the content)
person.age = 26;
person.city = "New York";
console.log("Person object:", person);

// But you cannot reassign the entire object
// person = { name: "Bob" }; // TypeError: Assignment to constant variable

const colors = ["red", "green", "blue"];
colors.push("yellow"); // You can modify array contents
console.log("Colors array:", colors);

// But you cannot reassign the entire array
// colors = ["purple", "orange"]; // TypeError: Assignment to constant variable

// 4. Practical Examples
console.log("\n--- Practical Examples ---");

// Use const for values that won't change
const API_URL = "https://api.example.com";
const MAX_RETRIES = 3;

// Use let for values that will change
let currentUser = null;
let isLoading = false;
let counter = 0;

// Use var only in specific cases (like in older code or specific scenarios)
var legacyVariable = "Only use var when necessary";

// 5. Temporal Dead Zone (TDZ) example
console.log("\n--- Temporal Dead Zone Example ---");

console.log("Before declaration:", typeof undeclaredVar); // undefined, (var is hoisted and initialized)
// console.log(undeclaredLet); // ReferenceError: Cannot access 'undeclaredLet' before initialization

let undeclaredLet = "I'm declared later";

console.log("After declaration:", undeclaredLet);

console.log("\n=== End of Variable Examples ===");