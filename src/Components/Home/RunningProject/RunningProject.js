import React from 'react';
import projectImg from '../../../Images/project-img.png';
import './RunningProject.css';

const RunningProject = () => {
      return (
            <section className = "container mt-5">
            <div className="row">

            <div className ="col-sm-6 col-md-7 offset-md-2 col-lg-6 offset-lg-0">
                        <img src={projectImg} alt="Responsive image" className="img-fluid"/>
                  </div>

                  <div className ="col-sm-6 col-md-4 offset-md-2 col-lg-6 offset-lg-0 mt-5 pt-5">
                        <h2> Stay Running & Project</h2>
                        <br/>
                        <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum eveniet accusantium adipisci unde ducimus quos quam velit voluptatibus, tempora corrupti iusto? Quas quam explicabo praesentium aspernatur mollitia enim vero nulla.</p>
                        <br/>
                        <button className= "project__button">Contact us</button>
                  </div>

                  
            </div>                  
     </section>
      );
};

export default RunningProject;