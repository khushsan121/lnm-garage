import React,{useEffect,useContext} from 'react';

import Navigation from '../components/Navigation/Navigation';

import Posts from '../components/AllPost/AllPost';
import Footer from '../components/Footer/Footer';
import SideBar from '../components/SideBar/SideBar';
import Featured from '../components/Featured/Featured';


function Home(props) {

  
  return (
    <div className="homeParentDiv">
      <Navigation />
      <SideBar />
      <Featured />
      <Posts />
      <Footer />
    </div>
  );
}

export default Home;