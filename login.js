// login.js

// Simulate a simple login (replace with actual backend logic later)
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get username and password input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulate an admin and user for the example
    const users = {
        'admin': { password: 'admin123', role: 'admin' },
        'user1': { password: 'user123', role: 'user' }
    };

    // Check if the username exists and password is correct
    if (users[username] && users[username].password === password) {
        // Store user role in localStorage
        localStorage.setItem('userRole', users[username].role);
        // Redirect to the dashboard (or homepage)
        window.location.href = 'dashboard.html'; // or 'index.html'
    } else {
        alert('Invalid login credentials.');
    }
});
