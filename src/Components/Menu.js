import React from 'react';

import { Link } from "react-router-dom";
 
const Menu = () => {
    return (
        <> 
        <div className='menu'>
            {/* equivalent to < a href > ..</a> tag */}
            <Link to="/" className='myroute'>Home</Link>  
            <Link to="/AccountCreation" className='myroute'>Account Creation</Link>
            <Link to="/" className='myroute'>Login</Link>
            <Link to="/NBA" className='myroute'>NBA</Link>
            <Link to="/NHL" className='myroute'>NHL</Link>
            <Link to="/NFL" className='myroute'>NFL</Link>
            
        </div>
        {/* <Outlet /> */}
        </>
    );
}
 
export default Menu;