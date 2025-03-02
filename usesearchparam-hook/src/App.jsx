import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import FilterSort from './components/FilterSort';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Welcome to the E-Commerce Site</h1>
        <FilterSort />
        <Routes>
          <Route path="/" element={<ProductList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;