import React from 'react';
import './PriceCard.css';

const PriceCard = () => {
    return (
        <div className="col-12  col-sm-12 col-md-4  col-lg-4">
            <div className="priceCard ">
               <h1>$199</h1>
               <p className='text-secondary item-before-line'>For Basic</p>
               <br/>
             
                <p>Home page</p>
                <p>No Inner Page</p>
                <p>Asset File</p>
                <p>Source File</p>
                <p>Free stock photos</p>
                <p>10days free Support</p>
                <p>24/7 Support</p>
                <button class="priceCard__btn">Order now</button>
            </div>
        </div>
    );
};

export default PriceCard;