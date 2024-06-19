

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    if (username === '' || password === '') {
        errorMessage.textContent = 'Both fields are required.';
        errorMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'none';

        if (username === 'hridoy' && password === '6969') {
            localStorage.setItem('isLoggedIn', 'true');
            alert("Login Success")
            window.location.href = 'rh.html';
        } else {
            alert("Login Failed")
            errorMessage.textContent = 'Invalid username or password.';
            errorMessage.style.display = 'block';
        }
    }
});
