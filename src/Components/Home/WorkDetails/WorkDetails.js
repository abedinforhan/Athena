import React from 'react';
import img1 from '../../../images/img1.png';
import img2 from '../../../images/img2.png';
import img3 from '../../../images/img3.png';
import img4 from '../../../images/img4.png';
import './WorkDetails.css';

const WorkDetails = () => {
      return (
            <section className = "container">
                  <div>
                        <h1 className="section-name text-center">What we do</h1>
                        <p className="text-secondary text-center">Our main focus is to make the User Experience very <br/> simple and easy. Simplicity is our Strength.</p>
                  </div>
                  <div className="row info-cards">
                        <div className="d-flex justify-content-center align-items-center">
                              <div className="col-12 col-sm-6 col-md-6 col-lg-3 text-center">
                                    <img src={img1} alt="" className="img-fluid"/>
                                    <h2 className="">Experience Design</h2>
                                    <p className = "text-muted">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, necessitatibus?</p>
                              </div>

                              <div className="col-12 col-sm-6 col-md-6 col-lg-3 text-center">
                                    <img src={img2} alt="" className="img-fluid"/>
                                    <h2 className="">Experience Design</h2>
                                    <p className = "text-muted">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, necessitatibus?</p>
                              </div>

                              <div className="col-12 col-sm-6 col-md-6 col-lg-3 text-center">
                                    <img src={img3} alt="" className="img-fluid"/>
                                    <h2 className="">Experience Design</h2>
                                    <p className = "text-muted">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, necessitatibus?</p>
                              </div>

                              <div className="col-12 col-sm-6 col-md-6 col-lg-3 text-center">
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