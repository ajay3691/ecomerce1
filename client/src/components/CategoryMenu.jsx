import React, { useState, useEffect } from 'react';

function CategoryMenu({ onSelect }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then(res => res.json())
      .then(json => setCategories(json));
  }, []);

  return (
    <div className="dropdown">
      <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Categories
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        {categories.map(category => (
          <button key={category} className="dropdown-item" onClick={() => onSelect(category)}>{category}</button>
        ))}
      </div>
    </div>
  );
}

export default CategoryMenu;
