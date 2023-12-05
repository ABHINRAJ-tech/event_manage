// Login.js

import React, { useState } from 'react';
import { auth } from './utils/firebaseConfig';
import {useNavigate} from 'react-router-dom'
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link } from 'react-router-dom';
import './Login.css'


const Login = () => {
    const navigate =useNavigate()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleLogin = async (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    window.alert("successful")
    console.log("success" ,user);
    navigate("/Upcomingevents")

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error('Error logging in:', error);
    console.error('Error Messagre:', errorMessage);
    
    window.alert(errorMessage)
  });
   
  };

  return (
    <div className='container'>
      <div className="sub-container">

    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        
        <div className='box'>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        input/>
        </div>
        <div className='box'>
        <input
          type="text"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        input/>
        </div>
        <p>Don't Have an Account Create Account <Link to={"/SignUp"}>SignUp </Link ></p>
        <button type="submit">Login</button>
      </form>
    </div>
    </div>
    </div>
  );
};

export default Login;
