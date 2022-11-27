import React from 'react';
import {useState} from 'react';
import '../css/App.css';
import { Link } from "react-router-dom";


function AccountSignIn(){
    const[Email, setEmail] = useState("")
    const[Password, setPassword] = useState("")


    const handleSubmit = (e)=>
    {
        e.preventDefault();
        alert(`user name is ${Email} ${Password}` )
    }
    return(
        <div className='AccountCreation'>
            <div className='AccountForm'>      
                <form onSubmit={handleSubmit}>
                    <div> <p> Email: </p> <input className='AccountInput' type="email" onChange={(e)=>setEmail(e.target.value)} /> </div>
                    <div> <p> Password: </p> <input  className='AccountInput' type="password" onChange={(e)=>setPassword(e.target.value)}/></div>
                    <br /> 
                    <br /> 

                    <div> <button type='submit' >Sign In</button> <Link to ='/AccountCreation'> Create an Account</Link> </div>
                    <br/>           
                </form>
            </div>
        </div>
    ) 
}

export default AccountSignIn;
