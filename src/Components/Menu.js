import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const magnify = <FontAwesomeIcon icon={faMagnifyingGlass}/> 
const profileIcon = <FontAwesomeIcon icon={faUser}/>

 
const Menu = () => {
    return (
        <> 
        <div className='menu'>
            <div className='Top_Nav'>

                <div className='League_Links'>
                    <div><Link to="/NBA" className='League_Route'>NBA</Link></div>
                    <div><Link to="/NHL" className='League_Route'>NHL</Link></div>
                    <div><Link to="/NFL" className='League_Route'>NFL</Link></div>
                </div>

                <div className='Search_Div'>{magnify}<input id='Search_Bar' type='text' placeholder='  Search..'></input></div>

                <div>
                    <div><Link to='/AccountCreation' className='Account_Route' >{profileIcon} Account</Link></div>
                </div>

            </div> 
            <div className='Bottom_Nav'>
                <div><Link to="/" id='Home_Header'>Sports Inclusive</Link></div>
                <div><button className='SignIn' id='SignIn'><Link className='SignIn' to='Signin'>Sign In</Link></button></div>

            </div>
           
            
        </div>
    
        </>
    );
}
 
export default Menu;