// App.js

import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import Home from './Components/Home';
import Eventcreation from './Components/Eventcreation';
import Upcomingevents from './Components/Upcomingevents';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route exact path="/Signup" element={<SignUp/>} />
        <Route exact path="/Login" element={<Login/>} /> 
        <Route exact path="Eventcreation" element={<Eventcreation/>}/>
        <Route exact path="Upcomingevents" element={<Upcomingevents/>}/>
          {/* Redirect to login page if no matching route */}
               {/* Other routes or components */}
      </Routes>
    </Router>
  );
};

export default App;
