import { Person } from "../Interface/PersonDetails";

export const BACKEND_URL = "http://localhost:5000";

export async function createAccount(person: Person) {
    const path = `${BACKEND_URL}/users`;

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
        body: JSON.stringify(person)
    });
    
    return response.json();
}


export async function getAccount(path:string, token:string) {
    const fullUrl = `${BACKEND_URL}${path}`;

    const response = await fetch(fullUrl, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": token
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer'
    });

    return response;
}

export async function login(email: string, password: string) {
    const path = `http://localhost:5000/users?username=${email}&password=${password}`;

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

