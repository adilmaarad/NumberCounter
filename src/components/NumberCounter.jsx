import React, { useState } from 'react';
import './NumberCounter.css';

const NumberCounter = () => {
  const [number, setNumber] = useState(0);

  const incrementNumber = () => {
    setNumber(number + 1);
  };

  const decrementNumber = () => {
    setNumber(number - 1);
  };

  return (
    <div className={`number-container ${number > 0 ? 'blue' : number < 0 ? 'red' : ''}`}>
      <p className='number'>{number}</p>
      <div className="button-container">
        <button className="decrement" onClick={decrementNumber}>-</button>
        <button className="increment" onClick={incrementNumber}>+</button>
      </div>
    </div>
  );
};

export default NumberCounter;
