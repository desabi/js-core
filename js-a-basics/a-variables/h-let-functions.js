
let isDataLoading = false;

function fetchUserData() {
  isDataLoading = true; // Update state: show a loading spinner on the screen
  console.log("Loading spinner active...");

  // Simulate fetching data...
  setTimeout(() => {
    isDataLoading = false; // Update state: hide the spinner
    console.log("Data loaded! Spinner hidden.");
  }, 2000);
}

fetchUserData();

function calculateShipping(countryCode) {
  let shippingCost; // Declared here so it's accessible to the whole function

  if (countryCode === "US") {
    shippingCost = 5.00;
  } else if (countryCode === "MX") {
    shippingCost = 8.00;
  } else {
    shippingCost = 20.00; // International
  }

  // We can safely use the variable here
  console.log("Your shipping cost will be $" + shippingCost);
}

calculateShipping("MX"); // Output: Your shipping cost will be $8.00