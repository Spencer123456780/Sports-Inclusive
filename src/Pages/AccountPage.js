import React from "react";
import {useState} from 'react';
import '../css/App.css';





const AccountPage = () => {
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
        <>
            <h1 id="AccountTitle">Account Profile</h1>
            <div id="AccountPageSpacing">
            
                <div id="AccountImage">
                <h3 id="ImageName">Image Here</h3>
                </div>

                <div id="AccountInfomation">
                    <br/>
                    <div id="AccountPageForms">
                        <form>
                            <div> <p> First Name: </p> <input className='AccountInfoInput' type="text" onChange={(e)=>setName(e.target.value)}/> </div>
                            <div> <p> Last Name: </p> <input className='AccountInfoInput' type="text" onChange={(e)=>setLastname(e.target.value)}/> </div>
                            <div> <p> Email: </p> <input className='AccountInfoInput' type="email" onChange={(e)=>setEmail(e.target.value)} /> </div>
                            <div> <p> Password: </p> <input  className='AccountInfoInput' type="password" onChange={(e)=>setPassword(e.target.value)}/></div>
                            <div> <p> Confirm Password: </p> <input className='AccountInfoInput' type="password" onChange={(e)=>setConfermPassword(e.target.value)}/> </div>
                            <br/> 
                            <br/> 
                            <div><button type='submit' >Update</button></div> 
                            <br/>           
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AccountPage;