import React from 'react';
import { Cookies } from 'react-cookie';
import { Link, useNavigate } from 'react-router-dom';
import "../css/FrontPage.css"
import { useTokenState } from './TokenContext';


export const HomePage = () => {


    const navigate = useNavigate();
    const cookies = new Cookies();
    const id = cookies.get("id");

    const handleSingin = () => {
        navigate("/login");
    }

    const handleSinup = () => {
        navigate("/register");
    }

    const handleSignout = () => {
        cookies.set("id", "");
        navigate("/");
    }
    
    const Logged = () => {
        

        if (id) {
            return<>
            <button className='signoutButton' onClick={handleSignout}> Sign out </button>
        </>
        } else {
            return<>
            <button className='signupButton' onClick={handleSinup}>Sign up</button>
            <button className='signinButton' onClick={handleSingin}>Sign in</button>
        </>
        }

    }

    

    return<>

        {Logged()}

    </>
}