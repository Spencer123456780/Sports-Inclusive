import React, { Component } from 'react';
import { BrowserRouter,Routes ,Route } from 'react-router-dom';
 
import Home from './Pages/Home';
import AccountCreation from './Pages/AccountCreation';
import Menu from './Components/Menu';
 
class App extends Component {
  render() {
    return (  
      <>
      
       <BrowserRouter>
          <Menu />
          <Routes>
             <Route  index element={<Home />} exact/>
             <Route path="/AccountCreation" element={<AccountCreation />}/>
             <Route path="/AccountCreation" element={<AccountCreation />}/>
             <Route path="/AccountCreation" element={<AccountCreation />}/>
             <Route path="/AccountCreation" element={<AccountCreation />}/>

            
          <Route component={Error}/>
          </Routes>
      </BrowserRouter>

      </>   
    );
  }
}
 
export default App;