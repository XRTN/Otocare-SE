import React, {useState} from 'react';
import './RegisterPage.css';
import { Link } from 'react-router-dom';
import {createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
// import {Button} from '../../UniversalComponents/Button/Button'

function RegisterPage() {
  // const closeMobileMenu=()=>setClick(false)
  const [error, setError] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmpswd, setPass] = useState("")
  const navigate = useNavigate()



  const handleRegister = (e)=> {
    e.preventDefault()
    
    if (validateName(name) && validateEmail(email) && validatePassword(password)){
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          navigate("/login");
        })
        .catch((error) => {
          setError(true);
        });
    } else {
      setError(true); 
    }
  };

  const validateName = (name) => {
    if (name.length < 6) {
      alert("Name must be at least 6 characters long.");
      return false;
    }
    return true;
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address ending with .com");
      return false;
    }
    return true;
  };

  const validatePassword = (password) => {
    if (password.length < 8) {
      alert("Password must be at least 8 characters long.");
      return false;
    }
    return true;
  };




  return (
   <>


    <div className="container">
    <div className="background"></div>
    <div className="background-image"></div>
      <div className="register-wrapper">
        <div className="register-wrapper-left">
      <div className="left-side">
        <h1>Ola!</h1>
        <p>Since its inception in 2022, OTOCARE has consistently engaged with over 100,000 audiences annually, providing exceptional services that have amounted to an impressive 15,000 completions.</p>
      </div>
      </div>

      <div className="register-wrapper-left">
      <div className="right-side">
        <div className="register-box">
          <h2>Register</h2>
          <form onSubmit = {handleRegister}> 
            <label htmlFor='name'>Name</label>
            <input type='name' id='name' name='name' placeholder="Input Name" onChange={e=> setName(e.target.value)} autoComplete="given-name"/>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Input your email here" onChange={e=> setEmail(e.target.value)} autoComplete="email"/>
            <label htmlFor="pswd">Password</label>
            <input type="password" id="pswd" name="pswd" placeholder="********" onChange={e=> setPassword(e.target.value)} autoComplete="new-password"/>
            
            
          
            <Link to="/login" className="login-link" onClick={handleRegister}>
            <button type='submit'>Register</button>
            </Link>

          </form>
          
          

          <div className="loginhere">
            Already have an account? 
            <Link to="/login" className="login-link" onClick={handleRegister}>Login</Link>
            </div>

        </div>
      </div>
    </div>
    </div>
    </div>
    </>
  );
}

export default RegisterPage;
