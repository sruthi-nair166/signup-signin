# Authentication Form

## Table of contents

- [About](#about)
  - [Links](#links)
  - [Screenshots](#screenshots)
  - [Overview](#overview)
  - [Built with](#built-with)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## About

### Links

Live Site: [https://sruthi-nair166.github.io/signup-signin/SignIn.html](https://sruthi-nair166.github.io/signup-signin/SignIn.html)

### Screenshots

<img src="./screenshots/SignUp-SignIn.gif">

### Overview

This project is a responsive Signup and Signin interface that allows users to create an account and authenticate using client-side JavaScript validations.

### Features

- **Signup with Client-Side Validation** <br />
  Validates user input with inline error messages.
  
- **Field-Level Validations** <br />
  Includes validation for full name, email format, phone number, city name, password strength, and password confirmation.

- **Local Storage Authentication** <br />
  Stores user credentials securely in browser localStorage for basic authentication flow.

- **Signin Verification** <br />
  Verifies entered credentials against stored data and handles authentication logic.

- **Post-Login Redirection** <br />
  Redirects users to the Tourist Landing Page upon successful sign-in.

- **Error Handling for Invalid Credentials** <br />
  Displays appropriate error messages when authentication fails to guide the user.

- **Responsive & Accessible Design** <br />
  Designed to be responsive across screen sizes with basic accessibility considerations for form inputs and error messaging.

### UI/UX Decisions

- Used inline, field-level validation to give immediate feedback during form completion without breaking the user’s flow.

- Validated inputs progressively (name, email, phone number, password strength, confirmation) to prevent invalid submissions and reduce correction effort.

- Provided clear success and error feedback during signup and signin so users always understand the outcome of their action.

- Designed the forms to be responsive and accessible, with readable labels, logical tab order, and clearly visible error states across screen sizes.

### Built With

- HTML
- CSS
- JavaScript

## Author

- LinkedIn - [Sruthi V Nair](https://www.linkedin.com/in/sruthi-v-nair/)
- Github - [Sruthi V Nair](https://github.com/sruthi-nair166)

## Acknowledgments

This project was built as part of an assignment in the Full Stack Development course I'm currently enrolled in, offered by Entri Elevate. Special thanks to the course instructors and materials for the guidance and support.
