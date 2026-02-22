
// PART 1
// Global Scope
// If you declare a var outside of any function, it is globally scoped. 
// It can be accessed from anywhere in your entire JavaScript file.
// It becomes a global variable and gets attached directly to the window object in browsers (or global in Node.js):
var globalGreeting = "Hello from the outside!";

function sayHi() {
    console.log(globalGreeting); // Works perfectly
}
sayHi();


// PART 2 
// var is function-scoped, not block-scoped.
// A var variable is accessible anywhere within the function it was declared in,
// regardless of blocks like if, for, while, {}, etc.
function myFunction() {
    if (true) {
        var message = "Hello!";
    }
    console.log(message); // "Hello!" — accessible outside the if block!
}

// var completely ignores block statements like if, for, or while. 
// If you declare a var inside a block, it "leaks" out into the surrounding function or global scope.

function checkAge(age) {
    if (age >= 18) {
        var status = "Adult"; // Declared inside an 'if' block
    }
    
    // We can still access 'status' outside the 'if' block!
    console.log(status); 
}

checkAge(20); // Outputs: "Adult"

// PART 3
// Function Scope
// If you declare a var inside a function, it is "trapped" inside that function.
function calculateTotal() {
    var taxRate = 0.05; // Function scoped
    console.log(taxRate); // Outputs: 0.05
}

calculateTotal();
console.log(taxRate); // ReferenceError: taxRate is not defined