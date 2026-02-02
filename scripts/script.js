const inputs = document.querySelectorAll("input");
const nameError = document.getElementById("name-error-signup");
const emailErrorSignup = document.getElementById("email-error-signup");
const phoneError = document.getElementById("phone-error-signup");
const cityError = document.getElementById("city-error-signup");
const passwordErrorSignup = document.getElementById("password-error-signup");
const confirmPasswordError = document.getElementById(
  "confirm-password-error-signup",
);
const passwordShowSignup = document.getElementById("password-show-signup");
const passwordShowIconSignup = document.querySelector(
  "#password-show-signup i",
);
const confirmPasswordShow = document.getElementById(
  "confirm-password-show-signup",
);
const confirmPasswordShowIcon = document.querySelector(
  "#confirm-password-show-signup i",
);
const passwordInputFieldSignup = document.getElementById("password-signup");
const confirmPasswordInputField = document.getElementById(
  "confirm-password-signup",
);
const mainErrorSignup = document.getElementById("main-error-signup");
const signupForm = document.getElementById("form-signup");

/* signup form functionality */

if (signupForm) {
  let nameInput;
  let emailInputSignup;
  let phoneInput;
  let cityNameInput;
  let passwordInputSignup;
  let confirmPasswordInput;

  function nameValidation(input) {
    if (!input.value.trim()) {
      nameError.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> This field cannot be empty`;
      input.setAttribute("aria-invalid", "true");
      nameInput = "";
      return;
    }
    nameError.textContent = "";
    nameInput = input.value.trim();
    input.setAttribute("aria-invalid", "false");
  }

  function emailValidation(input) {
    if (!input.value.trim()) {
      emailErrorSignup.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> This field cannot be empty`;
      input.setAttribute("aria-invalid", "true");
      emailInputSignup = "";
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(input.value)) {
      emailErrorSignup.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> Please enter a valid email`;
      input.setAttribute("aria-invalid", "true");
      emailInputSignup = "";
      return;
    }
    emailErrorSignup.textContent = "";
    emailInputSignup = input.value.trim();
    input.setAttribute("aria-invalid", "false");
  }

  function phoneValidation(input) {
    const numberInput = input.value.replace(/\D/g, "");
    input.value = numberInput;

    if (!numberInput.trim()) {
      phoneError.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> This field cannot be empty`;
      input.setAttribute("aria-invalid", "true");
      phoneInput = "";
      return;
    }

    if (input.value.length === 10) {
      phoneError.textContent = "";
      phoneInput = numberInput;
      input.setAttribute("aria-invalid", "false");
    } else {
      phoneError.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> Phone number has to have 10 digits`;
      input.setAttribute("aria-invalid", "true");
      phoneInput = "";
    }
  }

  function cityValidation(input) {
    const cityInput = input.value.replace(/[^A-Za-z\s]/g, "");
    input.value = cityInput;

    if (!cityInput.trim()) {
      cityError.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> This field cannot be empty`;
      input.setAttribute("aria-invalid", "true");
      cityNameInput = "";
      return;
    }
    cityError.textContent = "";
    cityNameInput = cityInput.trim();
    input.setAttribute("aria-invalid", "false");
  }

  function passwordValidation(input) {
    const password = input.value.trim();

    if (!password) {
      passwordErrorSignup.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> This field cannot be empty`;
      input.setAttribute("aria-invalid", "true");
      passwordInputSignup = "";
      return;
    }

    const hasLength = password.length >= 8;
    const hasLetter = /[a-zA-Z]/.test(password);
    const hasNumber = /\d/.test(password);

    let messages = [];

    if (!hasLength) messages.push("at least 8 characters");
    if (!hasLetter) messages.push("1 letter");
    if (!hasNumber) messages.push("1 number");

    if (messages.length === 0) {
      passwordErrorSignup.textContent = "";
      passwordInputSignup = password;
      input.setAttribute("aria-invalid", "false");
    } else {
      passwordErrorSignup.innerHTML =
        `<i class="fa-solid fa-circle-exclamation"></i> Password must contain ` +
        messages.join(", ");
      passwordInputSignup = "";
      input.setAttribute("aria-invalid", "true");
    }

    if (passwordInputSignup === confirmPasswordInput) {
      confirmPasswordError.textContent = "";
    } else {
      confirmPasswordError.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> Passwords do not match`;
    }
  }

  function confirmPasswordValidation(input) {
    if (!input.value.trim()) {
      confirmPasswordError.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> This field cannot be empty`;
      input.setAttribute("aria-invalid", "true");
      confirmPasswordInput = "";
      return;
    }

    if (!passwordInputSignup) {
      confirmPasswordError.textContent = "";
      return;
    }

    if (input.value.trim() !== passwordInputSignup) {
      confirmPasswordError.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> Passwords do not match`;
      input.setAttribute("aria-invalid", "true");
      confirmPasswordInput = "";
      return;
    }
    confirmPasswordError.textContent = "";
    confirmPasswordInput = input.value.trim();
    input.setAttribute("aria-invalid", "false");
  }

  inputs.forEach((input) => {
    input.addEventListener("input", (e) => {
      switch (input.id) {
        case "full-name-signup":
          nameValidation(input);
          break;
        case "email-signup":
          emailValidation(input);
          break;
        case "phone-signup":
          phoneValidation(input);
          break;
        case "city-signup":
          cityValidation(input);
          break;
        case "password-signup":
          passwordValidation(input);
          break;
        case "confirm-password-signup":
          confirmPasswordValidation(input);
          break;
      }
    });
  });

  passwordShowSignup.addEventListener("click", () => {
    if (passwordInputFieldSignup.type === "password") {
      passwordInputFieldSignup.type = "text";
      passwordShowSignup.setAttribute("aria-label", "hide password");
      passwordShowIconSignup.classList.remove("fa-eye");
      passwordShowIconSignup.classList.add("fa-eye-slash");
    } else {
      passwordInputFieldSignup.type = "password";
      passwordShowSignup.setAttribute("aria-label", "show password");
      passwordShowIconSignup.classList.remove("fa-eye-slash");
      passwordShowIconSignup.classList.add("fa-eye");
    }
  });

  confirmPasswordShow.addEventListener("click", () => {
    if (confirmPasswordInputField.type === "password") {
      confirmPasswordInputField.type = "text";
      confirmPasswordShow.setAttribute("aria-label", "hide password");
      confirmPasswordShowIcon.classList.remove("fa-eye");
      confirmPasswordShowIcon.classList.add("fa-eye-slash");
    } else {
      confirmPasswordInputField.type = "password";
      confirmPasswordShow.setAttribute("aria-label", "show password");
      confirmPasswordShowIcon.classList.remove("fa-eye-slash");
      confirmPasswordShowIcon.classList.add("fa-eye");
    }
  });

  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (
      nameInput &&
      emailInputSignup &&
      phoneInput &&
      cityNameInput &&
      passwordInputSignup &&
      confirmPasswordInput
    ) {
      alert("Signup Successful! Your new Account has been created.");

      const userData = {
        name: nameInput,
        email: emailInputSignup,
        phone: phoneInput,
        city: cityNameInput,
        password: passwordInputSignup,
      };
      localStorage.setItem("user", JSON.stringify(userData));

      window.location.href = "SignIn.html";
    } else {
      mainErrorSignup.style.display = "block";
      mainErrorSignup.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> Something went wrong. Please recheck the fields with errors`;

      mainErrorSignup.classList.remove("main-error-shake");
      void mainErrorSignup.offsetWidth;
      mainErrorSignup.classList.add("main-error-shake");

      const nameInputField = document.getElementById("full-name-signup");
      const emailInputFieldSignup = document.getElementById("email-signup");
      const phoneInputField = document.getElementById("phone-signup");
      const cityInputField = document.getElementById("city-signup");

      nameValidation(nameInputField);
      emailValidation(emailInputFieldSignup);
      phoneValidation(phoneInputField);
      cityValidation(cityInputField);
      passwordValidation(passwordInputFieldSignup);
      confirmPasswordValidation(confirmPasswordInputField);
    }
  });
}

/* signin form functionality */

const emailInputFieldSignin = document.getElementById("email-signin");
const passwordInputFieldSignin = document.getElementById("password-signin");
const passwordShowSignin = document.getElementById("password-show-signin");
const passwordShowIconSignin = document.querySelector(
  "#password-show-signin i",
);
const emailErrorSignin = document.getElementById("email-error-signin");
const passwordErrorSignin = document.getElementById("password-error-signin");
const signinForm = document.getElementById("form-signin");
const mainErrorSignin = document.getElementById("main-error-signin");

if (signinForm) {
  function emailValidationSignin() {
    if (!emailInputFieldSignin.value.trim()) {
      emailErrorSignin.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> This field cannot be empty`;
      emailInputFieldSignin.setAttribute("aria-invalid", "true");
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(emailInputFieldSignin.value)) {
      emailErrorSignin.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> Please enter a valid email`;
      emailInputFieldSignin.setAttribute("aria-invalid", "true");
      return;
    }
    emailErrorSignin.textContent = "";
    emailInputFieldSignin.setAttribute("aria-invalid", "false");
  }

  function passwordValidationSignin() {
    if (!passwordInputFieldSignin.value.trim()) {
      passwordErrorSignin.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> This field cannot be empty`;
      passwordInputFieldSignin.setAttribute("aria-invalid", "true");
      return;
    }
    passwordErrorSignin.textContent = "";
    passwordInputFieldSignin.setAttribute("aria-invalid", "false");
  }

  emailInputFieldSignin.addEventListener("input", emailValidationSignin);

  passwordInputFieldSignin.addEventListener("input", passwordValidationSignin);

  passwordShowSignin.addEventListener("click", () => {
    if (passwordInputFieldSignin.type === "password") {
      passwordInputFieldSignin.type = "text";
      passwordShowSignin.setAttribute("aria-label", "hide password");
      passwordShowIconSignin.classList.remove("fa-eye");
      passwordShowIconSignin.classList.add("fa-eye-slash");
    } else {
      passwordInputFieldSignin.type = "password";
      passwordShowSignin.setAttribute("aria-label", "show password");
      passwordShowIconSignin.classList.remove("fa-eye-slash");
      passwordShowIconSignin.classList.add("fa-eye");
    }
  });

  signinForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const userData = JSON.parse(localStorage.getItem("user"));

    if (
      userData?.email !== emailInputFieldSignin.value ||
      userData?.password !== passwordInputFieldSignin.value
    ) {
      mainErrorSignin.style.display = "block";
      mainErrorSignin.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> Email or Password is invalid`;

      mainErrorSignin.classList.remove("main-error-shake");
      void mainErrorSignin.offsetWidth;
      mainErrorSignin.classList.add("main-error-shake");

      emailValidationSignin();
      passwordValidationSignin();
      return;
    }
    mainErrorSignin.style.display = "none";
    mainErrorSignin.innerHTML = "";
    alert("Login successful!");
  });
}
