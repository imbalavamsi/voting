document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault();
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    var passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#.\-?!@$%^&*])[A-Za-z\d#.\-?!@$%^&*]{8,}$/;

    if (!passwordPattern.test(password)) {
        alert('Password must be at least 8 characters long, include a lowercase letter, an uppercase letter, a number, and a special character.');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    // If validation passes, you can submit the form or perform any other actions
    alert('Sign-up successful!');
});
