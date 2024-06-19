document.getElementById('signInForm').addEventListener('submit', function (e) {
    e.preventDefault();
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Mock validation logic for demonstration
    if (email === 'user@example.com' && password === 'Password1!') {
        var username = email.split('@')[0];
        window.location.href = `welcome.html?username=${username}`;
    } else {
        alert('Invalid email or password');
    }
});
