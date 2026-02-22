console.log("=== JavaScript Operators - Comprehensive Guide ===");

// ========================================
// 1. ARITHMETIC OPERATORS
// ========================================

console.log("\n--- ARITHMETIC OPERATORS ---");

let a = 10;
let b = 3;

console.log("Basic arithmetic operations:");
console.log("a =", a, "b =", b);
console.log("Addition (a + b):", a + b);
console.log("Subtraction (a - b):", a - b);
console.log("Multiplication (a * b):", a * b);
console.log("Division (a / b):", a / b);
console.log("Modulo/Remainder (a % b):", a % b);
console.log("Exponentiation (a ** b):", a ** b);

// Increment and Decrement
console.log("\nIncrement and Decrement:");
let counter = 5;
console.log("Original counter:", counter);
console.log("Pre-increment (++counter):", ++counter);
console.log("Post-increment (counter++):", counter++);
console.log("After post-increment:", counter);
console.log("Pre-decrement (--counter):", --counter);
console.log("Post-decrement (counter--):", counter--);
console.log("After post-decrement:", counter);

// String concatenation
console.log("\nString concatenation:");
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log("Full name:", fullName);
console.log("Age:", 25 + " years old");
console.log("String + number:", "5" + 3); // "53" (string concatenation)
console.log("Number + string:", 5 + "3"); // "53" (string concatenation)

// ========================================
// 2. ASSIGNMENT OPERATORS
// ========================================

console.log("\n--- ASSIGNMENT OPERATORS ---");

let x = 10;
console.log("Initial x:", x);

x += 5; // Same as x = x + 5
console.log("After x += 5:", x);

x -= 3; // Same as x = x - 3
console.log("After x -= 3:", x);

x *= 2; // Same as x = x * 2
console.log("After x *= 2:", x);

x /= 4; // Same as x = x / 4
console.log("After x /= 4:", x);

x %= 3; // Same as x = x % 3
console.log("After x %= 3:", x);

x **= 2; // Same as x = x ** 2
console.log("After x **= 2:", x);

// String assignment operators
let message = "Hello";
message += " World"; // Same as message = message + " World"
console.log("Message after +=:", message);

// ========================================
// 3. COMPARISON OPERATORS
// ========================================

console.log("\n--- COMPARISON OPERATORS ---");

let num1 = 5;
let num2 = "5";
let num3 = 10;

console.log("Comparison examples:");
console.log("num1 =", num1, "num2 =", num2, "num3 =", num3);

// Equality operators
console.log("\nEquality operators:");
console.log("num1 == num2 (loose equality):", num1 == num2); // true (type coercion)
console.log("num1 === num2 (strict equality):", num1 === num2); // false (no type coercion)
console.log("num1 != num2 (loose inequality):", num1 != num2); // false
console.log("num1 !== num2 (strict inequality):", num1 !== num2); // true

// Relational operators
console.log("\nRelational operators:");
console.log("num1 > num3:", num1 > num3);
console.log("num1 < num3:", num1 < num3);
console.log("num1 >= num3:", num1 >= num3);
console.log("num1 <= num3:", num1 <= num3);

// String comparison
console.log("\nString comparison:");
console.log("'apple' < 'banana':", 'apple' < 'banana'); // true (lexicographic)
console.log("'zebra' > 'apple':", 'zebra' > 'apple'); // true

// ========================================
// 4. LOGICAL OPERATORS
// ========================================

console.log("\n--- LOGICAL OPERATORS ---");

let isLoggedIn = true;
let hasPermission = false;
let isAdmin = true;

console.log("Logical operators:");
console.log("isLoggedIn =", isLoggedIn);
console.log("hasPermission =", hasPermission);
console.log("isAdmin =", isAdmin);

// AND operator (&&)
console.log("\nAND operator (&&):");
console.log("isLoggedIn && hasPermission:", isLoggedIn && hasPermission);
console.log("isLoggedIn && isAdmin:", isLoggedIn && isAdmin);

// OR operator (||)
console.log("\nOR operator (||):");
console.log("isLoggedIn || hasPermission:", isLoggedIn || hasPermission);
console.log("hasPermission || isAdmin:", hasPermission || isAdmin);

