// Creation. Literal is always preferred over new String()
const firstName = "Ada";
const lastName = 'Lovelace';

// Concatenation
const fullName = firstName + " " + lastName;
console.log(`hello, ${fullName}`); // hello, Ada Lovelace!

// Common Methods (They return a NEW string, they don't mutate the original)
const str = "JavaScript";
console.log(str.length); // 10
console.log(str.toUpperCase()); // JAVASCRIPT
console.log(str.includes("Script")); // true
console.log(str.slice(0, 4)); // Java
console.log(str.replace("Java", "Type")); // TypeScript

// Edge Cases
let lang = "Jova";
lang[2] = "a"; // FAILS SILENTLY (No error, but it doesn't change the string)
console.log(lang); // Still "Jova"

//Adding Numbers and Strings (Coercion Trap)
console.log(5 + 5 + "5");   // "105" (Left-to-right: 10 + "5")
console.log("5" + 5 + 5);   // "555" (Left-to-right: "55" + 5)