import React from 'react';
import { Link } from "react-router-dom";
 
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

                <div><input id='Search_Bar' type='text' placeholder='  Search..'></input></div>

                <div>
                    <div><Link to='/AccountCreation' className='Account_Route' >Account</Link></div>
                </div>

            </div>
            <div className='Bottom_Nav'>
                <div><Link to="/" id='Home_Header'>Sports Inclusive</Link></div>
                <div><button id='SignIn'>Sign In</button></div>

            </div>
           
            
        </div>
    
        </>
    );
}
 
export default Menu;