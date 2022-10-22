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
        <div className='myform'>      
            <form onSubmit={handleSubmit}>
                <div> <label> First Name: <input type="text" onChange={(e)=>setName(e.target.value)}/>  </label> </div>
                <div> <label> Last Name: <input type="text" onChange={(e)=>setLastname(e.target.value)}/></label></div>
                <div> <label> Email: <input type="email" onChange={(e)=>setEmail(e.target.value)} /></label></div>
                <div> <label> Password: <input type="password" onChange={(e)=>setPassword(e.target.value)}/></label></div>
                <div> <label> Confirm Password: <input type="password" onChange={(e)=>setConfermPassword(e.target.value)}/> </label></div>
                <br /> 

                <div><button type='submit' >Submit</button>  </div>              
            </form>
        </div>
    ) 
}

export default AccountCreation;
