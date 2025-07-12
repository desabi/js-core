console.log("=== Expressions in JavaScript ===");

// ========================================
// 1. WHAT ARE EXPRESSIONS?
// ========================================

console.log("\n--- WHAT ARE EXPRESSIONS? ---");

// An expression is any valid unit of code that resolves to a value
// Expressions can be:
// - Literals (numbers, strings, booleans)
// - Variables
// - Operators and operands
// - Function calls
// - Object/array access
// - Combinations of the above

console.log("Expressions are code units that produce values");
console.log("Every expression evaluates to a single value");

// ========================================
// 2. LITERAL EXPRESSIONS
// ========================================

console.log("\n--- LITERAL EXPRESSIONS ---");

// Number literals
console.log("Number literal:", 42);
console.log("Float literal:", 3.14159);
console.log("Scientific notation:", 1.23e5);
console.log("Binary literal:", 0b1010);
console.log("Octal literal:", 0o755);
console.log("Hex literal:", 0xFF);

// String literals
console.log("String literal:", "Hello World");
console.log("Template literal:", `Current time: ${new Date()}`);
console.log("Multi-line string:", `This is a
multi-line string`);

// Boolean literals
console.log("Boolean literals:", true, false);

// Array literals
console.log("Array literal:", [1, 2, 3, 4, 5]);
console.log("Mixed array:", ["hello", 42, true, { key: "value" }]);

// Object literals
console.log("Object literal:", { name: "John", age: 30 });
console.log("Nested object:", { 
    user: { 
        name: "Alice", 
        preferences: { theme: "dark" } 
    } 
});

// Function literals
console.log("Function literal:", function(x) { return x * 2; });

// ========================================
// 3. VARIABLE EXPRESSIONS
// ========================================

console.log("\n--- VARIABLE EXPRESSIONS ---");

let name = "JavaScript";
let version = 2023;
let isAwesome = true;

console.log("Variable expressions:");
console.log("name:", name);
console.log("version:", version);
console.log("isAwesome:", isAwesome);

// Variable expressions in calculations
let result = version + 1;
console.log("Calculation with variables:", result);

// ========================================
// 4. ARITHMETIC EXPRESSIONS
// ========================================

console.log("\n--- ARITHMETIC EXPRESSIONS ---");

let a = 10;
let b = 5;

console.log("Basic arithmetic expressions:");
console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulo:", a % b);
console.log("Exponentiation:", a ** b);

// Complex arithmetic expressions
let complexExpression = (a + b) * 2 - (a / b);
console.log("Complex expression (a + b) * 2 - (a / b):", complexExpression);

// String arithmetic (concatenation)
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log("String concatenation:", fullName);

// ========================================
// 5. COMPARISON EXPRESSIONS
// ========================================

console.log("\n--- COMPARISON EXPRESSIONS ---");

let x = 10;
let y = "10";
let z = 15;

console.log("Comparison expressions:");
console.log("x == y (loose equality):", x == y);
console.log("x === y (strict equality):", x === y);
console.log("x > z:", x > z);
console.log("x <= z:", x <= z);
console.log("x != z:", x != z);
console.log("x !== y:", x !== y);

// String comparisons
console.log("String comparisons:");
console.log("'apple' < 'banana':", 'apple' < 'banana');
console.log("'zebra' > 'apple':", 'zebra' > 'apple');

// ========================================
// 6. LOGICAL EXPRESSIONS
// ========================================

console.log("\n--- LOGICAL EXPRESSIONS ---");

let isLoggedIn = true;
let hasPermission = false;
let isAdmin = true;

console.log("Logical expressions:");
console.log("AND (&&):", isLoggedIn && hasPermission);
console.log("OR (||):", isLoggedIn || hasPermission);
console.log("NOT (!):", !isLoggedIn);
console.log("Complex logical:", isLoggedIn && (isAdmin || hasPermission));

// Short-circuit evaluation
console.log("Short-circuit examples:");
let result1 = false && console.log("This won't execute");
let result2 = true || console.log("This won't execute either");

// ========================================
// 7. CONDITIONAL (TERNARY) EXPRESSIONS
// ========================================

console.log("\n--- CONDITIONAL EXPRESSIONS ---");

let age = 18;
let canVote = age >= 18 ? "Yes" : "No";
console.log("Ternary expression - Age:", age, "Can vote:", canVote);

