// Shipping cost calculator
function calculateShipping(orderTotal, membershipLevel) {
  let shippingCost;

  if (membershipLevel === "premium") {
    shippingCost = 0;
  } else if (orderTotal >= 100) {
    shippingCost = 0;
  } else if (orderTotal >= 50) {
    shippingCost = 4.99;
  } else {
    shippingCost = 9.99;
  }

  console.log(`Shipping: $${shippingCost}`);
  return shippingCost;
}

calculateShipping(10, "premium"); // Shipping: $0
calculateShipping(200, "basic");  // Shipping: $0
calculateShipping(75, "basic");   // Shipping: $4.99
calculateShipping(30, "basic");   // Shipping: $9.99


