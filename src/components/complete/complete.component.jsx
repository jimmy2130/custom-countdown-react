import React from 'react';
import './complete.styles.css';

const Complete = ({title, date, reset}) => {

  return(
    <div className="complete">
      <h1 className="complete-title">Countdown Complete!</h1>
      <h1>{`${title} finished on ${date}`}</h1>
      <button onClick={reset}>New Countdown</button>
    </div>
  );
}

export default Complete;