import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div className='container'>
      <div className="sub-container">
    <div>
        <h1><center>EVENTZONE</center></h1>
        <h2><center><i>WELCOME ALL</i></center></h2>
        <button>
        <Link to={"/login"}>LOGIN</Link>
        </button>
        <button><Link to={"/signup"}>SIGNUP</Link>
        </button>
        
        <br/>
        <br/>
      
    </div>
    </div>
    </div>
  )
}

export default Home
