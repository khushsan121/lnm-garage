import React from 'react';
import { SocialIcon } from 'react-social-icons';

import './Footer.css';

function Footer() {
  return (
    <div className="footerParentDiv">
      <div className="content">
        <div>
          <div className="heading">
            <p>FOLLOW US </p>
          </div>
          <div className="list">
            
              <SocialIcon  className='grow' url="https://www.linkedin.com/in/khushwant-sankhla-86692b200/"/>
              <SocialIcon className='grow' url="https://www.instagram.com/khushwantsankhla/"/>
            
          </div>
        </div>
        <div>
          <div className="heading">
            <p>ABOUT US</p>
          </div>
          <div className="list">
            <ul>
              <li>About LNM Garage</li>
              <li>Careers</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="heading">
            <p>OLX</p>
          </div>
          <div className="list">
            <ul>
              <li >Help</li>
              <li>Sitemap</li>
              <li>Legal & Privacy information</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer">
        <p>LNM Insitute of information Technlogy,Jaipur</p>
        <p>Free Classifieds in LNMIIT. © 2021-2022 LNM GARAGE</p>
      </div>
    </div>
  );
}

export default Footer;