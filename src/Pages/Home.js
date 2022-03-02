import React,{useEffect,useContext} from 'react';

import Navigation from '../components/Navigation/Navigation';

import Posts from '../components/AllPost/AllPost';
import Footer from '../components/Footer/Footer';
import SideBar from '../components/SideBar/SideBar';


function Home(props) {

  
  return (
    <div className="homeParentDiv">
      <Navigation />
      <SideBar />
      <Posts />
      <Footer />
    </div>
  );
}

export default Home;