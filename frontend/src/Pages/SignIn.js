import React,{useState, useEffect} from 'react';
import '../css/App.css';
import { Link } from "react-router-dom";
import Axios from 'axios'






function AccountSignIn(){
    const[Email, setEmail] = useState("")
    const[Password, setPassword] = useState("")


    const handleSubmit = ()=>
    {
        const email = {Email:Email}
        console.log(email);

    Axios.get(`http://localhost:5000/user/`+Email)
    .then((response) => {
        console.log(response);
        console.log("get the response and send me to account page")
    })
    }

    return(
        <div className='AccountCreation'>
            <div className='AccountForm'>      
                <form onSubmit={handleSubmit}>
                    <div> <p> Email: </p> <input name="Email" className='AccountInput' type="email" onChange={(e)=>setEmail(e.target.value)} /> </div>
                    <div> <p> Password: </p> <input name="Password" className='AccountInput' type="password" onChange={(e)=>setPassword(e.target.value)}/></div>
                    <br /> 
                    <br /> 

                    <div> <button onClick={handleSubmit}>Sign In</button> <Link to ='/AccountCreation'> Create an Account</Link> </div>
                    <br/>           
                </form>
            </div>
        </div>
    ) 
}

export default AccountSignIn;
