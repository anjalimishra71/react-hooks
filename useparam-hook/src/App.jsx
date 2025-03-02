import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RecipePage from "./RecipePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/recipe/:recipeId" element={<RecipePage />} />
      </Routes>
    </Router>
  );
}

export default App;