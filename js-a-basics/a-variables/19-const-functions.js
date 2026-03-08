// Functions in JavaScript are first-class values, they can be stored in variables
// just like numbers or strings. 
// Using const to declare functions is a very common and recommended pattern in modern JavaScript.

// When you assign an arrow function or a function expression to a const, 
// you get all the benefits: block scope, no accidental reassignment, no hoisting surprises, 
// and a clear signal that this function definition should never change.

// Arrow function stored in const
const add = (a, b) => a + b;
console.log(add(3, 4));   // 7

// Function expression stored in const
const greet = function(name) {
  return `Hello, ${name}!`;
};
console.log(greet("World"));  // "Hello, World!"

// Cannot replace the function
add = () => 0;     // TypeError: Assignment to constant variable

// Key difference vs function declarations:
// Function declarations ARE hoisted and can be called before their definition.
// const function expressions are NOT — they obey TDZ rules.
sayHi();            // works due to hoisting
function sayHi() { console.log("hi"); }

sayBye();            // ReferenceError — TDZ!
const sayBye = () => console.log("bye");