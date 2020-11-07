import React from 'react';
import './input-container.styles.css';

const InputContainer = ({title, setTitle, date, setDate, setSubmit}) => {

  const getTitle = (e) => {
    setTitle(e.target.value);
  };

  const getDate = (e) => {
    setDate(e.target.value);
  };

  const updateCountdown = (e) => {
    e.preventDefault();
    // Check for valid date
    if(date === null) {
      alert('Please select a date for the countdown.');
    }
    else {
      let savedCountdown = {
        title: title,
        date: date,
      };
      localStorage.setItem('countdown', JSON.stringify(savedCountdown));
      setSubmit(true);
    }
  }

  return(
    <div className="input-container">
      <h1>Create a Custom Countdown!</h1>
      <form className="form">
        <label>Title</label>
        <input type="text" placeholder="What are you counting down to?" onChange={getTitle}></input>
        <label>Select a Date</label>
        <input type="date"  onChange={getDate} required></input>
        <button type="submit" onClick={updateCountdown}>Submit</button>
      </form>
    </div>
  );
}

export default InputContainer;