// logout.js

// Log out user by clearing the role from localStorage
localStorage.removeItem('userRole');
window.location.href = 'login.html'; // Redirect to login page
