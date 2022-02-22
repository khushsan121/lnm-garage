import React  from 'react';
import Navigation from './components/Navigation/Navigation';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import PostCard from './components/PostCard/PostCard';
import Featured from './components/Featured/Featured';
import AllPost from './components/AllPost/AllPost';
import SideBar from './components/SideBar/SideBar';
import {useEffect, useState} from 'react';

function App() {
  let [isLoggedIn,setIsLoggedIn]=useState(false);
  useEffect(()=>{
    console.log(isLoggedIn);
  },[isLoggedIn]);
  if(isLoggedIn)
  {
    return (
      <div className="App">
        
          <Navigation isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
          <SideBar />
          <AllPost />
  

        
  
      </div>
    )
  }
  else{
    return (
      <div className="App">
        <Navigation isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <SignIn />
      </div>
    );   
  }
  
}
export default App; 