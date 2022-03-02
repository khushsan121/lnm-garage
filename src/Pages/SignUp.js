import React from 'react';

import Signup from '../components/Register/Register';
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';

function SignupPage() {
  return (
    <div>
        <Navigation />
        <Signup />
        <Footer/>
    </div>
  );
}

export default SignupPage;