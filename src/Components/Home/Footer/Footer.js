import React from 'react';
//image 
import logo from '../../../Images/logo.png';
import './Footer.css';
import fb from '../../../Images/facebook-logo-in-circular-shape@2x.png';
import twitter from '../../../Images/twitter (4)@2x.png';
import link from '../../../Images/linkedin (2)@2x.png';
import drib from '../../../Images/dribbble (1)@2x.png';



const Footer = () => {
    return (
        <div className="footer">
           
            <div className="footer__top container">
                <h2>Get your design right, right now</h2>
                <br/>
                <p>Be the first know our latest offers and updates!</p>
             
                <div className="footer__topSearch shadow">
                    <input type="text" placeholder='         Enter your email address'/>
                    <input type="submit" value ='Get Started'/>
                </div>
            </div>
            <br/>

            <div className="footer__bottom container">
                <div className="row">
                <div className="footer__bottomList col-md-3">
                        <img src={logo} className="footer__bottomLogo"/>

                        <div className = "d-flex justify-content-between">
                            <img src={fb} alt="" className="social-icon" />
                            <img src={twitter} alt="" className="social-icon"/>
                            <img src={link} alt="" className="social-icon"/>
                            <img src={drib} alt="" className="social-icon"/>
                            <img src={drib} alt="" className="social-icon"/>
                        </div>
                    </div>
                    <div className="footer__bottomList col-md-3">
                        <p className = "text-secondary">Features</p>
                        <p className = "text-secondary">Enterprise</p>
                        <p className = "text-secondary">Pricing</p>
                    </div>
                    <div className="footer__bottomList col-md-3">
                        <p className = "text-secondary">Blog</p>
                        <p className = "text-secondary">Help Center</p>
                        <p className = "text-secondary">Contact Us</p>
                        <p className = "text-secondary">Status</p>
                    </div>
                    <div className="footer__bottomList col-md-3">
                        <p className = "text-secondary">About Us</p>
                        <p className = "text-secondary">Terms of Service</p>
                        <p className = "text-secondary">Security</p>
                        <p className = "text-secondary">Login</p>
                    </div>

                </div>
           </div>
        </div>

    );
};

export default Footer;




