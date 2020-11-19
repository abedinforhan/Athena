import React from 'react';
import { default as img1, default as img4 } from '../../../Images/img1.png';
import img2 from '../../../Images/img2.png';
import img3 from '../../../Images/img3.png';
import './WorkDetails.css';

const WorkDetails = () => {
      return (
            <section className = "workDetails container ">
                  <div>
                        <h1 className="section-name text-center">What we do</h1>
                        <p className="text-secondary text-center">Our main focus is to make the User Experience very <br/> simple and easy. Simplicity is our Strength.</p>
                  </div>
                 
                  <div className=" info-cards">
                        <div className="row d-flex justify-content-center align-items-center">
                              <div className="info-card-item col-12 col-sm-6 col-md-3 col-lg-3 text-center">
                                    <img src={img1} alt="" className="img-fluid"/>
                                    <h2 className="">Experience Design</h2>
                                    <p className = "text-muted">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, necessitatibus?</p>
                              </div>

                              <div className="info-card-item col-12 col-sm-6 col-md-3 col-lg-3 text-center">
                                    <img src={img2} alt="" className="img-fluid"/>
                                    <h2 className="">Experience Design</h2>
                                    <p className = "text-muted">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, necessitatibus?</p>
                              </div>

                              <div className="info-card-item col-12 col-sm-6 col-md-3 col-lg-3 text-center">
                                    <img src={img3} alt="" className="img-fluid"/>
                                    <h2 className="">Experience Design</h2>
                                    <p className = "text-muted">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, necessitatibus?</p>
                              </div>

                              <div className="info-card-item col-12 col-sm-6 col-md-3 col-lg-3 text-center">
                                    <img src={img4} alt="" className="img-fluid"/>
                                    <h2 className="">Experience Design</h2>
                                    <p className = "text-muted">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, necessitatibus?</p>
                              </div>

                        </div>
                  </div>
            </section>
      );
};

export default WorkDetails;