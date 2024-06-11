function togglePasswordInput() {
    var passwordContainer = document.getElementById('password-container');
    if (passwordContainer.style.display === 'none' || passwordContainer.style.display === '') {
        passwordContainer.style.display = 'block';
    } else {
        passwordContainer.style.display = 'none';
    }
}
