import React, { useState } from 'react';
import { Person } from '../../Interface/PersonDetails';
import "..//CSS//RegisterView.css"

async function createAccount(person: Person) {
    const path = `http://localhost:5000/users`;

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


export const RegisterView = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [mail, setMail] = useState("");
    const [phone, setPhone] = useState("");

    let isFirstName: boolean = false;
    let isLastName: boolean = false;
    let isPassword: boolean = false;
    let isConfirmPass: boolean = false;
    let isEmail: boolean = false;
    let isPhone: boolean = false;

    const isInputCorrect = (): boolean => {

       if (isFirstName && isLastName && isPassword && isConfirmPass && isEmail && isPhone) {
            return true;
       }
       return false;
    }

    const handleRegister = () => {

        async function doRequest() {
            try {
                let newPerson: Person = {
                    id: Date.now(),
                    firstname: firstName,
                    lastname: lastName,
                    password: password,
                    mail: mail,
                    phone: Number(phone)
                    }
                await createAccount(newPerson);
            } catch  {
                //console.log("User already exists");
            }
        }
        doRequest();

    }
   
   let verifyFirstName: any = <> <input type="text" className='first-name' onChange={e => setFirstName(e.target.value)} /> <br/> </>
    
    if (firstName.length > 0) {
        isFirstName = true;
        verifyFirstName = <> <input 
        type="text" 
        style={{borderColor: "green", borderStyle: 'solid'}} 
        className='first-name' 
        onChange={e => setFirstName(e.target.value)} /> <br/>
        </>
    }

    let verifyLastName: any = <> <input type="text" className='last-name' onChange={e => setLastName(e.target.value)} /> <br/> </>
    if (lastName.length > 0) { 
        isLastName = true;
        verifyLastName = <> <input 
        type="text" 
        style={{borderColor: "green", borderStyle: 'solid'}} 
        className='last-name' 
        onChange={e => setLastName(e.target.value)} /> <br/>
        </>
    }

    let verifyPassword: any = <> <input type="password" className='password'onChange={e => setPassword(e.target.value)} /> <br/> </>;

    if (password.length > 0 && password.length < 4) {
        isPassword = false;
        verifyPassword = <> <input 
        type="password" 
        style={{borderColor: "red" , borderStyle: 'solid'}} 
        className='password'
        onChange={e => setPassword(e.target.value)} /> <br/> </>;
    }
    else if (password.length > 3) {
        isPassword = true;
        verifyPassword = <> <input 
        type="password" 
        style={{borderColor: "green" , borderStyle: 'solid'}} 
        className='password'
        onChange={e => setPassword(e.target.value)} /> <br/> </>;
    }

    let verifyConfirmPassword: any = <> <input type="password" className='confirm-password'onChange={e => setConfirmPassword(e.target.value)} /> <br/> </>

    if (password === confirmPassword && confirmPassword.length >= 4) {
        isConfirmPass = true;
        verifyConfirmPassword = <> <input 
        type="password" 
        style={{borderColor: "green" , borderStyle: 'solid'}} 
        className='confirm-password'
        onChange={e => setConfirmPassword(e.target.value)} /> <br/> </>
    }
    else if (confirmPassword.length > 0) {
        isConfirmPass = false;
        verifyConfirmPassword = <> <input 
        type="password" 
        style={{borderColor: "red" , borderStyle: 'solid'}} 
        className='confirm-password'
        onChange={e => setConfirmPassword(e.target.value)} /> <br/> </>
    }

    let verifyEmail: any = <> <input type="email" className='email' onChange={e => setMail(e.target.value)} /><br /></>

    const emailPattern: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    if (emailPattern.test(mail)){
        isEmail = true;
        verifyEmail = <> <input 
        type="email" 
        style={{borderColor: "green", borderStyle: 'solid'}} 
        className='email' 
        onChange={e => setMail(e.target.value)} /><br /> </>
    }
    else if (mail.length > 0) {
        isEmail = false;
        verifyEmail = <> <input 
        type="email" 
        style={{borderColor: "red" , borderStyle: 'solid'}}  
        className='email' 
        onChange={e => setMail(e.target.value)} /><br /> </>
        
    }

    let verifyPhoneNr: any = <> <input type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" className='phone' onChange={e => setPhone(e.target.value)} /> <br/> </>

    if (phone.length > 0) {
        isPhone = true;
        verifyPhoneNr = <> <input 
        type="tel"
        style={{borderColor: "green", borderStyle: 'solid'}}  
        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" 
        className='phone' 
        onChange={e => setPhone(e.target.value)} /> <br/> 
        </>
    }
    
    let verifySubmit: any = <> <input type="submit" value="Submit" disabled name="" id="" /> </>

    if (isInputCorrect()) {
        verifySubmit = <> <button onClick={handleRegister}> Submit </button></>
    }

    return<>

        <label >First Name</label> <br/>
        {verifyFirstName}
        <label >Last Name</label> <br/>
        {verifyLastName}
        <label >Password</label> <br/>
        {verifyPassword}
        <label >Confirm Password</label> <br/>
        {verifyConfirmPassword}
        <label >Mail</label> <br/>
        {verifyEmail}
        <label >Phone</label> <br/>
        {verifyPhoneNr}
        {verifySubmit}

    
    </>
}