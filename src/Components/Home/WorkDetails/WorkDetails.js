import React from 'react';
import img1 from '../../../Images/img1.png';
import img2 from '../../../Images/img2.png';
import img3 from '../../../Images/img3.png';
import img4 from '../../../Images/img4.png';
import './WorkDetails.css';

const WorkDetails = () => {
      return (
            <section className = "container">
                  <div>
                        <h2 className="section-name text-center">What we do</h2>
                        <p className="text-secondary text-center">Our main focus is to make the User Experience very <br/> simple and easy. Simplicity is our Strength.</p>
                  </div>
                  <div className="row info-cards">
                        <div className="row d-flex justify-content-center align-items-center">
                              <div className="col-12 col-sm-6 col-md-3 col-lg-3 text-center info-card-item">
                                    <img src={img1} alt="" className="img-fluid"/>
                                    <br/>
                                    <h3 className="">Experience Design</h3>
                                    <p className = "text-muted">The point of using Lorem Ipsum is that it has a
                            more-or less normal.</p>
                              </div>

                              <div className="col-12 col-sm-6 col-md-3 col-lg-3 text-center info-card-item">
                                    <img src={img2} alt="" className="img-fluid"/>
                                    <br/>
                                    <h3 className="">Interface Design</h3>
                                    <p className = "text-muted">The point of using Lorem Ipsum is that it has a
                            more-or less normal.</p>
                              </div>

                              <div className="col-12 col-sm-6 col-md-3 col-lg-3 text-center info-card-item">
                                    <img src={img3} alt="" className="img-fluid"/>
                                    <br/>
                                    <h3 className="">Prototyping</h3>
                                    <p className = "text-muted">The point of using Lorem Ipsum is that it has a
                            more-or less normal.</p>
                              </div>

                              <div className="col-12 col-sm-6 col-md-3 col-lg-3 text-center info-card-item">
                                    <img src={img4} alt="" className="img-fluid"/>
                                    <br/>
                                    <h3 className="">Illustration</h3>
                                    <p className = "text-muted">The point of using Lorem Ipsum is that it has a
                            more-or less normal.</p>
                              </div>

                        </div>
                  </div>
            </section>
      );
};

export default WorkDetails;