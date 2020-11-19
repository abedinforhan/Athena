import React from 'react';
import Footer from '../Footer/Footer';
import ServicePrice from '../ServicePrice/ServicePrice';
import './Home.css';


const Home = () => {
    return (
        <div className="home">
        <ServicePrice/>
         <Footer/>
        </div>
    );
};

export default Home;