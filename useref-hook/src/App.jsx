import React, { useRef } from "react";
import "./App.css";

const App = () => {
  // Create refs for each input field
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  // Handle key press event
  const handleKeyPress = (e, nextFieldRef) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent form submission on Enter
      if (nextFieldRef.current) {
        // console.log(nextFieldRef.current);
        
        nextFieldRef.current.focus(); // Focus the next input field
      }
    }
  };

  return (
    <div className="form-container">
      <h2>Focus Management Form</h2>
      <form>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            ref={nameRef} // Attach the ref to the input
            onKeyDown={(e) => handleKeyPress(e, emailRef)} // Focus on Email when Enter is pressed
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            ref={emailRef} // Attach the ref to the input
            onKeyDown={(e) => handleKeyPress(e, passwordRef)} // Focus on Password when Enter is pressed
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            ref={passwordRef} // Attach the ref to the input
            onKeyDown={(e) => handleKeyPress(e, null)} // No next field, do nothing
          />
        </div>
      </form>
    </div>
  );
};

export default App;