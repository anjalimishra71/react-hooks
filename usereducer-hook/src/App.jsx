import React, { useReducer } from "react";
import "./App.css"

const initialState = {
  name: "",
  email: "",
  password: "",
  errors: {}, // To store validation errors
};

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        [action.field]: action.value,
        errors: { ...state.errors, [action.field]: "" }, // Clear error for the field being updated
      };

    case "SET_ERRORS":
      return {
        ...state,
        errors: action.errors,
      };

    case "RESET_FORM":
      return initialState;

    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const validateForm = () => {
    const errors = {};

    if (!state.name.trim()) {
      errors.name = "Name is required.";
    }
    if (!state.email.includes("@")) {
      errors.email = "Email must include '@'.";
    }
    if (state.password.length < 8) {
      errors.password = "Password must be at least 8 characters long.";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();

    if (Object.keys(errors).length > 0) {
      dispatch({ type: "SET_ERRORS", errors });
    } else {
      alert("Form submitted successfully!");
      dispatch({ type: "RESET_FORM" });
    }
  };

  const handleChange = (e) => {
    dispatch({
      type: "UPDATE_FIELD",
      field: e.target.name,
      value: e.target.value,
    });
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Simple Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Name:</label>
          <input
            className="form-input"
            type="text"
            name="name"
            value={state.name}
            onChange={handleChange}
          />
          {state.errors.name && (
            <p className="error-message">{state.errors.name}</p>
          )}
        </div>
        <div className="form-group">
          <label className="form-label">Email:</label>
          <input
            className="form-input"
            type="email"
            name="email"
            value={state.email}
            onChange={handleChange}
          />
          {state.errors.email && (
            <p className="error-message">{state.errors.email}</p>
          )}
        </div>
        <div className="form-group">
          <label className="form-label">Password:</label>
          <input
            className="form-input"
            type="password"
            name="password"
            value={state.password}
            onChange={handleChange}
          />
          {state.errors.password && (
            <p className="error-message">{state.errors.password}</p>
          )}
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;