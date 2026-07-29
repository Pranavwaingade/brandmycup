import React, { useState } from 'react';
import '../Style/Login.css';

function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = async (e) => {

    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {

      const response = await fetch(
        "http://localhost:5000/api/auth/register",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify({
            name,
            email,
            password
          })
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.message);
        return;
      }

      alert(data.message);

      console.log(data);

    } catch (error) {

      console.log("Registration Error:", error);

      alert("Something went wrong");

    }

  };


  return (
    <>

      <div className="login-parent">

        <div className="login-card">

          <div className="login-header">

            <h1>Create Your Account</h1>

            <p style={{ margin: '0' }}>
              Join BrandMyCup and start designing your custom branded paper cups.
            </p>

          </div>


          <form
            className="login-body"
            onSubmit={handleRegister}
          >

            <input
              placeholder="Full Name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <br />


            <input
              placeholder="Email Address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <br />


            <input
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <br />


            <input
              placeholder="Confirm Password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />

            <br />


            <div
              className='for'
              style={{ width: '45%' }}
            >

              <input
                type="checkbox"
                required
              />

              I agree to Terms & Conditions

            </div>


            <button type="submit">
              Create Account
            </button>

            <br />


            <a href="/login">
              Already have an account?
            </a>

          </form>

        </div>

      </div>

    </>
  );
}

export default Register;