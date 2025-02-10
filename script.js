document.addEventListener("DOMContentLoaded", function () {
    const loginModal = document.getElementById("loginModal");
    const registerModal = document.getElementById("registerModal");
    const forgotPasswordModal = document.getElementById("forgotPasswordModal");
    const newPasswordModal = document.getElementById("newPasswordModal");
    const adminVerificationModal = document.getElementById("adminVerificationModal");

    const loginBtn = document.getElementById("loginBtn");
    const closeLoginModal = document.getElementById("closeLoginModal");
    const openRegisterBtn = document.getElementById("openRegister");
    const forgotPasswordBtn = document.getElementById("forgotPasswordBtn");
    const nextForgotPasswordBtn = document.querySelector(".btn-next");
    const registerRedirectBtn = registerModal.querySelector(".btn-register"); 
    const resetPasswordBtn = newPasswordModal.querySelector(".btn-login"); 
    const getStartedBtn = document.querySelector(".btn"); 
    const loginSubmitBtn = loginModal.querySelector(".btn-login"); 
    const closeButtons = document.querySelectorAll(".close");
    
    const verifyAdminBtn = document.getElementById("verifyAdminBtn");
    const adminOtpInput = document.getElementById("adminOtpInput");

    // Sidebar Navigation
    const sidebarLinks = document.querySelectorAll(".sidebar nav ul li a");
    sidebarLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetPage = this.getAttribute("href");
            if (targetPage) {
                window.location.href = targetPage;
            }
        });
    });

    // Open Login Modal from "GET STARTED" Button
    getStartedBtn.addEventListener("click", function (event) {
        event.preventDefault();
        loginModal.style.display = "flex";
    });

    // Open Login Modal
    loginBtn.addEventListener("click", function (event) {
        event.preventDefault();
        loginModal.style.display = "flex";
    });

    closeLoginModal.addEventListener("click", function () {
        loginModal.style.display = "none";
    });

    // Open Register Modal from Login Modal
    openRegisterBtn.addEventListener("click", function (event) {
        event.preventDefault();
        loginModal.style.display = "none";
        registerModal.style.display = "flex";
    });

    // Open Forgot Password Modal from Login Modal
    forgotPasswordBtn.addEventListener("click", function (event) {
        event.preventDefault();
        loginModal.style.display = "none";
        forgotPasswordModal.style.display = "flex";
    });

    // Proceed to New Password Modal from Forgot Password Modal
    nextForgotPasswordBtn.addEventListener("click", function (event) {
        event.preventDefault();
        forgotPasswordModal.style.display = "none";
        newPasswordModal.style.display = "flex";
    });
    
    // Redirect to Login when Register is clicked in Register Modal
    registerRedirectBtn.addEventListener("click", function (event) {
        event.preventDefault();
        registerModal.style.display = "none";
        loginModal.style.display = "flex";
    });

    // Redirect to Login when Reset Password is clicked in New Password Modal
    resetPasswordBtn.addEventListener("click", function (event) {
        event.preventDefault();
        newPasswordModal.style.display = "none";
        loginModal.style.display = "flex";
    });

    // Redirect to Admin Verification when Login is clicked
    loginSubmitBtn.addEventListener("click", function (event) {
        event.preventDefault();
        loginModal.style.display = "none";
        adminVerificationModal.style.display = "flex";
    });

    // Redirect to Dashboard when clicking Login in Admin Verification Modal
    verifyAdminBtn.addEventListener("click", function (event) {
        event.preventDefault();
        
        // OPTIONAL: Check if OTP is entered before redirecting
        if (adminOtpInput.value.trim() !== "") {
            window.location.href = "dashboard.html"; // Redirect to dashboard
        } else {
            alert("Please enter the OTP to proceed.");
        }
    });

    // Close Modals when clicking close buttons
    closeButtons.forEach(button => {
        button.addEventListener("click", function () {
            this.closest(".modal").style.display = "none";
        });
    });

    // Close Modals when clicking outside
    window.addEventListener("click", function (event) {
        if (event.target.classList.contains("modal")) {
            event.target.style.display = "none";
        }
    });
});
