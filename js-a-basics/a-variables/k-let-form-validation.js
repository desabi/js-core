function validateRegistrationForm(username, email, password) {
    
    let isValid = true;
    let errorMessge = "";

    if (username.length < 3) {
        isValid = false;
        errorMessge += "Username must be at least 3 characters.\n";
    }
    
    if (!email.includes("@") || !email.includes(".")) {
        isValid = false;
        errorMessge += "Please enter a valid email address.\n";
    }

    if (password.length < 8) {
        isValid = false;
        errorMessge += "Password must be at least 8 characters.\n";
    }

    if (isValid) {
        console.log("Form is valid. Submitting...");
    } else {
        console.log("Form has errors:\n" + errorMessge);
    }

    return isValid;
}

validateRegistrationForm("Alice", "alice@example.com", "securePass123");
validateRegistrationForm("Al", "not-an-email", "123");