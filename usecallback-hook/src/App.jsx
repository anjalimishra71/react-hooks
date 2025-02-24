import React, { useState, useCallback, useRef } from "react";
import "./App.css";

const App = () => {
  const [time, setTime] = useState(0); 
  const timerRef = useRef(null); 

  // Start the timer
  const handleStart = useCallback(() => {
    if (!timerRef.current) {
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
  }, []);

  // Stop the timer
  const handleStop = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  // Reset the timer
  const handleReset = useCallback(() => {
    handleStop(); 
    setTime(0); 
  }, [handleStop]);

  return (
    <div className="stopwatch-container">
      <h1 className="stopwatch-display">{time} seconds</h1>
      <div className="stopwatch-buttons">
        <button onClick={handleStart} className="start-button">Start</button>
        <button onClick={handleStop} className="stop-button">Stop</button>
        <button onClick={handleReset} className="reset-button">Reset</button>
      </div>
    </div>
  );
};

export default App;