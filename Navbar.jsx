import React from 'react'
import  "./Navbar.css";
import {Link} from "react-router-dom";
const Navbar = () => {
  return (
    <div className='logo'>
       <h4>JOB PORTAL</h4>
       <div className='nav-bar'>
       <Link to="/">Home</Link>
       <Link to="/jobs">Jobs</Link>
       <Link to="/about">About</Link>
       <Link to="/contacts">Contacts</Link>
       <Link to="/login">Login</Link>
       <Link to="/sigin">Signin</Link>
       </div>
    </div>
  )
}

export default Navbar