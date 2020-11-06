import React from 'react';
import './countdown.styles.css';

const Countdown = () => {
  return(
    <div className="countdown">
      <h1></h1>
      <ul>
        <li><span></span>Days</li>
        <li><span></span>Hours</li>
        <li><span></span>Minutes</li>
        <li><span></span>Seconds</li>
      </ul>
      <button>Reset</button>
    </div>
  );
}

export default Countdown;