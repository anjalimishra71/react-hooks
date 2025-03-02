import React from 'react';
import { useSearchParams } from 'react-router-dom';

const FilterSort = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    console.log(category);
    
    if (category) {
      setSearchParams({ category });
    } else {
      setSearchParams({});
    }
  };

  const handleSortChange = (event) => {
    const sort = event.target.value;
    console.log(sort);
    
    setSearchParams((prev) => ({ ...prev, sort }));
  };

  return (
    <div>
      <h2>Filters</h2>
      <label>
        Category:
        <select onChange={handleCategoryChange} value={searchParams.get('category') || ''}>
          <option value="">All</option>
          <option value="electronics">Electronics</option>
          <option value="clothing">Clothing</option>
        </select>
      </label>
      <label>
        Sort by:
        <select onChange={handleSortChange} value={searchParams.get('sort') || ''}>
          <option value="">Default</option>
          <option value="price_asc">Price: Low to High</option>
          <option value="price_desc">Price: High to Low</option>
        </select>
      </label>
    </div>
  );
};

export default FilterSort;