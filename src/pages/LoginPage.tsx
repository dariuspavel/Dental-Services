import React, { useState } from 'react';
import { login} from '../api/BackendApi';
import "../css/LoginPage.css"
import { useTokenState } from './TokenContext';
import { useNavigate  } from "react-router-dom";
import Cookies from 'universal-cookie';



export const LoginPage = () => {

    const cookies = new Cookies();

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const { token, setToken } = useTokenState();
    
    const handleBack = () => {
        return navigate("/");
    }

    const handleLogin = async () => {
        const result = await login(email, password);
        if (!result.ok) {
            setMessage("Invalid username or password")
        }

        const body = await result.json();
        if (body.length > 0) {
            const id = body[0].id;
            setMessage("User logged in.");
            cookies.set("id", id, { path: '/' });
            navigate("/");
            setToken(id);

        } else {
            setMessage("Invalid username or password");
        }
    }

    return<>
        <div>{message}</div><br />
        <input type="text" placeholder='Your e-mail address' onChange={e => setEmail(e.target.value)} /> <br />
        <input type="password" placeholder='Password' onChange={e => setPassword(e.target.value)} />  <br />
        <button onClick={handleLogin} >Login</button>
        <button onClick={handleBack}>Back</button>
    </>
}