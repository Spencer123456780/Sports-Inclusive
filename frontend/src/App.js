import React, { Component } from 'react';
import { BrowserRouter,Routes ,Route } from 'react-router-dom';
import NbaLanding from './Pages/NBA';
import Home from './Pages/Home';
import AccountCreation from './Pages/AccountCreation';
import NFL from './Pages/NFL';
import SignIn from './Pages/SignIn';
import NHL from './Pages/NHL';
import Menu from './Components/Menu';
import AccountPage from './Pages/AccountPage';
 
class App extends Component {
  render() {
    return (  
      <>
      
       <BrowserRouter>
          <Menu />
          <Routes>
             <Route  index element={<Home />} exact/>
             <Route path="/AccountCreation" element={<AccountCreation />}/>
             <Route path="/NBA" element={<NbaLanding/>}/>
             <Route path="/AccountCreation" element={<AccountCreation />}/>
             <Route path="/NFL" element={<NFL />}/>
             <Route path="/NHL" element={<NHL/>}/>
             <Route path="/SignIn" element={<SignIn />}/>
             <Route path="/AccountPage" element={<AccountPage/>}/>

            
          <Route component={Error}/>
          </Routes>
       </BrowserRouter>

      </>   
    );
  }
}
 
export default App;