import React from 'react';
import { Link } from 'react-router-dom';
import "../css/FrontPage.css"


export const HomePage = () => {



    return<>
    
        <button className='signupButton'>  <Link to="/register">Sign up</Link> </button>
        <button className='signinButton'> <Link to="login">Sign in</Link></button>

    </>
}