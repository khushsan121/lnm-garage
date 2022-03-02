import react from 'react';
import { Link } from "react-router-dom";
import './SignIn.css';
import Logo from '../../assets/images/logo2.png';
function SignIn() {
  return (
    <div className="mystyle ">
    <div className="signInContainer">
        <div className="column">
            <div className="header">
                <img src={Logo} title="Logo" alt="Site logo"/>
                <h3>Sign In</h3>
                <span >to continue to LNM Sell</span>
                

            </div>

                <input type="text" name="username" placeholder="Username" required/>

                <input type="password" name="password" placeholder="Password" required />
                
              <Link to='/'>  <input className="grow" type="submit" name="submitButton" value="SUBMIT" /></Link>

            
            <Link to='/signup'>Need an account? Sign up here!</Link>

        </div>
    </div>
    </div>
  )
}
export default SignIn;    