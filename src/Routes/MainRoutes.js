import React from 'react';
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import CreatePage from '../Pages/CreatePost';
import Home from '../Pages/Home';
import LoginPage from '../Pages/SignIn';
import SignupPage from '../Pages/SignUp';
import ViewPost from '../Pages/ViewPost';




function MainRoutes() {
    return (
    <Router>
      <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/create" element={<CreatePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/viewpost" element={<ViewPost />} />

         
      </Routes>

        
    </Router>
    )
};

export default MainRoutes;