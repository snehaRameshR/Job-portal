import React from 'react'
import { useNavigate } from "react-router-dom";
import "./Login.css";
const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
  
    navigate("/"); 
  }
  return (
    <div>
      <div className='login-form'>
      <h2>Login</h2>
      <div className='fullform'>
      <form>
        <div >
        <label>Username</label>
        <input type='text' placeholder='Enter the Username' /> </div>
         <div><label>Password</label>
        <input type='password' placeholder='Enter the password' /> </div>
      </form>
      <button onClick={handleLogin} className='btn'>Login</button>
      </div>
      </div>
      </div>
    
  )
}

export default Login