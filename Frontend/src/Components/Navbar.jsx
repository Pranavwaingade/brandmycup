import React from 'react';
import "../Style/Navbar.css";
import mylogo from "../img/Cups(2).png"
import Login from '../Pages/Login';


const Navbar = () => {
     const isLoggedIn = true ;
    return (
        <nav className='navbar'>
            <a className='logo' href="">
                <img className='logo-img' src={mylogo} alt="" />
                <h2 style={{ color: '#8d4a23' }}>Cups</h2> <h2 style={{ color: '#87947b' }}> Craft</h2>
            </a>
            <ul className='nav-links'>
            { !isLoggedIn ? (
                <>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="/login">Login</a></li>
                </>
            ):(
                <> <li><a href="">Home</a></li>
                <li><a href="">Products</a></li>
                <li><a href="">Customize</a></li>
                <li><a href="">About</a></li>
                <li><a href="/login">Profile</a></li>
                </>
            )}
            </ul>

            <ul className='nav-auth'>
                <li><a href=""><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                </svg></a></li>
                <li><a href=""><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-bag" viewBox="0 0 16 16">
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                </svg></a></li>
                <li><a href=""><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
                </svg></a></li>

            </ul>

        </nav>
    )
}

export default Navbar