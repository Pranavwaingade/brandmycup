import React from 'react'
import '../Style/Login.css'
import logo from '../img/Cups(2).png'

function Register() {
  return (
    <>
      <div className="login-parent">
        <div className="login-card">
          <div className="login-header">
            <h1>Create Your Account</h1>
            <p style={{margin:'0'}}>Join BrandMyCup and start designing your custom branded paper cups.
            </p>
          </div>

          <div className="login-body">
            <input
              placeholder="Full Name" type="text"
            /> <br />
            <input
              placeholder="Business Name" type="email"
            /> <br />
            
            <input
              placeholder="Email Address" type="email"
            /> <br />
            <input
              placeholder="Phone Number" type="tel"
            /> <br />
            <input
              placeholder="Confirm Password"
              type="password"
            /> <br />
            <div className='for' style={{width:'45%'}}><input type="checkbox" />I agree to Terms & Conditions</div>
            <button>Create Account</button>
            <br />
            <a href="/login">Already have an account?</a>
          </div>
        </div>

      </div>
    
    </>
  )
}

export default Register