import React from 'react';
import './input-container.styles.css';

const InputContainer = () => {
  return(
    <div className="input-container">
      <h1>Create a Custom Countdown!</h1>
      <form className="form">
        <label for="title">Title</label>
        <input type="text" placeholder="What are you counting down to?"></input>
        <label for="date-picker">Select a Date</label>
        <input type="date"></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default InputContainer;