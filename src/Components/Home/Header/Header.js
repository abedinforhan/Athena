import React from 'react';
import './Header.css';
import logo from '../../../images/logo.png';

const Header = () => {
      return (
            <nav class="navbar navbar-expand-lg navbar-light">
                  <img style={{height: '8rem', marginLeft: '10rem'}} src={logo} alt=""/>
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse ml-auto  d-flex align-items-start" id="navbarNav">
                        <ul class="navbar-nav ml-auto  p-5 m-5">
                              <li class="nav-item active">
                              <a class="nav-link mr-5" href="#">Home <span class="sr-only">(current)</span></a>
                              </li>
                              <li class="nav-item mr-5">
                              <a class="nav-link" href="#">About</a>
                              </li>
                              <li class="nav-item">
                              <a class="nav-link mr-5" href="#">Services</a>
                              </li>
                              <li class="nav-item">
                              <a class="nav-link mr-5" href="#">Pricing</a>
                              </li>
                              <li class="nav-item">
                              <a class="nav-link" href="#">Our Team</a>
                              </li>
                        </ul>
                        <button className="header__button">Contact us</button>
                  </div>
            </nav>
      );
};

export default Header;