import React, { Component } from 'react';
import { BrowserRouter,Routes ,Route } from 'react-router-dom';
 
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Error from './Pages/Error';
import Menu from './Components/Menu';
import Feedback from './Pages/Feedback';
import Signup from './Pages/Signup';
 
class App extends Component {
  render() {
    return (  
      <>
      
       <BrowserRouter>
          <Menu />
          <Routes>
             <Route  index element={<Home />} exact/>
             <Route path="/about" element={<About />}/>
             <Route path="/contact" element={ <Contact />}/>
             <Route path="/feedback" element={ <Feedback />}/>

            
          <Route component={Error}/>
          </Routes>
      </BrowserRouter>

      <Signup />

      </>   
    );
  }
}
 
export default App;