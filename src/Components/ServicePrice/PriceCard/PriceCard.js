import React from 'react';
import './PriceCard.css';

const PriceCard = () => {
    return (
        <div className="col-md-4">
            <div className="priceCard  mx-auto">
               <h1>$199</h1>
               <span>For Basic</span>
             
                <span>Home page</span>
                <span>No Inner Page</span>
                <span>Asset File</span>
                <span>Souce File</span>
                <span>Free stock photos</span>
                <span>10days free Support</span>
                <span>24/7 Support</span>
            </div>
        </div>
    );
};

export default PriceCard;