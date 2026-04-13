// Usage: Only when you need HUGE integers.

// Creation: Append 'n'
const bigNumber = 9007199254740993n;
const fromRegular = BigInt(123);   // 123n

// You CANNOT mix BigInt and Number in math
// console.log(bigNumber + 5);   // TypeError
console.log(bigNumber + 5n);  // 9007199254740998n

// Division truncates towards zero (no decimals)
console.log(5n / 2n);  // 2n

// Edge Cases 

// JSON.stringify cannot handle BigInt
const data = { id: 12345678901234567890n };
// JSON.stringify(data);           // TypeError: Do not know how to serialize a BigInt
// Fix: Convert to string first
data.id = data.id.toString();
JSON.stringify(data);   