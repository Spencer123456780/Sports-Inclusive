import React,{useState, useEffect} from 'react';
import Axios from 'axios'
import '../css/App.css'
import { response } from 'express';
function findUser(){
    const [Firstname, setFname] = useState("");
    const [Lastname, setLname] = useState("");
    const [Email, setemail] = useState("email");
    const [Password, setpassowrd] = useState("");

    const submitPost = () => {
        Axios.get(`http://localhost:5000/finduser`+Firstname)
        .then((response) =>{
            setFname(response.data.Firstname)
            setLname(response.data.Lastname)
            setemail(response.data.Email)
            setpassowrd(response.data.Password)
            console.log(response.data)
        })
    }

}
export default findUser