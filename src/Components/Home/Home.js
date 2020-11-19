import React from 'react';
import Banner from './Banner/Banner';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import './Home.css';
import RunningProject from './RunningProject/RunningProject';
import ServicePrice from './ServicePrice/ServicePrice';
import WorkDetails from './WorkDetails/WorkDetails';
const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <WorkDetails></WorkDetails>
            <RunningProject></RunningProject>
            <ServicePrice/>
            <Footer/>

           
        </div>
    );
};

export default Home;