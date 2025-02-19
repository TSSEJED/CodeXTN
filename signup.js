// signup.js

// Handle form submission for signing up a new user
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('new-username').value;
    const password = document.getElementById('new-password').value;

    // Simple validation (can be more complex)
    if (username && password) {
        // Save user to localStorage (for demo purposes, in real apps, use a backend)
        let users = JSON.parse(localStorage.getItem('users')) || {};
        users[username] = { password: password, role: 'user' };

        localStorage.setItem('users', JSON.stringify(users));
        alert('Signup successful! Please log in.');
        window.location.href = 'login.html'; // Redirect to login page
    } else {
        alert('Please enter a username and password.');
    }
});