// NOT operator (!)
console.log("\nNOT operator (!):");
console.log("!isLoggedIn:", !isLoggedIn);
console.log("!hasPermission:", !hasPermission);
console.log("!!isAdmin:", !!isAdmin); // Double negation

// Short-circuit evaluation
console.log("\nShort-circuit evaluation:");
console.log("false && console.log('This won\'t execute')");
false && console.log("This won't execute");

console.log("true || console.log('This won\'t execute')");
true || console.log("This won't execute");

// Practical example
let userRole = "admin";
let canAccess = isLoggedIn && (userRole === "admin" || hasPermission);
console.log("Can access:", canAccess);

// ========================================
// 5. BITWISE OPERATORS
// ========================================

console.log("\n--- BITWISE OPERATORS ---");

let bit1 = 5; // 101 in binary
let bit2 = 3; // 011 in binary

console.log("Bitwise operations:");
console.log("bit1 =", bit1, "(101 in binary)");
console.log("bit2 =", bit2, "(011 in binary)");

console.log("AND (&):", bit1 & bit2); // 001 = 1
console.log("OR (|):", bit1 | bit2); // 111 = 7
console.log("XOR (^):", bit1 ^ bit2); // 110 = 6
console.log("NOT (~):", ~bit1); // -6 (two's complement)
console.log("Left shift (<<):", bit1 << 1); // 1010 = 10
console.log("Right shift (>>):", bit1 >> 1); // 010 = 2
console.log("Zero-fill right shift (>>>):", bit1 >>> 1); // 010 = 2

// Practical bitwise example - flags
const FLAG_READ = 1;    // 001
const FLAG_WRITE = 2;   // 010
const FLAG_EXECUTE = 4; // 100

let permissions = FLAG_READ | FLAG_WRITE; // 011 = 3
console.log("\nPermission flags example:");
console.log("Permissions:", permissions);
console.log("Can read:", (permissions & FLAG_READ) !== 0);
console.log("Can write:", (permissions & FLAG_WRITE) !== 0);
console.log("Can execute:", (permissions & FLAG_EXECUTE) !== 0);

// ========================================
// 6. CONDITIONAL (TERNARY) OPERATOR
// ========================================

console.log("\n--- CONDITIONAL (TERNARY) OPERATOR ---");

let age = 18;
let canVote = age >= 18 ? "Yes" : "No";
console.log("Age:", age, "Can vote:", canVote);

// Nested ternary
let score = 85;
let grade = score >= 90 ? "A" : 
           score >= 80 ? "B" : 
           score >= 70 ? "C" : 
           score >= 60 ? "D" : "F";
console.log("Score:", score, "Grade:", grade);

// Practical example
let userType = "premium";
let discount = userType === "premium" ? 0.2 : userType === "regular" ? 0.1 : 0;
console.log("User type:", userType, "Discount:", discount * 100 + "%");

// ========================================
// 7. NULLISH COALESCING OPERATOR (??)
// ========================================

console.log("\n--- NULLISH COALESCING OPERATOR (??) ---");

let defaultValue = "default";
let nullValue = null;
let undefinedValue = undefined;
let zeroValue = 0;
let emptyString = "";

console.log("Nullish coalescing examples:");
console.log("nullValue ?? defaultValue:", nullValue ?? defaultValue);
console.log("undefinedValue ?? defaultValue:", undefinedValue ?? defaultValue);
console.log("zeroValue ?? defaultValue:", zeroValue ?? defaultValue); // 0 (falsy but not nullish)
console.log("emptyString ?? defaultValue:", emptyString ?? defaultValue); // "" (falsy but not nullish)

// Comparison with OR operator
console.log("\nComparison with OR operator:");
console.log("nullValue || defaultValue:", nullValue || defaultValue);
console.log("zeroValue || defaultValue:", zeroValue || defaultValue); // "default" (OR treats 0 as falsy)
console.log("zeroValue ?? defaultValue:", zeroValue ?? defaultValue); // 0 (?? only checks for null/undefined)

// ========================================
// 8. OPTIONAL CHAINING OPERATOR (?.)
// ========================================

console.log("\n--- OPTIONAL CHAINING OPERATOR (?.) ---");

let user = {
    name: "John",
    address: {
        street: "123 Main St",
        city: "New York"
    }
};

let userWithoutAddress = {
    name: "Jane"
};

