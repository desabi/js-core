// You cannot use const in a traditional for loop counter, 
// because the counter variable (i) is reassigned on every iteration with i++.

// ❌ Traditional for loop — const cannot be the counter

/*
for (const i = 0; i < 3; i++) {  // TypeError on 2nd iteration (i++)
  console.log(i);
}
*/

// But const works perfectly in for...of and for...in loops, 
// because a new binding is created on each iteration.

// for...of — a fresh const binding per iteration
const names = ["Alice", "Bob", "Charlie"];
for (const name of names) {
  console.log(name); // Output: Alice, then Bob, then Charlie
}

// for...of — a fresh const binding per iteration
const nums = [10, 20, 30];
for (const num of nums) {
  console.log(num);  // 10, 20, 30
}

// for...in — a fresh const binding per iteration
const numbers = [10, 20, 30];
for (const number in numbers) {
  console.log(number); // Output: 0, then 1, then 2 (the indices)
}

const user = {
  name: "Alice",
  age: 30,
  city: "New York"
};

for (const key in user) {
  console.log(key + ": " + user[key]);
  // Output: 
  // name: Alice
  // age: 30
  // city: New York
}

// forEach — a fresh const binding per iteration
nums.forEach(num => {
    const doubled = num * 2; 
    console.log(doubled); // 20, 40, 60
});