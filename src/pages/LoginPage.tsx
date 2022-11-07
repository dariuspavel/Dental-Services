import React, { useState } from 'react';
import { login} from '../api/BackendApi';
import "../css/LoginPage.css"
import { useTokenState } from './TokenContext';


export const LoginPage = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const { token, setToken } = useTokenState();

    const handleLogin = async () => {
        const result = await login(email, password);
        if (!result.ok) {
            setMessage("Invalid username or password")
        }

        const body = await result.json();
        if (body.length > 0) {
            setMessage("User logged in.");
            setToken(body[0].id);
        } else {
            setMessage("Invalid username or password");
        }
    }

    return<>
        <div>{message}</div><br />
        <input type="text" placeholder='Your e-mail address' onChange={e => setEmail(e.target.value)} /> <br />
        <input type="text" placeholder='Password' onChange={e => setPassword(e.target.value)} />  <br />
        <button onClick={handleLogin} >Login</button>
    </>
}