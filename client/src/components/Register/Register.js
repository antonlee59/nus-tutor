import React, { useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import { Axios } from "axios";

function Register() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const errors = "Invalid username and/or password";

  const handleSubmit = async (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass, EMAIL } = document.forms[0];
    const username = uname.value;
    const password = pass.value;
    const email = EMAIL.value;
    try {
      const body = { username, password, email };
      const jsonObj = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      };
      const response = await fetch(
        "http://localhost:8000/api/v1/register",
        jsonObj
      );
      const userData = await response.json();
      console.log(userData);
      // Compare user info
      if (userData.user) {
        setIsSubmitted(true);
      } else {
        // Username not found
        setErrorMessages({ message: errors });
      }
      window.location = "/landingpage";
    } catch (error) {
      console.error(error.message);
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) => (
    <div className="error">{errorMessages.message}</div>
  );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {/* {renderErrorMessage("uname")} */}
        </div>
        <div className="input-container">
          <label>Email </label>
          <input type="text" name="EMAIL" required />
          {/* {renderErrorMessage("uname")} */}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Register Now</div>
        {isSubmitted ? (window.location = "/landingpage") : renderForm}
        <div>Already have an account?</div>
        <Link to="/">Login here</Link>
      </div>
    </div>
  );
}

export default Register;
