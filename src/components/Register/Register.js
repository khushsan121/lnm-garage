import react from 'react';
import './Register.css';
import Logo from '../../assets/images/logo2.png';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <div class="signInContainer">
        <div className="column">
            <div class="header">
                <img src={Logo} title="Logo" alt="Site logo" />
                <h3>Sign Up</h3>
                <span>to continue to Navflix</span>
                

            </div>
                
                <input type="text" name="Name" placeholder="Your name"  required />



               
                <input type="email" name="email" placeholder="Email" required />
    
                <input type="email" name="email2" placeholder="Confirm email" required />

                <input type="password" name="password" placeholder="Password" required />

                <input type="password" name="password2" placeholder="Confirm password" required />

                <input type="number" name="number" placeholder="Phone number" required />
                
                <input className="grow" type="submit" name="submitButton" value="SUBMIT" />
                
            <Link to='/login'>Already have an account? Sign in here!</Link>
            </div>
      </div>        
  )
}
export default Register;