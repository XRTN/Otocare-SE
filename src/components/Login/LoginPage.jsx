
import React, { useState } from 'react';
import "./LoginPage.css";
import { Link } from 'react-router-dom'; 

function LoginPage() {

  return (
    <>
      <div className="background"></div>
      <div
        className="background-image"
      ></div>
      <div className="container">
        <div className="left-side">
          <h1>Ola!</h1>
          <p>
            Since its inception in 2022, OTOCARE has consistently engaged with
            over 100,000 audiences annually, providing exceptional services that
            have amounted to an impressive 15,000 completions.
          </p>
        </div>
        <div className="right-side">
          <div className="login-box">
            <h2>Login</h2>
            <label htmlFor="email">Email</label>
            <input type="Email" id="email" name="email" required="" />
            <label htmlFor="pswd">Password</label>
            <input type="Password" id="pswd" name="pswd" required="" />
            <div className="registerhere">
              Don't have an account?{" "}
              <span className="register-link">Register</span>
            </div>

            <button>Login</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;

