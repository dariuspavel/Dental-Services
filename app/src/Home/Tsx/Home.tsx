import { useState } from "react";
import React from 'react';
import "../Css/Home.css"
import { useNavigate } from "react-router-dom";


export const HomeView = () => {

    let navigate = useNavigate();

    return (<>
            <p className="da">This is home page</p>

            <button className="sign-in" onClick={() => navigate("/Login")}>Sign in</button> 
            <button className="sign-up" onClick= {() => navigate("/Register")}>Sign up</button>

        </>
    );
} 