console.log("Optional chaining examples:");
console.log("user.address?.street:", user.address?.street);
console.log("userWithoutAddress.address?.street:", userWithoutAddress.address?.street); // undefined, no error
console.log("user.address?.zipCode:", user.address?.zipCode); // undefined

// Without optional chaining (would cause error)
// console.log(userWithoutAddress.address.street); // TypeError: Cannot read property 'street' of undefined

// Method calls with optional chaining
let obj = {
    method: function() {
        return "Hello";
    }
};

console.log("obj.method?.():", obj.method?.());
console.log("obj.nonExistentMethod?.():", obj.nonExistentMethod?.()); // undefined, no error

// ========================================
// 9. SPREAD OPERATOR (...)
// ========================================

console.log("\n--- SPREAD OPERATOR (...) ---");

// Array spreading
let fruits = ["apple", "banana"];
let moreFruits = ["orange", "grape"];
let allFruits = [...fruits, ...moreFruits, "mango"];
console.log("All fruits:", allFruits);

// Object spreading
let person = { name: "John", age: 30 };
let address = { city: "New York", country: "USA" };
let fullPerson = { ...person, ...address, email: "john@example.com" };
console.log("Full person:", fullPerson);

// Copying arrays and objects
let originalArray = [1, 2, 3];
let copiedArray = [...originalArray];
console.log("Original array:", originalArray);
console.log("Copied array:", copiedArray);
console.log("Are they the same reference?", originalArray === copiedArray);

// ========================================
// 10. REST OPERATOR (...)
// ========================================

console.log("\n--- REST OPERATOR (...) ---");

// Function parameters
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log("Sum of 1, 2, 3:", sum(1, 2, 3));
console.log("Sum of 1, 2, 3, 4, 5:", sum(1, 2, 3, 4, 5));

// Array destructuring
let [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log("First:", first, "Second:", second, "Rest:", rest);

// Object destructuring
let { name, age: userAge, ...otherProps } = { name: "Alice", age: 25, city: "Boston", job: "Developer" };
console.log("Name:", name, "Age:", userAge, "Other properties:", otherProps);

// ========================================
// 11. PRACTICAL EXAMPLES
// ========================================

console.log("\n--- PRACTICAL EXAMPLES ---");

// Example 1: Shopping cart calculation
let cart = [
    { name: "Laptop", price: 999, quantity: 1 },
    { name: "Mouse", price: 25, quantity: 2 },
    { name: "Keyboard", price: 75, quantity: 1 }
];

let subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
let tax = subtotal * 0.08;
let shipping = subtotal > 1000 ? 0 : 25;
let total = subtotal + tax + shipping;

console.log("Shopping cart calculation:");
console.log("Subtotal:", subtotal);
console.log("Tax (8%):", tax);
console.log("Shipping:", shipping);
console.log("Total:", total);

// Example 2: User authentication logic
let userCredentials = {
    username: "john_doe",
    password: "secret123",
    isActive: true,
    lastLogin: new Date("2023-12-01")
};

let loginAttempt = {
    username: "john_doe",
    password: "secret123"
};

let isAuthenticated = userCredentials.username === loginAttempt.username &&
                     userCredentials.password === loginAttempt.password &&
                     userCredentials.isActive;

console.log("\nAuthentication example:");
console.log("Login attempt:", loginAttempt);
console.log("Is authenticated:", isAuthenticated);

// Example 3: Data validation
let formData = {
    email: "user@example.com",
    age: 25,
    agreeToTerms: true
};

let validationRules = {
    email: (email) => email.includes("@") && email.includes("."),
    age: (age) => age >= 18 && age <= 120,
    agreeToTerms: (agree) => agree === true
};

let isValid = Object.keys(validationRules).every(field => 
    validationRules[field](formData[field])
);

console.log("\nForm validation example:");
console.log("Form data:", formData);
console.log("Is valid:", isValid);

// Example 4: Configuration merging
let defaultConfig = {
    theme: "light",
    language: "en",
    notifications: true
};

let userConfig = {
    theme: "dark",
    notifications: false
};

let finalConfig = { ...defaultConfig, ...userConfig };
console.log("\nConfiguration merging:");
console.log("Default config:", defaultConfig);
console.log("User config:", userConfig);
console.log("Final config:", finalConfig);

console.log("\n=== End of Operators Examples ===");
