import React from 'react'
import {useState} from 'react'
import '../css/App.css'

function Feedback(){
    const[name, setName] = useState("")    
    const[city, setCity] = useState("")
    const[email, setEmail] = useState("")
    const[comment, setComment] = useState("")
    const[rate, setRate]= useState(0)
    const[Profession, setProfession] = useState("")

    const handleSubmit = (e)=>
    {
        e.preventDefault();
        alert(`user name is ${name} ${city} ${email} ${comment} ${rate} ${Profession}` )
    }
    return(
        <div className='myform'>      
            <form onSubmit={handleSubmit}>
                <div>
                 <label>Name <input type="text" onChange={(e)=>setName(e.target.value)} />  </label>
                </div>
                <div> <label> City <input type="text" onChange={(e)=>setCity(e.target.value)} /></label></div>
                <div> <label> Email <input type="email" onChange={(e)=>setEmail(e.target.value)} ></input></label></div>
                <div> <label> Comment <textarea type="text" onChange={(e)=>setComment(e.target.value)} /></label></div>
                <div><label> Rate <input type="button" onClick={()=>setRate(rate+1)} value= {rate}/> </label></div>
                <div> <label> Profession <select type="text" onChange={(e)=>setProfession(e.target.value)}>
                            <option>IT expert</option>
                            <option>Engineer</option>
                            <option>Social worker</option>
                        </select></label></div><br /> 

                <div><button type='submit' >Send</button>  </div>              
            </form>

            {/* <h2>Add another input element to store email</h2> */}
        </div>
    ) 
 
}

export default Feedback;