import React, { useState } from 'react';
// import { login} from '../api/BackendApi';
import "../css/LoginPage.css"
import { useTokenState } from './TokenContext';
import { useNavigate  } from "react-router-dom";
import Cookies from 'universal-cookie';
import Footer from '../footer/footer';
import Header from '../header/header';



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
        // const result = await login(email, password);
        // if (!result.ok) {
        //     setMessage("Invalid username or password")
        // }

        // const body = await result.json();
        // if (body.length > 0) {
        //     const id = body[0].id;
        //     setMessage("User logged in.");
        //     cookies.set("id", id, { path: '/' });
        //     navigate("/");
        //     setToken(id);

        // } else {
        //     setMessage("Invalid username or password");
        // }
        return navigate("/about");
    }

    return<>
        <div className='box-elements'>
            <section className="login" id='login'>
                <h1 className='heading'> Enter to your account</h1>
                <div className="box-container-login">
                    <div className="box-login">
                        <div className='pinboard'>
                            <div className='messageHandler'>{message}</div><br />
                                <div className='box-input-login'>
                                    <input className='emailInput' type="text" placeholder='Your e-mail address' onChange={e => setEmail(e.target.value)} /> <br />
                                    <input className='passwordInput' type="password" placeholder='Password' onChange={e => setPassword(e.target.value)} />  <br />
                                </div>
                                
                                <div className='box-login-buttons'>
                                    <button onClick={handleLogin} className="btn loginButton" >Login</button>
                                    <button onClick={handleBack} className="btn backButton">Back</button>
                                </div>

                                <div className='box-forgot-pass-login'>
                                    <a href=""><p>Forgot your password ?</p></a>
                                </div>
                                
                        </div>
                    </div>
                </div>
            </section>
        </div>
        

    </>
}