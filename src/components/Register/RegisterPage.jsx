import React from 'react'
import './RegisterPage.css';
// import {Button} from '../../UniversalComponents/Button/Button'

function RegisterPage() {
  return (
   <>
    <div className="background"></div>
    <div className="background-image"></div>
    <div className="container">
      <div className="left-side">
        <h1>Ola!</h1>
        <p>Since its inception in 2022, OTOCARE has consistently engaged with over 100,000 audiences annually, providing exceptional services that have amounted to an impressive 15,000 completions.</p>
      </div>
      <div className="right-side">
        <div className="login-box">
          <h2>Register</h2>
          <label htmlFor='name'>Name</label>
          <input type='Name' id='name' name='name' required=''/>
          <label htmlFor="email">Email</label>
          <input type="Email" id="email" name="email"  required="" />
          <label htmlFor="pswd">Password</label>
          <input type="Password" id="pswd" name="pswd" required="" />
          <label htmlFor="pswd">Confirm Password</label>
          <input type="cnfrmPassword" id="cnfrmpswd" name="cnfrmpswd" required="" />
          <div className="registerhere">Already have an account? <span className='register-link'>Login</span></div>
          <Button>Register</Button>
        </div>
      </div>
    </div>
    </>
  );
}

export default RegisterPage
