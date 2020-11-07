import React, { useState, useEffect } from 'react';
import './App.css';
import InputContainer from './components/input-container/input-container.component';
import Countdown from './components/countdown/countdown.component';
import Complete from './components/complete/complete.component';

function App() {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState(null);
  const [submit, setSubmit] = useState(false);
  const [showInput, setShowInput] = useState(true);
  const [showCountdown, setShowCountdown] = useState(false);
  const [showComplete, setShowComplete] = useState(false);

  const reset = () => {
    setTitle('');
    setDate(null);
    setShowInput(true);
    setShowCountdown(false);
    setShowComplete(false);
    localStorage.removeItem('countdown');
  };

  const toCountDown = () => {
    setShowInput(false);
    setShowCountdown(true);
    setShowComplete(false);
  };

  const toComplete = () => {
    setShowInput(false);
    setShowCountdown(false);
    setShowComplete(true);
  }

  const obj = {title, setTitle, date, setDate, setSubmit, reset, toComplete};

  useEffect(() => {
    if(localStorage.getItem('countdown')) {
      let savedCountdown = JSON.parse(localStorage.getItem('countdown'));
      setTitle(savedCountdown.title);
      setDate(savedCountdown.date);
      setSubmit(true);
    }
  }, [])

  useEffect(() => {
    const updateDOM = () => {
      if(submit === true) {
        const distance = new Date(date + 'T00:00:00').getTime() - new Date().getTime();
        if(distance < 0) {
          toComplete();
        }
        else {
          toCountDown();
        }
        setSubmit(false);
      }
    }
    updateDOM();
  }, [submit, date]);

  return (
    <div className="background">
      <div className="container">
      { showInput ? <InputContainer {...obj}/> : null }
      { showCountdown ? <Countdown {...obj}/> : null }
      { showComplete ? <Complete {...obj}/> : null }
      </div>
    </div>
  );
}

export default App;