// Nested ternary
let score = 85;
let grade = score >= 90 ? "A" : 
           score >= 80 ? "B" : 
           score >= 70 ? "C" : 
           score >= 60 ? "D" : "F";
console.log("Nested ternary - Score:", score, "Grade:", grade);

// ========================================
// 8. FUNCTION CALL EXPRESSIONS
// ========================================

console.log("\n--- FUNCTION CALL EXPRESSIONS ---");

// Function declaration
function greet(name) {
    return `Hello, ${name}!`;
}

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

console.log("Function call expressions:");
console.log("greet('Alice'):", greet('Alice'));
console.log("add(5, 3):", add(5, 3));
console.log("multiply(add(2, 3), 4):", multiply(add(2, 3), 4));

// Built-in function expressions
console.log("Built-in function expressions:");
console.log("Math.max(1, 5, 3):", Math.max(1, 5, 3));
console.log("parseInt('42'):", parseInt('42'));
console.log("String(123):", String(123));
console.log("Array.isArray([1, 2, 3]):", Array.isArray([1, 2, 3]));

// ========================================
// 9. OBJECT AND ARRAY ACCESS EXPRESSIONS
// ========================================

console.log("\n--- OBJECT AND ARRAY ACCESS EXPRESSIONS ---");

// Object access
let person = {
    name: "John",
    age: 30,
    address: {
        street: "123 Main St",
        city: "New York"
    },
    hobbies: ["reading", "coding"]
};

console.log("Object access expressions:");
console.log("person.name:", person.name);
console.log("person['age']:", person['age']);
console.log("person.address.city:", person.address.city);
console.log("person.hobbies[0]:", person.hobbies[0]);

// Array access
let colors = ["red", "green", "blue", "yellow"];
console.log("Array access expressions:");
console.log("colors[0]:", colors[0]);
console.log("colors[colors.length - 1]:", colors[colors.length - 1]);
console.log("colors.indexOf('blue'):", colors.indexOf('blue'));

// ========================================
// 10. TEMPLATE LITERAL EXPRESSIONS
// ========================================

console.log("\n--- TEMPLATE LITERAL EXPRESSIONS ---");

let product = "Laptop";
let price = 999;
let discount = 0.1;

console.log("Template literal expressions:");
console.log(`Product: ${product}, Price: $${price}`);
console.log(`Discounted price: $${price * (1 - discount)}`);

// Complex template expressions
let user = { name: "Alice", age: 25 };
let message = `User ${user.name} is ${user.age} years old and ${user.age >= 18 ? 'can' : 'cannot'} vote`;
console.log("Complex template:", message);

// ========================================
// 11. ARROW FUNCTION EXPRESSIONS
// ========================================

console.log("\n--- ARROW FUNCTION EXPRESSIONS ---");

// Arrow function expressions
let square = x => x * x;
let addNumbers = (a, b) => a + b;
let getFullName = (firstName, lastName) => `${firstName} ${lastName}`;

console.log("Arrow function expressions:");
console.log("square(5):", square(5));
console.log("addNumbers(3, 7):", addNumbers(3, 7));
console.log("getFullName('John', 'Doe'):", getFullName('John', 'Doe'));

// Arrow functions with object literals
let createUser = (name, age) => ({ name, age });
console.log("createUser('Bob', 35):", createUser('Bob', 35));

// ========================================
// 12. DESTRUCTURING EXPRESSIONS
// ========================================

console.log("\n--- DESTRUCTURING EXPRESSIONS ---");

// Array destructuring
let numbers = [1, 2, 3, 4, 5];
let [first, second, ...rest] = numbers;
console.log("Array destructuring:", { first, second, rest });

// Object destructuring
let employee = { name: "Jane", age: 28, department: "IT", salary: 75000 };
let { name: empName, age: empAge, ...otherDetails } = employee;
console.log("Object destructuring:", { empName, empAge, otherDetails });

// ========================================
// 13. SPREAD AND REST EXPRESSIONS
// ========================================

console.log("\n--- SPREAD AND REST EXPRESSIONS ---");

// Spread expressions
let fruits = ["apple", "banana"];
let moreFruits = ["orange", "grape"];
let allFruits = [...fruits, ...moreFruits, "mango"];
console.log("Spread expression (arrays):", allFruits);

