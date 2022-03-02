import React from 'react';
import Login from '../components/SignIn/SignIn';
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';

function LoginPage() {
  return (
    <div>
        <Navigation />
      <Login />
      <Footer />
    </div>
  );
}

export default LoginPage;