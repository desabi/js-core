let isLoggedIn = false;
let currentUser = null;
let userRole = "guest";

function login(username, role) {
    isLoggedIn = true;
    currentUser = username;
    userRole = role;
    console.log(`Welcome, ${currentUser}! Role: ${userRole}`);
}

function logout() {
    isLoggedIn = false;
    currentUser = null;
    userRole = "guest";
    console.log("You have been logged out.");
}

function checkAccess(requiredRole) {
    console.log(`User Role: ${userRole}.`);

    if (!isLoggedIn) {
        console.log("Access denied. Please log in.");
        return;
    }

    if (userRole === requiredRole || userRole === "admin") {
        console.log(`Access granted to: ${currentUser}.`);
    } else {
        console.log(`Access denied. You need the '${requiredRole}' role.`);
    }
}

login("Alice", "admin");
//login("Alice", "editor");
checkAccess("editor");
logout();
checkAccess("editor");