import React from 'react';
import PriceCard from './PriceCard/PriceCard';
import './Serviceprice.css';

const ServicePrice = () => {
    return (
        <div className="servicePrice">
            <h2 className='text-center '>
                Choose Your Dedicated Team
                <div className='container my-5'>
                    <div className='row'>
                        <PriceCard />
                        <PriceCard />
                        <PriceCard />
                    </div>
                </div>
            </h2>
        </div>
    );
};

export default ServicePrice;