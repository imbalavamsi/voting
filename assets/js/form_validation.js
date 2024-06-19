document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault();

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var phone = document.getElementById('phone').value;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    var phonePattern = /^\d{3}-\d{3}-\d{4}$/;

    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (!passwordPattern.test(password)) {
        alert('Password must be at least 8 characters long and include a lowercase letter, an uppercase letter, a number, and a special character.');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    if (!phonePattern.test(phone)) {
        alert('Please enter a valid phone number in the format 123-456-7890.');
        return;
    }

    alert('Sign-up successful!');
});
