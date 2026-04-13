// Creation 
const integer = 42;
const decimal = 3.14;
const negative = -10;

// Math Object (Yout best friend)
console.log(Math.round(4.7)); // 5
console.log(Math.floor(4.7)); // 4
console.log(Math.random()); // Random number between 0 and 1

// Convert String to number
const inputAsString = "99";
const inputAsNumber = Number(inputAsString);
console.log(inputAsNumber); // 99

const pxValue = "100px";
// parseInt will extract the numeric part from the string,
const numericValue = parseInt(pxValue); // stopping at the first non-numeric character
console.log(numericValue); // 100

const emValue = "2.5em";
// parseFloat will extract the numeric part including decimals
const floatValue = parseFloat(emValue);
console.log(floatValue); // 2.5

// Edge Cases

console.log(Number("abc")); // NaN (Not a Number)
console.log(parseInt("abc")); // NaN
console.log(parseFloat("abc")); // NaN

// The Floating Point Nightmare (0.1 + 0.2)
console.log(0.1 + 0.2);            // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3);    // FALSE

// Senior Fix: Use epsilon for comparison
const isEqual = Math.abs((0.1 + 0.2) - 0.3) < Number.EPSILON; // true

//NaN (Not a Number) is Toxic
const result = "Hello" / 2;        // NaN
console.log(result);               // NaN
console.log(typeof result);        // "number" (Wait, what?)
console.log(NaN === NaN);          // FALSE (The only value not equal to itself)

// Senior Fix: Use Number.isNaN()
console.log(Number.isNaN(result)); // true

// Infinity and Division by Zero
console.log(1 / 0);                // Infinity (Doesn't crash like other languages)
console.log(-1 / 0);               // -Infinity
console.log(Infinity > 9999999);   // true