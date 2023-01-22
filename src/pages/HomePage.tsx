import React from 'react';
import { Cookies } from 'react-cookie';
import { Link, useNavigate } from 'react-router-dom';
import "../css/HomePage.css"
import { CalendarView } from './Calendar';
import { SignInPageView } from './SignInPage';
import { useTokenState } from './TokenContext';


export const HomePageView = () => {


    const navigate = useNavigate();
    const cookies = new Cookies();
    const id = cookies.get("id");

    const handleSingin = () => {
        navigate("/login");
    }

    const handleSinup = () => {
        navigate("/register");
    }
    
    const Logged = () => {
        

        if (id) {
            return<>
            {SignInPageView()}
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