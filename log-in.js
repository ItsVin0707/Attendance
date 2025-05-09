document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const emailError = document.getElementById('emailError');
  const passwordError = document.getElementById('passwordError');
  const redirectForm = document.getElementById('redirectForm');

  loginForm.addEventListener('submit', async (event) => {
      event.preventDefault();

      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();
      let isValid = true;

      // Email validation
      if (!email) {
          emailError.textContent = 'Please enter your email.';
          isValid = false;
      } else if (!isValidEmail(email)) {
          emailError.textContent = 'Please enter a valid email address.';
          isValid = false;
      } else {
          emailError.textContent = '';
      }

      // Password validation
      if (!password) {
          passwordError.textContent = 'Please enter your password.';
          isValid = false;
      } else {
          passwordError.textContent = '';
      }

      if (isValid) {
          // Simulate login authentication (replace with your actual backend logic)
          try {
              const response = await simulateLogin(email, password);
              if (response.success) {
                  Swal.fire({
                      icon: 'success',
                      title: 'Login Successful!',
                      text: response.message,
                      showConfirmButton: false,
                      timer: 1500
                  }).then(() => {
                      // Redirect to dashboard after successful login
                      window.location.href = 'index.html'; 
                  });
              } else {
                  Swal.fire({
                      icon: 'error',
                      title: 'Login Failed',
                      text: response.message,
                  });
              }
          } catch (error) {
              console.error('Error during login:', error);
              Swal.fire({
                  icon: 'error',
                  title: 'Login Error',
                  text: 'An unexpected error occurred. Please try again later.',
              });
          }
      }
  });

  function isValidEmail(email) {
      // Basic email validation regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
  }

  async function simulateLogin(email, password) {
      // In a real application, you would send this data to your server for verification.
      // This is a client-side simulation.
      console.log('Attempting login with:', { email, password });

      // Replace this with your actual user data or API call
      const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
      const user = storedUsers.find(u => u.email === email && u.password === password);

      return new Promise(resolve => {
          setTimeout(() => {
              if (user) {
                  resolve({ success: true, message: 'Logged in successfully!' });
              } else {
                  resolve({ success: false, message: 'Invalid email or password.' });
              }
          }, 1000); // Simulate network request delay
      });
  }

  // Functions for social login (you'll need to implement the actual OAuth flow)
  window.loginWith = function(provider) {
      Swal.fire({
          title: 'Login with ' + provider,
          text: 'This feature is not fully implemented yet. It would typically involve redirecting you to ' + provider + ' for authentication.',
          icon: 'info',
      });
      console.log('Login with:', provider);
      // In a real application, you would initiate the OAuth flow here.
  };
});