import { useState } from "react"


async function createAccount(username: string, password: string) {
    const path = `http://localhost:5000/users`;
    const body = {
        username,
        password
    }

    const response = await fetch(path, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(body)
    });
    
    return response.json();
}

export const RegisterView = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleRegister = () => {
        setError("");
        async function doRequest() {
            try {
                await createAccount(username, password);
            } catch  {
                setError("User already exists");
            }
        }
        doRequest();
    }

    return <>
        <h1>Create new account</h1>
        <input value={username} onChange={e => setUsername(e.target.value)} /> <br />
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} /> <br />
        <div>{error}</div><br/>
        <button onClick={handleRegister}>Create Account</button>
        
    </>
}