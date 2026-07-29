import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Style/Login.css";

const Login = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  // Already logged in user
  useEffect(() => {

    const token = localStorage.getItem("token");

    if (token) {

      navigate("/");

    }

  }, [navigate]);


  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      const response = await fetch(
        "http://localhost:5000/api/auth/login",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify({
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


      // Save token
      localStorage.setItem(
        "token",
        data.token
      );


      // Save user
      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );


      // Update Navbar
      window.dispatchEvent(
        new Event("authChanged")
      );


      alert(data.message);


      // Login successful → Home page
      navigate("/");


    } catch (error) {

      console.log(
        "Login Error:",
        error
      );

      alert(
        "Something went wrong"
      );

    }

  };


  return (
    <div className="login-parent">

      <div className="login-card">

        <div className="login-header">

          <h1>
            Welcome Back 👋
          </h1>

          <p>
            Sign in to continue to Cup Craft
          </p>

        </div>


        <form
          className="login-body"
          onSubmit={handleLogin}
        >

          <input
            placeholder="Email address"
            type="email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            required
          />

          <br />


          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            required
          />

          <br />


          <div className="for">

            <input type="checkbox" />

            Remember me

            <a href="/forgotpassword">
              Forgot Password?
            </a>

          </div>


          <button type="submit">
            Login
          </button>

          <br />


          <a href="/register">
            Don't have an account? Register
          </a>

        </form>

      </div>

    </div>
  );
};

export default Login;