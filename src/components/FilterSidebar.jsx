import React, { useState, useEffect } from 'react';
import '../assets/css/FilterSidebar.css';

const filterSections = [
  { name: 'Customizable', options: ['Yes', 'No'] },
  { name: 'Ideal For', options: ['Men', 'Women', 'Kids'] },
  { name: 'Occasion', options: ['Casual', 'Party'] },
  { name: 'Work', options: ['Embroidery', 'Printed'] },
  { name: 'Fabric', options: ['Cotton', 'Silk'] },
  { name: 'Segment', options: ['Ethnic', 'Western'] },
  { name: 'Suitable For', options: ['Summer', 'Winter'] },
  { name: 'Raw Materials', options: ['Organic', 'Synthetic'] },
  { name: 'Pattern', options: ['Striped', 'Plain'] }
];

const sortOptions = [
  'RECOMMENDED',
  'NEWEST FIRST',
  'POPULAR',
  'PRICE : HIGH TO LOW',
  'PRICE : LOW TO HIGH'
];

const FilterSidebar = ({ setSelectedFilters, setSelectedSort, selectedFilters = {}, products = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSections, setOpenSections] = useState({});
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [selectedSortOption, setSelectedSortOption] = useState('RECOMMENDED');
  const [showNoProductsPopup, setShowNoProductsPopup] = useState(false);

  const toggleFilter = () => {
    setIsOpen(!isOpen);
  };

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleSortClick = () => {
    setShowSortDropdown(!showSortDropdown);
  };

  const handleSortSelect = (option) => {
    setSelectedSort(option);
    setSelectedSortOption(option);
    setShowSortDropdown(false);
  };

  const handleFilterSelect = (filter, value) => {
    setSelectedFilters(prev => {
      const updatedFilters = { ...prev };
      if (!updatedFilters[filter]) updatedFilters[filter] = [];

      if (updatedFilters[filter].includes(value)) {
        updatedFilters[filter] = updatedFilters[filter].filter(item => item !== value);
      } else {
        updatedFilters[filter].push(value);
      }

      return updatedFilters;
    });
  };

  const filteredProducts = products.filter(product => {
    return Object.keys(selectedFilters).every(filter => {
      const filterValues = selectedFilters[filter];
      if (!filterValues || filterValues.length === 0) return true;
      return filterValues.some(value => product[filter]?.includes(value));
    });
  });

  const sortedProducts = filteredProducts.sort((a, b) => {
    if (selectedSortOption === 'PRICE : HIGH TO LOW') return b.price - a.price;
    if (selectedSortOption === 'PRICE : LOW TO HIGH') return a.price - b.price;
    return 0;
  });

  useEffect(() => {
    setShowNoProductsPopup(filteredProducts.length === 0);
  }, [filteredProducts]);

  return (
    <div className="filter-wrapper">
      <div className="filter-header">
        {/* <div className="item-count">{filteredProducts.length} ITEMS</div> */}
        {/* Group SHOW FILTER and RECOMMENDED together */}
        <div className="filter-controls">
          <button className="toggle-btn" onClick={toggleFilter}>
            {isOpen ? '← HIDE FILTER' : '☰ SHOW FILTER'}
          </button>
          <div className="sort-dropdown">
            <div className="recommended" onClick={handleSortClick}>
              {selectedSortOption} ▼
            </div>
            {showSortDropdown && (
              <div className="dropdown-menu">
                {sortOptions.map((option, index) => (
                  <div
                    key={index}
                    className={`dropdown-item ${selectedSortOption === option ? 'active' : ''}`}
                    onClick={() => handleSortSelect(option)}
                  >
                    {selectedSortOption === option ? '✔️' : ''} {option}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sidebar open">
          <h3>Filters</h3>
          <div className="filter-section">
            {filterSections.map((section, index) => (
              <div key={index} className="filter-item">
                <div className="filter-title" onClick={() => toggleSection(section.name)}>
                  <span>{section.name.toUpperCase()}</span>
                  <span className="arrow">{openSections[section.name] ? '▲' : '▼'}</span>
                </div>
                {openSections[section.name] && (
                  <div className="filter-content">
                    {section.options.map((option, index) => (
                      <label key={index}>
                        <input
                          type="checkbox"
                          checked={selectedFilters[section.name]?.includes(option)}
                          onChange={() => handleFilterSelect(section.name, option)}
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {showNoProductsPopup && (
        <div className="popup">
          {/* <span>No products found for the selected filters.</span> */}
        </div>
      )}

      <div className="product-list">
        {sortedProducts.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <h4>{product.title}</h4>
            <p>{product.category}</p>
            <span>${product.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterSidebar;
