// Destructuring is a powerful ES6 syntax that lets you unpack values from arrays or 
// properties from objects into separate variables. 
// It pairs beautifully with const, and you'll see this pattern constantly in 
// modern JavaScript and React code.


// object destructuring with const
const person = { name: 'Alice', age: 30, city: 'Paris' };
const { name, age } = person;
console.log(name);  // 'Alice'
console.log(age);   // 30

// Rename variables while destructuring
const { name: userName, age: userAge } = person;
console.log(userName);  // 'Alice'
console.log(userAge);   // 30

// Default values while destructuring
const { name: n, role = "user" } = person;
console.log(role);  // "user" — fallback since person has no role

// Array destructuring
const [first, second, third] = [10, 20, 30];
console.log(first);   // 10

// Skip elements with commas
const [a, , c] = [1, 2, 3];
console.log(a, c);  // 1 3

// Rest syntax to collect remaining elements
const [head, ...tail] = [1, 2, 3, 4];
console.log(head, tail);  // 1, [2, 3, 4]

// Nested destructuring
const { address: { street, zip } } = {
  address: { street: "Main St", zip: "10001" }
};
console.log(street, zip);  // "Main St", "10001"

// Destructuring function parameters
function greet({ name, age }) {
  console.log(`Hello ${name}, you are ${age} years old!`);
}

greet({ name: "Bob", age: 25 });  // "Hello Bob, you are 25 years old!"

// Destructuring with const is a common pattern because it allows you to 
// create new variables that won't be reassigned, while still unpacking 
// values from complex data structures in a clean and readable way.

