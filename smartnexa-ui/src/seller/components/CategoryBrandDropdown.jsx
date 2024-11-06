import React, { useState } from 'react';
import "./CategoryBrandDropdown.css"

const CategoryBrandDropdown = () => {
  const [selectedCategory, setSelectedCategory] = useState();
  const [selectedBrand,setSelectedBrand]=useState();

  // categories and brand options
  const categories = ['Select Category','Smart Light', 'Thermostats', 'AI Assistant', 'Smart Lock'];
  const brands = ['Select Brand','Havells','Wipro','Panasonic','Amazon'];
  // Handle dropdown change
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleBrandChange = (event) =>{
    setSelectedBrand(event.target.value);
  }
  return (
    <>
    <div className="category-dropdown">
      <label htmlFor="product-category">Product Category</label>
      <select
        id="product-category"
        value={selectedCategory}
        onChange={handleChange}
        className="dropdown-select"
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
    <div className="brand-dropdown">
    <label htmlFor="product-brand">Product Brand</label>
    <select
      id="product-brand"
      value={selectedBrand}
      onChange={handleBrandChange}
      className="dropdown-select"
    >
      {brands.map((brand) => (
        <option key={brand} value={brand}>
          {brand}
        </option>
      ))}
    </select>
  </div>
  </>
  );
};

export default CategoryBrandDropdown;
