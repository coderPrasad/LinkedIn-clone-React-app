import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
//import { Provider, useSelector } from "react-redux";
//import { selectUser } from './features/userSlice';




function App() {

  

  return (
    
    <div className="App">
      <h1>Let's Build a Linkedin clone</h1>
      {/* HEader */}
      <Header />
      {/* App body */}
      
         <div className='app_body'>
         <Sidebar />
         <Feed />
         {/* sidebar */}
         {/* Widget */}
       </div>
      
     
    </div>
    
  );
}

export default App;
