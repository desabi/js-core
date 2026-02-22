console.log("=== Data Types in JavaScript ===");

// ========================================
// 1. PRIMITIVE DATA TYPES
// ========================================

console.log("\n--- PRIMITIVE DATA TYPES ---");

// 1.1 Number
console.log("\n--- Number Type ---");
let integer = 42;
let float = 3.14159;
let negative = -17;
let scientific = 1.23e5; // 123000
let infinity = Infinity;
let notANumber = NaN;

console.log("Integer:", integer, "Type:", typeof integer);
console.log("Float:", float, "Type:", typeof float);
console.log("Negative:", negative, "Type:", typeof negative);
console.log("Scientific:", scientific, "Type:", typeof scientific);
console.log("Infinity:", infinity, "Type:", typeof infinity);
console.log("NaN:", notANumber, "Type:", typeof notANumber);

// Number operations
console.log("Math operations:", 10 + 5, 10 - 5, 10 * 5, 10 / 5);
console.log("Modulo:", 17 % 5);
console.log("Power:", 2 ** 3);

// 1.2 String
console.log("\n--- String Type ---");
let singleQuotes = 'Hello World';
let doubleQuotes = "JavaScript is awesome";
let templateLiteral = `The sum is ${integer + float}`;
let multiLine = `This is a
multi-line string`;

console.log("Single quotes:", singleQuotes, "Type:", typeof singleQuotes);
console.log("Double quotes:", doubleQuotes, "Type:", typeof doubleQuotes);
console.log("Template literal:", templateLiteral, "Type:", typeof templateLiteral);
console.log("Multi-line:", multiLine);

// String methods
console.log("Length:", singleQuotes.length);
console.log("Uppercase:", singleQuotes.toUpperCase());
console.log("Lowercase:", singleQuotes.toLowerCase());
console.log("Substring:", singleQuotes.substring(0, 5));
console.log("Includes:", singleQuotes.includes("World"));

// 1.3 Boolean
console.log("\n--- Boolean Type ---");
let isTrue = true;
let isFalse = false;
let truthyValue = Boolean(1);
let falsyValue = Boolean(0);

console.log("True:", isTrue, "Type:", typeof isTrue);
console.log("False:", isFalse, "Type:", typeof isFalse);
console.log("Truthy from 1:", truthyValue, "Type:", typeof truthyValue);
console.log("Falsy from 0:", falsyValue, "Type:", typeof falsyValue);

// Falsy values in JavaScript
console.log("Falsy values:");
console.log("false:", Boolean(false));
console.log("0:", Boolean(0));
console.log("'' (empty string):", Boolean(''));
console.log("null:", Boolean(null));
console.log("undefined:", Boolean(undefined));
console.log("NaN:", Boolean(NaN));

// 1.4 Undefined
console.log("\n--- Undefined Type ---");
let undefinedVariable;
let explicitlyUndefined = undefined;

console.log("Undefined variable:", undefinedVariable, "Type:", typeof undefinedVariable);
console.log("Explicitly undefined:", explicitlyUndefined, "Type:", typeof explicitlyUndefined);

// 1.5 Null
console.log("\n--- Null Type ---");
let nullValue = null;

console.log("Null value:", nullValue, "Type:", typeof nullValue);
console.log("Note: typeof null returns 'object' - this is a known JavaScript quirk!");

// 1.6 Symbol (ES6)
console.log("\n--- Symbol Type ---");
let symbol1 = Symbol("description");
let symbol2 = Symbol("description");
let symbol3 = Symbol();

console.log("Symbol 1:", symbol1, "Type:", typeof symbol1);
console.log("Symbol 2:", symbol2, "Type:", typeof symbol2);
console.log("Symbol 3:", symbol3, "Type:", typeof symbol3);
console.log("Are symbols equal?", symbol1 === symbol2); // false - symbols are unique

// 1.7 BigInt (ES2020)
console.log("\n--- BigInt Type ---");
let bigInt = 9007199254740991n;
let bigIntFromString = BigInt("9007199254740991");

console.log("BigInt:", bigInt, "Type:", typeof bigInt);
console.log("BigInt from string:", bigIntFromString, "Type:", typeof bigIntFromString);
console.log("BigInt operations:", bigInt + 1n);

// ========================================
// 2. OBJECT DATA TYPES
// ========================================

console.log("\n--- OBJECT DATA TYPES ---");

// 2.1 Object
console.log("\n--- Object Type ---");
let person = {
    name: "John Doe",
    age: 30,
    isStudent: false,
    hobbies: ["reading", "coding"],
    address: {
        street: "123 Main St",
        city: "New York"
    },
    greet: function() {
        return `Hello, my name is ${this.name}`;
    }
};

console.log("Person object:", person);
console.log("Type:", typeof person);
console.log("Name:", person.name);
console.log("Age:", person.age);
console.log("Greet method:", person.greet());

// Object methods
console.log("Keys:", Object.keys(person));
console.log("Values:", Object.values(person));
console.log("Entries:", Object.entries(person));

// 2.2 Array
console.log("\n--- Array Type ---");
let fruits = ["apple", "banana", "orange"];
let mixedArray = [1, "hello", true, { key: "value" }];
let emptyArray = [];

