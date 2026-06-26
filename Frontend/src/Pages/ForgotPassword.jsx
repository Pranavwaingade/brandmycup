import React from 'react'
import '../Style/Login.css'
import { useNavigate } from 'react-router-dom';


function ForgotPassword() {
    const navigate = useNavigate();

    const handelclick = () => {
        // const path = "/login";
        // navigate(path);

        navigate("/login");
    };
    return (
        <>
            <div className="login-parent">
                <div className="login-card">
                    <div className="login-header">
                        <h1>  Forgot Password?</h1>
                        <p style={{ margin: '0' }}>Enter your registered email address. <br />
                            We'll send you a password reset link.
                        </p>
                    </div>

                    <div className="login-body">
                        <input
                            placeholder="Email Address" type="email"
                        /> <br />

                        <button onClick={handelclick}>Send</button>
                        <br />
                    
                    </div>
                </div>

            </div>
        </>
    )
}

export default ForgotPassword