let person1 = { name: "John", age: 30 };
let person2 = { ...person1, city: "New York", age: 31 };
console.log("Spread expression (objects):", person2);

// Rest expressions
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log("Rest expression (function):", sum(1, 2, 3, 4, 5));

// ========================================
// 14. NULLISH COALESCING AND OPTIONAL CHAINING
// ========================================

console.log("\n--- NULLISH COALESCING AND OPTIONAL CHAINING ---");

// Nullish coalescing
let userInput = null;
let defaultValue = "guest";
let username = userInput ?? defaultValue;
console.log("Nullish coalescing:", username);

// Optional chaining
let userProfile = {
    name: "Alice",
    preferences: {
        theme: "dark"
    }
};

console.log("Optional chaining:");
console.log("userProfile.preferences?.theme:", userProfile.preferences?.theme);
console.log("userProfile.preferences?.language:", userProfile.preferences?.language);
console.log("userProfile.address?.street:", userProfile.address?.street);

// ========================================
// 15. COMPLEX EXPRESSIONS
// ========================================

console.log("\n--- COMPLEX EXPRESSIONS ---");

// Complex expression combining multiple concepts
let users = [
    { name: "Alice", age: 25, active: true },
    { name: "Bob", age: 30, active: false },
    { name: "Charlie", age: 35, active: true }
];

// Complex expression: filter active users, map to names, join with commas
let activeUserNames = users
    .filter(user => user.active)
    .map(user => user.name)
    .join(", ");

console.log("Complex expression result:", activeUserNames);

// Another complex expression
let productCatalog = [
    { name: "Laptop", price: 999, category: "Electronics" },
    { name: "Book", price: 25, category: "Books" },
    { name: "Phone", price: 699, category: "Electronics" }
];

let totalElectronicsValue = productCatalog
    .filter(product => product.category === "Electronics")
    .reduce((total, product) => total + product.price, 0);

console.log("Total electronics value:", totalElectronicsValue);

// ========================================
// 16. PRACTICAL EXAMPLES
// ========================================

console.log("\n--- PRACTICAL EXAMPLES ---");

// Example 1: E-commerce price calculation
let cart = [
    { item: "Laptop", price: 999, quantity: 1 },
    { item: "Mouse", price: 25, quantity: 2 },
    { item: "Keyboard", price: 75, quantity: 1 }
];

let subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
let tax = subtotal * 0.08;
let shipping = subtotal > 1000 ? 0 : 25;
let total = subtotal + tax + shipping;

console.log("E-commerce calculation:");
console.log("Subtotal:", subtotal);
console.log("Tax:", tax);
console.log("Shipping:", shipping);
console.log("Total:", total);

// Example 2: User validation
let userData = {
    username: "john_doe",
    email: "john@example.com",
    age: 25,
    password: "secret123"
};

let validationRules = {
    username: (username) => username.length >= 3 && username.length <= 20,
    email: (email) => email.includes("@") && email.includes("."),
    age: (age) => age >= 18 && age <= 120,
    password: (password) => password.length >= 8
};

let validationResults = Object.keys(validationRules).map(field => ({
    field,
    isValid: validationRules[field](userData[field])
}));

console.log("User validation results:", validationResults);

// Example 3: Data transformation
let rawData = [
    { id: 1, name: "Alice", score: 85, grade: "B" },
    { id: 2, name: "Bob", score: 92, grade: "A" },
    { id: 3, name: "Charlie", score: 78, grade: "C" }
];

let transformedData = rawData
    .filter(student => student.score >= 80)
    .map(student => ({
        ...student,
        status: student.score >= 90 ? "Excellent" : "Good",
        percentage: (student.score / 100) * 100
    }))
    .sort((a, b) => b.score - a.score);

console.log("Transformed data:", transformedData);

// Example 4: Configuration management
let defaultConfig = {
    theme: "light",
    language: "en",
    notifications: true,
    autoSave: true
};

let userPreferences = {
    theme: "dark",
    notifications: false
};

let mergedConfig = {
    ...defaultConfig,
    ...userPreferences,
    lastUpdated: new Date().toISOString()
};

console.log("Merged configuration:", mergedConfig);

console.log("\n=== End of Expressions Examples ===");