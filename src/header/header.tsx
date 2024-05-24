import React from "react";
import "./header.css"
import { useNavigate } from "react-router-dom";
import dropdown from "../images/dropdown.png"
import logo from "../images/dental_service_logo_black.png"

export const Header=() => {

    const navigate = useNavigate();

    const handleSinup = () => {
        navigate("/register");
    }

    const handleSingin = () => {
        navigate("/login");
    }

    return<>

        <body>
            <header className="header">
                <a href="#" className="logo"><i className="fas fa-tooth"> dentist </i></a>
                <nav className="navbar">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#services">Services</a>
                    <a href="#team">Team</a>
                </nav>

                {/* <a href="#" className="btn"> make appointment</a> */}
                <div className="sign-btn">
                    <button className='btn' id="sign-up" onClick={handleSinup}>Sign up</button>
                    <button className='btn' id="sign-in" onClick={handleSingin}>Sign in</button>
                </div>
                
                <div id="menu-btn" className="fas fa-bars">
                </div>
            </header>
        </body>
    
    </>
}


export default Header;

