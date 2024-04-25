function register() {
    var email = document.getElementById("email").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Perform registration logic here (e.g., send data to server)
    console.log("Email: " + email);
    console.log("Username: " + username);
    console.log("Password: " + password);
}

function togglePassword() {
    var passwordInput = document.getElementById("password");
    var passwordToggle = document.querySelector(".password-toggle");
    var eyeIcon = document.getElementById("eye-icon");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash");
    } else {
        passwordInput.type = "password";
        eyeIcon.classList.remove("fa-eye-slash");
        eyeIcon.classList.add("fa-eye");
    }
}
