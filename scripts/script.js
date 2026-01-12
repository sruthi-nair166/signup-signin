const inputs = document.querySelectorAll("input");
const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const phoneError = document.getElementById("phone-error");
const cityError = document.getElementById("city-error");
const passwordError = document.getElementById("password-error");
const confirmPasswordError = document.getElementById("confirm-password-error");
const signupForm = document.getElementById("form-signup");

let nameInput;
let emailInput;
let phoneInput;
let cityNameInput;
let passwordInput;
let confirmPasswordInput;

function nameValidation(e) {
  if (!e.target.value.trim()) {
    nameError.textContent = "This field cannot be empty";
    return;
  }
  nameError.textContent = "";
  nameInput = e.target.value.trim();
}

function emailValidation(e) {
  if (!e.target.value.trim()) {
    emailError.textContent = "This field cannot be empty";
    return;
  }

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!emailRegex.test(e.target.value)) {
    emailError.textContent = "Please enter a valid email";
    return;
  }
  emailError.textContent = "";
  emailInput = e.target.value.trim();
}

function phoneValidation(input, e) {
  const numberInput = e.target.value.replace(/\D/g, "");
  input.value = numberInput;

  if (!numberInput.trim()) {
    phoneError.textContent = "This field cannot be empty";
    return;
  }

  if (e.target.value.length <= 10) {
    phoneError.textContent = "";
    phoneInput = numberInput;
  } else {
    phoneError.textContent = "Phone number cannot be more that 10 digits";
    phoneInput = "";
    return;
  }
}

function cityValidation(input, e) {
  const cityInput = e.target.value.replace(/[^A-Za-z\s]/g, "");
  input.value = cityInput;

  if (!cityInput.trim()) {
    cityError.textContent = "This field cannot be empty";
    return;
  }
  cityError.textContent = "";
  cityNameInput = cityInput;
}

function passwordValidation(e) {
  const password = e.target.value.trim();

  if (!password) {
    passwordError.textContent = "This field cannot be empty";
    return;
  }

  const hasLength = password.length >= 8;
  const hasLetter = /[a-zA-Z]/.test(password);
  const hasNumber = /\d/.test(password);

  let messages = [];

  if (!hasLength) messages.push("at least 8 characters");
  if (!hasLetter) messages.push("a letter");
  if (!hasNumber) messages.push("a number");

  if (messages.length === 0) {
    passwordError.textContent = "";
    passwordInput = password;
  } else {
    passwordError.textContent = "Password must contain " + messages.join(", ");
  }

  if (passwordInput === confirmPasswordInput) {
    confirmPasswordError.textContent = "";
  }
  console.log(passwordInput);
}

function confirmPasswordValidation(e) {
  if (!e.target.value.trim()) {
    confirmPasswordError.textContent = "This field cannot be empty";
    return;
  }

  if (e.target.value.trim() !== passwordInput) {
    confirmPasswordError.textContent = "Passwords do not match";
    return;
  }
  confirmPasswordError.textContent = "";
  confirmPasswordInput = e.target.value.trim();
  console.log(e.target.value.trim(), passwordInput);
}

inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    switch (input.id) {
      case "full-name-signup":
        nameValidation(e);
        break;
      case "email-signup":
        emailValidation(e);
        break;
      case "phone-signup":
        phoneValidation(input, e);
        break;
      case "city-signup":
        cityValidation(input, e);
        break;
      case "password-signup":
        passwordValidation(e);
        break;
      case "confirm-password-signup":
        confirmPasswordValidation(e);
        break;
    }
  });
});

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    nameInput &&
    emailInput &&
    phoneInput &&
    cityNameInput &&
    passwordInput &&
    confirmPasswordInput
  ) {
    alert("Signup Successful! Your new Account has been created.");

    const userData = {
      name: nameInput,
      email: emailInput,
      phone: phoneInput,
      city: cityNameInput,
      password: passwordInput,
    };
    localStorage.setItem("user", JSON.stringify(userData));

    window.location.href = "SignIn.html";
  } else {
    alert("Something went wrong. Please recheck the fields with errors");
  }
});
