document.addEventListener("DOMContentLoaded", () => {
  const passwordInput = document.getElementById("login-password");
  const togglePassword = document.getElementById("toggle-password");
  const eyeOpen = document.getElementById("eye-open-svg");
  const eyeClosed = document.getElementById("eye-closed-svg");

  if (togglePassword && passwordInput) {
    togglePassword.addEventListener("click", function () {
      const isPassword = passwordInput.getAttribute("type") === "password";

      // 1. Chuyển đổi thuộc tính type
      passwordInput.setAttribute("type", isPassword ? "text" : "password");

      // 2. Chuyển đổi icon (Ẩn/Hiện SVG)
      if (isPassword) {
        // Hiện mật khẩu -> Hiện Mắt Mở, Ẩn Mắt Đóng
        eyeOpen.classList.remove("hidden");
        eyeClosed.classList.add("hidden");
      } else {
        // Ẩn mật khẩu -> Hiện Mắt Đóng, Ẩn Mắt Mở
        eyeOpen.classList.add("hidden");
        eyeClosed.classList.remove("hidden");
      }
    });
  }
});
