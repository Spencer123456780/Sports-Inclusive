import React from "react";
import {useState} from 'react';
import '../css/App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fa2, fa9, faUser, faUserLarge } from '@fortawesome/free-solid-svg-icons';
const profileIcon = <FontAwesomeIcon icon={faUser} size= '10x'/>




const AccountPage = () => {

    return(
        <>
            <h1 id="AccountTitle">Account Profile</h1>
            <div id="AccountPageSpacing">
            
                <div id="AccountImage">
                <h3 id="ImageName">{profileIcon}</h3>
                </div>

                <div id="AccountInfomation">
                    <br/>
                    <div id="AccountPageForms">
                        <form>
                            <div><p id="AccFN"> First Name: </p>  </div>
                            <div><p id="AccLN"> Last Name: </p>   </div>
                            <div><p id="Emailz"> Email: </p>   </div>
                            <div><p id="PassAndWords"> Password: </p> </div>
                            <br/> 
                            <br/> 
                            <br/>           
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AccountPage;