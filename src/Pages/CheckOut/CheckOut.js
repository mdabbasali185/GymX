import React from 'react';
import './CheckOut.css' 

const CheckOut = () => {
    return (
        <div className='checkoutPage'>
            <div className='container'>
                <h3>BEGINNER PLAN</h3>
                <h5>$50</h5>
                <button className='allButton'>SELECT PLAN</button>
                <p><strong>Unlimited</strong>access to gym</p>
                <p><strong>3 classes</strong>per week</p>
                <p><strong>One Year</strong>memberships</p>
                <p><strong>Free</strong>drinking package</p>
                <p><strong>1 free</strong>personal training</p>

            </div>
        </div>
    );
};

export default CheckOut;