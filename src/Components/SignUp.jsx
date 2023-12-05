// SignUp.js

import React, { useState } from 'react';
import { auth } from './utils/firebaseConfig';
import { createUserWithEmailAndPassword } from "firebase/auth";
import {Link, useNavigate} from 'react-router-dom'
import './SignUp.css'

const SignUp = () => {
    const navigate =useNavigate()
    const [name, setName] = useState('');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault(); 
  
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    window.alert("successful")
    console.log("success" ,user);
    navigate("/Upcomingevents")

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error('Error signing up:', error);
    window.alert(errorMessage)


  });

  };

  return (
    <div className='container'>
      <div className="sub-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
      <div className='box'>
        <input
          type="text"
          placeholder="Username"
          value={name}
          onChange={(e) => setName(e.target.value)}
        input/>
        </div>
        <div className='box'>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          input/>
        </div>
        <div className='box'>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          input/>
        </div>
        <p>Already have  an account <Link to={"/login"}> Login Now</Link></p>
        <button type="submit">Sign Up</button>
      </form>
          </div>
    </div>
  );
};

export default SignUp;
