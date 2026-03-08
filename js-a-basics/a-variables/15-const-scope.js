// you cannot redeclare a const variable within the same scope.
const username = "dev_guru";
// const username = "js_master"; 
// SyntaxError: Identifier 'username' has already been declared

// Variables declared with const are block-scoped. 
// A block in JavaScript is defined by a pair of curly braces { ... }. 
// This includes if statements, for loops, or even just standalone curly braces.

// example 1
// Same variable name in different blocks — no conflict!
const statusConst = "global";

if (true) {
  const statusConst = "inside if";  // ✅ different block, different binding
  console.log(statusConst);        // "inside if"
}

console.log(statusConst);          // "global"

// example 2 
const city = "New York"; // Global scope

if (true) {
  const city = "London"; // Block scope (this is a separate, entirely valid variable!)
  const weather = "Rainy";
  console.log(city); // Outputs: "London"
}

console.log(city); // Outputs: "New York"
console.log(weather); // ReferenceError: weather is not defined