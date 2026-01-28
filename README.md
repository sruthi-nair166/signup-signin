# SignUp and SignIn pages

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

This project is a responsive Signup and Signin page with client-side JavaScript validations. It allows users to create an account by entering their details and validates each field with inline error messages for better user feedback.

The Signup page includes validations for full name, email format, phone number, city name, password strength, and password confirmation. User credentials are stored using browser localStorage.

The Signin page verifies the entered credentials against the stored data and redirects the user to the Tourist Landing Page upon successful authentication. Invalid credentials display appropriate error messages to guide the user.

The project is designed to be responsive across screen sizes and includes basic accessibility considerations for form inputs and error messages.

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
