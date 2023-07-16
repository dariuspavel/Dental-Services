import React, { useState } from 'react';
import { Person } from '../Interface/PersonDetails';
import "../css/RegisterPage.css"
import {createAccount } from '../api/BackendApi';
import { useNavigate } from 'react-router-dom';
import { Role } from '../Interface/Roles';

export const RegisterPage = () => {

    const navigate = useNavigate();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    let isFirstName: boolean = false;
    let isLastName: boolean = false;
    let isPassword: boolean = false;
    let isConfirmPass: boolean = false;
    let isEmail: boolean = false;
    let isPhone: boolean = false;

    const handleBack = () => {
         return navigate("/");
    }

    const isInputValid = (): boolean => {

       if (isFirstName && isLastName && isPassword && isConfirmPass && isEmail && isPhone) {
            return true;
       }
       return false;
    }

    const HandleRegister = () => {

        async function doRequest() {
            try {
                let newPerson: Person = {
                    id: Date.now(),
                    role: Role.CUSTOMER,
                    firstname: firstName,
                    lastname: lastName,
                    password: password,
                    email: email,
                    phone: Number(phone),
                    history: []
                    }
                await createAccount(newPerson);
            } catch  {
                //console.log("User already exists");
            }
        }
        doRequest();
        navigate("/");
    }
   
    const verifyFirstName = (): any => { 
       
       if (firstName.length > 0) {
            isFirstName = true;

            return <> <input 
            type="text" 
            style={{borderColor: "limegreen", borderStyle: 'solid'}} 
            className='first-name' 
            onChange={e => setFirstName(e.target.value)} /> <br/>
            </>
        }
    
        return <> <input type="text" className='first-name' onChange={e => setFirstName(e.target.value)} /> <br/> </>
    }

    const verifyLastName = (): any => {

        if (lastName.length > 0) { 
            isLastName = true;

            return <> <input 
            type="text" 
            style={{borderColor: "limegreen", borderStyle: 'solid'}} 
            className='last-name' 
            onChange={e => setLastName(e.target.value)} /> <br/>
            </>
        }
    
        return <> <input type="text" className='last-name' onChange={e => setLastName(e.target.value)} /> <br/> </>
    }

    const verifyPassword = (): any => { 
        
        if (password.length > 0 && password.length < 4) {
            isPassword = false;
            return <> <input 
            type="password" 
            style={{borderColor: "red" , borderStyle: 'solid'}} 
            className='password'
            onChange={e => setPassword(e.target.value)} /> <br/> </>;
        }
        else if (password.length > 3) {
            isPassword = true;

            return <> <input 
            type="password" 
            style={{borderColor: "limegreen" , borderStyle: 'solid'}} 
            className='password'
            onChange={e => setPassword(e.target.value)} /> <br/> </>;
        }
    
        return <> <input type="password" className='password'onChange={e => setPassword(e.target.value)} /> <br/> </>;
    }   


    const verifyConfirmPassword = (): any => { 
        
        if (password === confirmPassword && confirmPassword.length >= 4) {
            isConfirmPass = true;
            
            return <> <input 
            type="password" 
            style={{borderColor: "limegreen" , borderStyle: 'solid'}} 
            className='confirm-password'
            onChange={e => setConfirmPassword(e.target.value)} /> <br/> </>
        }
        else if (confirmPassword.length > 0) {
            isConfirmPass = false;
         
            return <> <input 
            type="password" 
            style={{borderColor: "red" , borderStyle: 'solid'}} 
            className='confirm-password'
            onChange={e => setConfirmPassword(e.target.value)} /> <br/> </>
        }

        return <> <input type="password" className='confirm-password'onChange={e => setConfirmPassword(e.target.value)} /> <br/> </>
    }

    const verifyEmail = (): any => {

        const emailPattern: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        
        if (emailPattern.test(email)){
            isEmail = true;
            
            return <> <input 
            type="email" 
            style={{borderColor: "limegreen", borderStyle: 'solid'}} 
            className='email' 
            onChange={e => setEmail(e.target.value)} /><br /> </>
        }
        else if (email.length > 0) {
            isEmail = false;

            return <> <input 
            type="email" 
            style={{borderColor: "red" , borderStyle: 'solid'}}  
            className='email' 
            onChange={e => setEmail(e.target.value)} /><br /> </>
        }

        return <> <input type="email" className='email' onChange={e => setEmail(e.target.value)} /><br /></>
    }    
    
    const verifyPhoneNr = (): any => {    
        
        if (phone.length >= 10) {
            isPhone = true;
            return <> <input 
            type="tel"
            style={{borderColor: "limegreen", borderStyle: 'solid'}}  
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" 
            className='phone' 
            onChange={e => setPhone(e.target.value)} /> <br/> 
            </>
        }
        else if (phone.length > 0 && phone.length < 10){
            return <> <input 
            type="tel"
            style={{borderColor: "red", borderStyle: 'solid'}}  
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" 
            className='phone' 
            onChange={e => setPhone(e.target.value)} /> <br/> 
            </>
        }
       return <> <input type="tel"  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" className='phone' onChange={e => setPhone(e.target.value)} /> <br/> </>
    }
    
    const VerifySubmit = (): any => {
        
        if (isInputValid()) {

            return <> <button className='submitButton' id="buttonEnable" onClick={HandleRegister}> Submit </button></>
            
        }
        return <> <input className='submitButton' id="buttonDisable" type="submit" value="Submit" disabled /> </>
    }

    return<>
        <div className='board'>
            <label >First Name</label> <br/>
            {verifyFirstName()}
            <label >Last Name</label> <br/>
            {verifyLastName()}
            <label >Password</label> <br/>
            {verifyPassword()}
            <label >Confirm Password</label> <br/>
            {verifyConfirmPassword()}
            <label >Email</label> <br/>
            {verifyEmail()}
            <label >Phone</label> <br/>
            {verifyPhoneNr()}
            {VerifySubmit()}
            <button className='registerBackButton' onClick={handleBack}>Back</button>
            </div>
    </>
}