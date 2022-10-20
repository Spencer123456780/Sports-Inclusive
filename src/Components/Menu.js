import React from 'react';
import mypic from '../img/web.png'

import { Link } from "react-router-dom";
 
const Menu = () => {
    return (
        <> 
        
        <div style={{float:"left"}}><img src={mypic} /></div>

      
        <div className='menu'>
            {/* equivalent to < a href > ..</a> tag */}
            <Link to="/" className='myroute'>Home</Link>  
            <Link to="/about" className='myroute'>About</Link>
            <Link to="/contact" className='myroute'>Contact</Link>
            <Link to="/feedback" className='myroute'>Feedback</Link>
            
        </div>
        {/* <Outlet /> */}
        </>
      
       
    );
}
 
export default Menu;