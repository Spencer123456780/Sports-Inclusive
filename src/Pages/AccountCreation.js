import React from 'react';
import {useState} from 'react';
import '../css/App.css';


function AccountCreation(){
    const[Firstname, setName] = useState("")    
    const[Lastname, setLastname] = useState("")
    const[Email, setEmail] = useState("")
    const[Password, setPassword] = useState("")
    const[ConfirmPassword, setConfermPassword]= useState("")


    const handleSubmit = (e)=>
    {
        e.preventDefault();
        alert(`user name is ${Firstname} ${Lastname} ${Email} ${Password} ${ConfirmPassword}` )
    }
    return(
        <div className='AccountCreation'>
            <div className='AccountForm'>
                <form onSubmit={handleSubmit}>
                    <div> <p> First Name: </p> <input className='AccountInput' type="text" onChange={(e)=>setName(e.target.value)}/> </div>
                    <div> <p> Last Name: </p> <input className='AccountInput' type="text" onChange={(e)=>setLastname(e.target.value)}/> </div>
                    <div> <p> Email: </p> <input className='AccountInput' type="email" onChange={(e)=>setEmail(e.target.value)} /> </div>
                    <div> <p> Password: </p> <input  className='AccountInput' type="password" onChange={(e)=>setPassword(e.target.value)}/></div>
                    <div> <p> Confirm Password: </p> <input className='AccountInput' type="password" onChange={(e)=>setConfermPassword(e.target.value)}/> </div>
                    <br /> 
                    <br /> 

                    <div><button type='submit' >Create</button></div> 
                    <br/>           
                </form>
            </div>
        </div>
    ) 
}

export default AccountCreation;
