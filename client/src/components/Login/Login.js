import React, { useState } from "react";

import { Link, Route, Navigate } from "react-router-dom";
import { useGlobalContext } from "../../context";

import LandingPage from "../LandingPage/LandingPage";
import "./Login.css";

function Login() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // // User Login info
  // const database = [
  //   {
  //     username: "user1",
  //     password: "pass1",
  //   },
  //   {
  //     username: "user2",
  //     password: "pass2",
  //   },
  // ];

  const errorMessage = "Invalid username and/or password";

  const handleSubmit = async (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];
    const username = uname.value;
    const password = pass.value;
    try {
      const body = { username, password };
      const jsonObj = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      };
      const response = await fetch(
        "http://localhost:8000/api/v1/login",
        jsonObj
      );
      const userData = await response.json();
      // Compare user info
      if (userData.user) {
        setIsSubmitted(true);
      } else {
        // Username not found
        setErrorMessages({ message: errorMessage });
      }
      // window.location = "/landingpage";
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
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label>Username </label>
              <input type="text" name="uname" required />
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
        <Link to="/register">Register now</Link>
      </div>
    </div>
  );

  return <div>{isSubmitted ? <Navigate to="/landingpage" /> : renderForm}</div>;
}

export default Login;
