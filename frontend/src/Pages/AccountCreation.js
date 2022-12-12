import React,{useState, useEffect} from 'react';
import Axios from 'axios'
import '../css/App.css';


function AccountCreation(){
    const[Firstname, setName] = useState("")    
    const[Lastname, setLastname] = useState("")
    const[Email, setEmail] = useState("")
    const[Password, setPassword] = useState("")


    const handleSubmit = ()=>
    {
        const user = {Firstname:Firstname, Lastname:Lastname, Email:Email, Password:Password}
        Axios.post('http://localhost:5000/newuser/'+ user)
        .then((response) => {
        console.log(response);
        console.log("User Information Sent")})
    }


    return(
        <div className='AccountCreation'>
            <div className='AccountForm'>
                <form>
                    <div> <p> First Name: </p> <input name="Firstname" className='AccountInput' type="text" onChange={(e)=>setName(e.target.value)}/> </div>
                    <div> <p> Last Name: </p> <input name="Lastname" className='AccountInput' type="text" onChange={(e)=>setLastname(e.target.value)}/> </div>
                    <div> <p> Email: </p> <input name="Email" className='AccountInput' type="email" onChange={(e)=>setEmail(e.target.value)} /> </div>
                    <div> <p> Password: </p> <input name="Password" className='AccountInput' type="password" onChange={(e)=>setPassword(e.target.value)}/></div>
                    <br /> 
                    <br /> 

                    <div><button onClick={handleSubmit}>Create</button></div> 
                    <br/>           
                </form>
            </div>
        </div>
    ) 
}

export default AccountCreation;
