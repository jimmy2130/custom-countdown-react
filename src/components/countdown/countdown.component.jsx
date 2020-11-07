import React, { useState, useEffect } from 'react';
import './countdown.styles.css';

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

const Countdown = ({date, title, reset, toComplete}) => {

  const distance = new Date(date + 'T00:00:00').getTime() - new Date().getTime();

  const [days, setDays] = useState(Math.floor(distance / day));
  const [hours, setHours] = useState(Math.floor((distance % day) / hour));
  const [minutes, setMinutes] = useState(Math.floor((distance % hour) / minute));
  const [seconds, setSeconds] = useState(Math.floor((distance % minute) / second));


  useEffect(() => {
    let countdownActive = setInterval(() => {
      const distance = new Date(date + 'T00:00:00').getTime() - new Date().getTime();

      setDays(Math.floor(distance / day));
      setHours(Math.floor((distance % day) / hour));
      setMinutes(Math.floor((distance % hour) / minute));
      setSeconds(Math.floor((distance % minute) / second));

      // If the countdown has ended, show complete
      if(distance < 0) {
        toComplete();
      }
    }, second);
    return () => clearInterval(countdownActive);
  }, [date, toComplete])

  return(
    <div className="countdown">
      <h1>{title}</h1>
      <ul>
        <li><span>{days}</span>Days</li>
        <li><span>{hours}</span>Hours</li>
        <li><span>{minutes}</span>Minutes</li>
        <li><span>{seconds}</span>Seconds</li>
      </ul>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Countdown;