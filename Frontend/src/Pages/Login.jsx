import React from 'react'
import '../Style/Login.css'
import logo from '../img/Cups(2).png'

const Login = () => {
  return (
    <>
      <div className="login-parent">
        <div className="login-card">
          <div className="login-header">
            <h1> Welcome Back 👋</h1>
            <p>Sign in to continue to Cup Craft
            </p>
          </div>

          <div className="login-body">
            <input
              placeholder="Email address" type="email"
            /> <br />
            <input
              placeholder="Password"
              type="password"
            /> <br />
            <div className='for'><input type="checkbox" />Remember me  <a href="/forgotpassword">Forgot Password?</a></div>
            <button>Login</button>
            <br />
            <a href="/register">Don't have an account? Register</a>
          </div>
        </div>

      </div>
    </>
  )
}

export default Login