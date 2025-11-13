const eye = document.getElementById("hide-eye-password");
const passwordInput = document.getElementById("login-password");

const togglePasswordVisibility = () => {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    eye.classList.remove("fa-eye-slash");
    eye.classList.add("fa-eye");
  } else {
    passwordInput.type = "password";
    eye.classList.remove("fa-eye");
    eye.classList.add("fa-eye-slash");
  }
};

if (eye) {
  eye.addEventListener("click", togglePasswordVisibility);
}
