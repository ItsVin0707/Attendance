document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    const nameInput = document.getElementById('registerName');
    const emailInput = document.getElementById('registerEmail');
    const passwordInput = document.getElementById('registerPassword');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const nameError = document.getElementById('registerNameError');
    const emailError = document.getElementById('registerEmailError');
    const passwordError = document.getElementById('registerPasswordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');

    registerForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        const confirmPassword = confirmPasswordInput.value.trim();
        let isValid = true;

        // Basic validation (add more robust checks)
        if (!name) {
            nameError.textContent = 'Please enter your full name.';
            isValid = false;
        } else {
            nameError.textContent = '';
        }

        if (!email) {
            emailError.textContent = 'Please enter your email.';
            isValid = false;
        } else if (!isValidEmail(email)) {
            emailError.textContent = 'Please enter a valid email address.';
            isValid = false;
        } else {
            emailError.textContent = '';
        }

        if (!password) {
            passwordError.textContent = 'Please enter a password.';
            isValid = false;
        } else if (password.length < 6) {
            passwordError.textContent = 'Password must be at least 6 characters long.';
            isValid = false;
        } else {
            passwordError.textContent = '';
        }

        if (password !== confirmPassword) {
            confirmPasswordError.textContent = 'Passwords do not match.';
            isValid = false;
        } else {
            confirmPasswordError.textContent = '';
        }

        if (isValid) {
            // Simulate registration (replace with your actual backend logic)
            const newUser = { name, email, password };
            const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
            storedUsers.push(newUser);
            localStorage.setItem('users', JSON.stringify(storedUsers));

            Swal.fire({
                icon: 'success',
                title: 'Registration Successful!',
                text: 'You can now log in.',
                showConfirmButton: false,
                timer: 1500
            }).then(() => {
                window.location.href = 'log-in.html'; // Redirect to login page
            });
        }
    });

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});