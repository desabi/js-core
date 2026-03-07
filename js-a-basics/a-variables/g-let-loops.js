// iteration 
const usernames = ["alex99", "sarah_dev", "coder_mike"];

// 'i' changes from 0 to 1 to 2, so it MUST be declared with let
for (let i = 0; i < usernames.length; i++) {
  console.log("Sending newsletter to: " + usernames[i]);
}

// acumulator
const cartItems = [15.99, 22.50, 5.00];
let cartTotal = 0; // Starts at 0, but will change

for (let i = 0; i < cartItems.length; i++) {
  cartTotal = cartTotal + cartItems[i]; // Updating the value
}

console.log("Your total is: $" + cartTotal); // Output: Your total is: $43.49

