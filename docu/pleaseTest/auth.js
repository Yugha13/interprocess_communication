/**
 * Authentication module for the IPC demo application
 */

// Simple authentication function that checks hardcoded credentials
function authenticate(username, password) {
    // Hardcoded credentials as specified
    const validUsername = 'admin';
    const validPassword = 'admin123';
    
    return username === validUsername && password === validPassword;
}

// Function to handle login form submission
function handleLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (authenticate(username, password)) {
        // Store authentication state in session storage
        sessionStorage.setItem('authenticated', 'true');
        
        // Show the application content and hide login form
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('app-container').style.display = 'block';
    } else {
        // Show error message
        document.getElementById('login-error').style.display = 'block';
    }
    
    // Prevent form submission
    return false;
}

// Function to handle logout
function handleLogout() {
    // Clear authentication state
    sessionStorage.removeItem('authenticated');
    
    // Show login form and hide application content
    document.getElementById('login-container').style.display = 'flex';
    document.getElementById('app-container').style.display = 'none';
    
    // Clear form fields
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    document.getElementById('login-error').style.display = 'none';
}

// Function to check if user is authenticated on page load
function checkAuthentication() {
    const isAuthenticated = sessionStorage.getItem('authenticated') === 'true';
    
    // Show/hide elements based on authentication state
    document.getElementById('login-container').style.display = isAuthenticated ? 'none' : 'flex';
    document.getElementById('app-container').style.display = isAuthenticated ? 'block' : 'none';
}