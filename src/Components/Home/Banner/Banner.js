import React from 'react';
import bannerImg from '../../../Images/banner-img.png';
import './Banner.css';

const Banner = () => {
      return (
           <div className = "banner  ">
               <div className = "container my-5">
                  <div className="row">
                        <div className ="col-sm-6 col-md-4 offset-md-2 col-lg-6 offset-lg-0 banner__texts">
                              <h1 className = "section-title">Florence <br/> agency</h1>
                              <br/>
                              <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum eveniet accusantium adipisci unde ducimus quos quam velit voluptatibus, tempora corrupti iusto? Quas quam explicabo praesentium aspernatur mollitia enim vero nulla.</p>
                              <br/>
                              <button className= "banner__button">See Pricing</button>
                        </div>

                        <div className ="col-12 col-md-6 col-lg-6">
                              <img className='mr-3' src={bannerImg} alt="Responsive image" className="img-fluid"/>
                        </div>
                  </div>       
             </div>           
       </div>
      );
};

export default Banner;