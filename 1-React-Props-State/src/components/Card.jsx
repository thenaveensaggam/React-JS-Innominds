import React from 'react';
import "./Card.css";

export const Title = () => {
    return (
        <div className='title'>
            <h1>React Card</h1>
        </div>
    );
};

const Card = () => {
    
    return (
        <div className='green'>
            <Title/>
            <h2>Card</h2>
            <p>This is a card component.</p>
            <h3>Current Time : {new Date().toLocaleTimeString()}</h3>
        </div>
    );
};
export default Card;