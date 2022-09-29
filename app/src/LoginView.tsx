import { useState } from "react"
import { useToken } from "./TokenContext";


async function login(username: string, password: string) {
    const path = `http://localhost:5000/users?username=${username}&password=${password}`;
    
    const response = await fetch(path, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer'
    });

    return response;
}

export const LoginView = (props : {setToken: (token: string)=> void}) => {
    const {setToken} = props;

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const contextValue = useToken();

    const isLoggin: boolean = false;
   
    const handleLogin = async () => {
        const result = await login(username, password);
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

    const logout = () => {
        setMessage("You just logout");
        return setToken("");
    }
 

    return <>
    
        <h1>{contextValue}</h1>
        <h1>Login</h1>
        <input value={username} onChange={e => setUsername(e.target.value)} /> <br />
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} /> <br />
        <div>{message}</div><br/>
       
       
        <button onClick={handleLogin}>Login</button>
       
        <button onClick={logout}>Logout</button><br />
    </>
}