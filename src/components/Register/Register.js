import react from 'react';
import './Register.css';
import Logo from '../../assets/images/logo2.png';

function Register() {
  return (
    <div class="signInContainer">
        <div className="column">
            <div class="header">
                <img src={Logo} title="Logo" alt="Site logo" />
                <h3>Sign Up</h3>
                <span>to continue to Navflix</span>
                

            </div>
                
                <input type="text" name="firstName" placeholder="First name"  required />

                <input type="text" name="lastName" placeholder="Last name"  required />

                <input type="text" name="username" placeholder="Username" required />

               
                <input type="email" name="email" placeholder="Email" required />
    
                <input type="email" name="email2" placeholder="Confirm email" required />

                <input type="password" name="password" placeholder="Password" required />

                <input type="password" name="password2" placeholder="Confirm password" required />
                
                <input type="submit" name="submitButton" value="SUBMIT" />
                
            <a href="login.php" class="signInMessage">Already have an account? Sign in here!</a>
            </div>
      </div>        
  )
}
export default Register;