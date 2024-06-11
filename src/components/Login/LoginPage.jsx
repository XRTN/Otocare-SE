import React, { useState } from 'react';
import './LoginPage.css';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase';

function LoginPage({ setCurrentUser }) {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setCurrentUser(user); // Update current user state
        navigate("/");
      })
      .catch((error) => {
        setError(true);
      });
  };

  return (
    <div className="container">
      <div className="background"></div>
      <div className="background-image"></div>
      <div className="login-wrapper">
        <div className="login-wrapper-left">
          <div className="left-side">
            <h1>Ola!</h1>
            <p>Since its inception in 2022, OTOCARE has consistently engaged with over 100,000 audiences annually, providing exceptional services that have amounted to an impressive 15,000 completions.</p>
          </div>
        </div>
        <div className="login-wrapper-right">
          <div className="right-side">
            <div className="login-box">
              <h2>Login</h2>
              <form onSubmit={handleLogin}>
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  onChange={e => setEmail(e.target.value)}  
                />
                <label htmlFor="pswd">Password</label>
                <input 
                  type="password" 
                  id="pswd" 
                  name="pswd" 
                  onChange={e => setPassword(e.target.value)} 
                />
                <button type='submit'>Login</button>
              </form>
              <div className="registerhere">
                Don't have an account? 
                <Link to="/register" className="register-link"> Register</Link>
              </div>
              {error && <span>Wrong email or password!</span>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