console.log("Fruits array:", fruits, "Type:", typeof fruits);
console.log("Is array?", Array.isArray(fruits));
console.log("Mixed array:", mixedArray);
console.log("Empty array:", emptyArray);

// Array methods
console.log("Length:", fruits.length);
console.log("First element:", fruits[0]);
console.log("Push result:", fruits.push("grape"));
console.log("After push:", fruits);
console.log("Pop result:", fruits.pop());
console.log("After pop:", fruits);

// 2.3 Function
console.log("\n--- Function Type ---");
function greet(name) {
    return `Hello, ${name}!`;
}

let arrowFunction = (x, y) => x + y;
let functionExpression = function(a, b) {
    return a * b;
};

console.log("Function:", greet, "Type:", typeof greet);
console.log("Arrow function:", arrowFunction, "Type:", typeof arrowFunction);
console.log("Function expression:", functionExpression, "Type:", typeof functionExpression);

console.log("Function call:", greet("Alice"));
console.log("Arrow function call:", arrowFunction(5, 3));
console.log("Function expression call:", functionExpression(4, 6));

// 2.4 Date
console.log("\n--- Date Type ---");
let currentDate = new Date();
let specificDate = new Date("2023-12-25");
let dateFromTimestamp = new Date(1703123456789);

console.log("Current date:", currentDate, "Type:", typeof currentDate);
console.log("Specific date:", specificDate);
console.log("Date from timestamp:", dateFromTimestamp);

// Date methods
console.log("Year:", currentDate.getFullYear());
console.log("Month:", currentDate.getMonth() + 1); // Months are 0-indexed
console.log("Day:", currentDate.getDate());
console.log("ISO string:", currentDate.toISOString());

// 2.5 RegExp
console.log("\n--- RegExp Type ---");
let regex1 = /hello/;
let regex2 = new RegExp("world", "i");

console.log("Regex literal:", regex1, "Type:", typeof regex1);
console.log("Regex constructor:", regex2, "Type:", typeof regex2);

// RegExp methods
console.log("Test method:", regex1.test("hello world"));
console.log("Test method (case insensitive):", regex2.test("WORLD"));

// 2.6 Map
console.log("\n--- Map Type ---");
let userMap = new Map();
userMap.set("name", "Alice");
userMap.set("age", 25);
userMap.set(1, "one");

console.log("Map:", userMap, "Type:", typeof userMap);
console.log("Is Map?", userMap instanceof Map);
console.log("Get value:", userMap.get("name"));
console.log("Has key:", userMap.has("age"));
console.log("Size:", userMap.size);

// 2.7 Set
console.log("\n--- Set Type ---");
let uniqueNumbers = new Set([1, 2, 2, 3, 3, 4]);
let uniqueStrings = new Set(["apple", "banana", "apple"]);

console.log("Set of numbers:", uniqueNumbers, "Type:", typeof uniqueNumbers);
console.log("Is Set?", uniqueNumbers instanceof Set);
console.log("Set of strings:", uniqueStrings);
console.log("Size:", uniqueNumbers.size);

// ========================================
// 3. TYPE CHECKING AND CONVERSION
// ========================================

console.log("\n--- TYPE CHECKING AND CONVERSION ---");

// Type checking
console.log("Type checking examples:");
console.log("typeof 42:", typeof 42);
console.log("typeof 'hello':", typeof 'hello');
console.log("typeof true:", typeof true);
console.log("typeof undefined:", typeof undefined);
console.log("typeof null:", typeof null);
console.log("typeof {}:", typeof {});
console.log("typeof []:", typeof []);
console.log("typeof function(){}:", typeof function(){});

// Type conversion
console.log("\nType conversion examples:");
console.log("String to Number:", Number("123"));
console.log("String to Number (invalid):", Number("abc"));
console.log("Number to String:", String(456));
console.log("Boolean to Number:", Number(true));
console.log("Boolean to Number:", Number(false));

// Truthy/Falsy conversion
console.log("\nTruthy/Falsy conversion:");
console.log("Boolean('hello'):", Boolean('hello'));
console.log("Boolean(''):", Boolean(''));
console.log("Boolean(0):", Boolean(0));
console.log("Boolean(1):", Boolean(1));
console.log("Boolean({}):", Boolean({}));
console.log("Boolean([]):", Boolean([]));

// ========================================
// 4. PRACTICAL EXAMPLES
// ========================================

console.log("\n--- PRACTICAL EXAMPLES ---");

// Example 1: User profile
let userProfile = {
    id: 1,
    username: "johndoe",
    email: "john@example.com",
    isActive: true,
    lastLogin: new Date(),
    preferences: {
        theme: "dark",
        language: "en"
    },
    tags: ["developer", "javascript", "web"]
};

console.log("User profile:", userProfile);

// Example 2: Shopping cart
let shoppingCart = new Map();
shoppingCart.set("laptop", { name: "MacBook Pro", price: 1299, quantity: 1 });
shoppingCart.set("mouse", { name: "Wireless Mouse", price: 29, quantity: 2 });

console.log("Shopping cart:", shoppingCart);

// Example 3: Form validation
let formData = {
    username: "alice123",
    email: "alice@example.com",
    age: 25,
    agreeToTerms: true,
    interests: new Set(["coding", "reading", "music"])
};

console.log("Form data:", formData);

console.log("\n=== End of Data Types Examples ===");