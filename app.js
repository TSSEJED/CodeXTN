
// Modal handling
const signupBtn = document.getElementById('signup-btn');
const loginBtn = document.getElementById('login-btn');
const closeSignup = document.getElementById('close-signup');
const closeLogin = document.getElementById('close-login');
const signupModal = document.getElementById('signup-modal');
const loginModal = document.getElementById('login-modal');

// Show signup modal
signupBtn.addEventListener('click', () => {
  signupModal.style.display = 'block';
});

// Show login modal
loginBtn.addEventListener('click', () => {
  loginModal.style.display = 'block';
});

// Close signup modal
closeSignup.addEventListener('click', () => {
  signupModal.style.display = 'none';
});

// Close login modal
closeLogin.addEventListener('click', () => {
  loginModal.style.display = 'none';
});

// Form submission for signup
document.getElementById('signup-form').addEventListener('submit', async (event) => {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('/api/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, email, password }),
  });

  const result = await response.json();
  alert(result.message);
  signupModal.style.display = 'none';
});

// Form submission for login
document.getElementById('login-form').addEventListener('submit', async (event) => {
  event.preventDefault();

  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  const response = await fetch('/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  const result = await response.json();
  if (result.token) {
    alert('Login successful!');
    localStorage.setItem('auth_token', result.token);
  } else {
    alert(result.message);
  }
  loginModal.style.display = 'none';
});
