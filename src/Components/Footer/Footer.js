import React from 'react';
//image 
import logo from '../../Images/logo.png';
import './Footer.css';



const Footer = () => {
    return (
        <div className="footer">
           
            <div className="footer__top container">
                <h2>Get your design right, right now</h2>
                <h5>Be the first know our latest offers and updates!</h5>
             
                <div className="footer__topSearch">
                    <input type="text" placeholder='enter your email'/>
                    <input type="submit" value ='Get Started'/>
                </div>
            </div>

            <div className="footer__bottom container">
                <div className="row">
                <div className="footer__bottomList col-md-3">
                        <img src={logo} className="footer__bottomLogo"/>
                    </div>
                    <div className="footer__bottomList col-md-3">
                        <span>Features</span>
                        <span>Enterprise</span>
                        <span>Pricing</span>
                    </div>
                    <div className="footer__bottomList col-md-3">
                        <span>Blog</span>
                        <span>Help Center</span>
                        <span>Contact Us</span>
                        <span>Status</span>
                    </div>
                    <div className="footer__bottomList col-md-3">
                        <span>About Us</span>
                        <span>Terms of Service</span>
                        <span>Security</span>
                        <span>Login</span>
                    </div>

                </div>
           </div>
        </div>

    );
};

export default Footer;




