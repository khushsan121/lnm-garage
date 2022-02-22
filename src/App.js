import React from 'react';
import Navigation from './components/Navigation/Navigation';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import PostCard from './components/PostCard/PostCard';

function App() {
  return (
    <div className="App">
      <Navigation />
      <PostCard />

    </div>
  )
}
export default App; 