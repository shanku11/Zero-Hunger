"use strict";
const homePage = document.querySelector(".home-page");
const donatePage = document.querySelector(".donate-page");
const availabilityPage = document.querySelector(".Availability-page");
const loginPage = document.querySelector(".login-page");
const signUpPage = document.querySelector(".signup-page");
const profilePage = document.querySelector(".profile-page");
const homeLinks = document.querySelectorAll(".home-link");
const availabilityLinks = document.querySelectorAll(".Availability-link");
const donateLinks = document.querySelectorAll(".donate-link");
const loginPageLink = document.querySelector(".loginpage-link");
const signUpLink = document.querySelector(".signup-page-link");
const profile = document.querySelector(".profile");

// home link function
homeLinks.forEach((homelink) => {
  homelink.addEventListener("click", (e) => {
    e.preventDefault();
    homePage.classList.remove("hidden");
    donatePage.classList.add("hidden");
    availabilityPage.classList.add("hidden");
    loginPage.classList.add("hidden");
    signUpPage.classList.add("hidden");
  });
});
availabilityLinks.forEach((availabilityLink) => {
  availabilityLink.addEventListener("click", (e) => {
    e.preventDefault();
    homePage.classList.add("hidden");
    donatePage.classList.add("hidden");
    availabilityPage.classList.remove("hidden");
  });
});
donateLinks.forEach((donateLink) => {
  donateLink.addEventListener("click", (e) => {
    e.preventDefault();
    homePage.classList.add("hidden");
    donatePage.classList.remove("hidden");
    availabilityPage.classList.add("hidden");
  });
});
loginPageLink.addEventListener("click", (e) => {
  e.preventDefault();
  homePage.classList.add("hidden");
  donatePage.classList.add("hidden");
  availabilityPage.classList.add("hidden");
  loginPage.classList.remove("hidden");
});
signUpLink.addEventListener("click", (e) => {
  e.preventDefault();
  homePage.classList.add("hidden");
  donatePage.classList.add("hidden");
  availabilityPage.classList.add("hidden");
  signUpPage.classList.remove("hidden");
  loginPage.classList.add("hidden");
});
profile.addEventListener("click", (e) => {
  e.preventDefault();
  profilePage.classList.toggle("hidden");
});

// Donation Form
// Donation Form
const donationForm = document.querySelector(".donation-form");

if (donationForm) {
  donationForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // Input fields and error messages
    const name = donationForm.querySelector(".donation-name");
    const address = donationForm.querySelector(".donation-address");
    const email = donationForm.querySelector(".donation-email-address");
    const nameErrorMsg = donationForm.querySelector(".donation-name-error-msg");
    const addressErrorMsg = donationForm.querySelector(
      ".donation-address-error-msg"
    );
    const emailErrorMsg = donationForm.querySelector(
      ".donation-email-error-msg"
    );

    let isValid = true;

    // Field validations
    isValid = validateField(name, nameErrorMsg) && isValid;
    isValid = validateField(address, addressErrorMsg) && isValid;
    isValid = validateEmail(email, emailErrorMsg) && isValid;

    if (isValid) {
      alert("Thank you for your donation!");
      donationForm.reset();
    }
  });
}

// Login Form
const loginForm = document.querySelector(".login-form");

if (loginForm) {
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const userName = loginForm.querySelector(".login-form-name");
    const password = loginForm.querySelector(".login-password");
    const nameErrorMsg = loginForm.querySelector(".login-name-error-msg");
    const passwordErrorMsg = loginForm.querySelector(
      ".login-password-error-msg"
    );

    let isValid = true;

    isValid = validateField(userName, nameErrorMsg) && isValid;
    isValid = validateField(password, passwordErrorMsg) && isValid;

    if (isValid) {
      alert("Login successful!");
      loginForm.reset();
    }
  });
}

// Sign-up Form
const signUpForm = document.querySelector(".sign-up-form");

if (signUpForm) {
  signUpForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const firstName = signUpForm.querySelector(".sign-first-name");
    const lastName = signUpForm.querySelector(".sign-last-name");
    const userName = signUpForm.querySelector(".sign-user-name");
    const phoneNumber = signUpForm.querySelector(".sign-number");
    const email = signUpForm.querySelector(".sign-email-address");
    const password = signUpForm.querySelector(".sign-password");
    const confirmPassword = signUpForm.querySelector(".sign-confirm-password");

    const firstNameError = signUpForm.querySelector(
      ".sign-firstname-error-msg"
    );
    const lastNameError = signUpForm.querySelector(".sign-lastname-error-msg");
    const userNameError = signUpForm.querySelector(".sign-user-error-msg");
    const phoneError = signUpForm.querySelector(".sign-phone-error-msg");
    const emailError = signUpForm.querySelector(".sign-email-error-msg");
    const passwordError = signUpForm.querySelector(".sign-password-error-msg");
    const confirmPasswordError = signUpForm.querySelector(
      ".sign-confirm-password-error-msg"
    );

    let isValid = true;

    // Validate each field
    isValid = validateField(firstName, firstNameError) && isValid;
    isValid = validateField(lastName, lastNameError) && isValid;
    isValid = validateField(userName, userNameError) && isValid;
    isValid = validateField(phoneNumber, phoneError) && isValid;
    isValid = validateEmail(email, emailError) && isValid;
    isValid = validateField(password, passwordError) && isValid;

    // Confirm Password Validation
    if (
      !confirmPassword.value.trim() ||
      confirmPassword.value !== password.value
    ) {
      confirmPasswordError.classList.remove("hidden");
      isValid = false;
    } else {
      confirmPasswordError.classList.add("hidden");
    }

    if (isValid) {
      alert("Sign-up successful!");
      signUpForm.reset();
    }
  });
}

// Helper Functions
function validateField(input, errorElement) {
  const isValid = input.value.trim() !== "";
  errorElement.classList.toggle("hidden", isValid);
  return isValid;
}

function validateEmail(input, errorElement) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValid = input.value.trim() && emailPattern.test(input.value);
  errorElement.classList.toggle("hidden", isValid);
  return isValid;
}
