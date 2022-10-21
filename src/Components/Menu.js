import React from 'react';

import { Link } from "react-router-dom";
 
const Menu = () => {
    return (
        <> 
        <div className='menu'>
            {/* equivalent to < a href > ..</a> tag */}
            <Link to="/" className='myroute'>Home</Link>  
            <Link to="/AccountCreation" className='myroute'>Account Creation</Link>
            <Link to="/ " className='myroute'>Login</Link>
            <Link to="/ " className='myroute'>Sport 1</Link>
            <Link to="/ " className='myroute'>Sport 2</Link>
            <Link to="/ " className='myroute'>Sport 3</Link>
            <Link to="/ " className='myroute'>Sport 4</Link>
            
        </div>
        {/* <Outlet /> */}
        </>
    );
}
 
export default Menu;