import React, { useState, useEffect } from 'react';
import Button from './Button';
import PropTypes from 'prop-types';

function SearchBar({ searchTerm, handleInputChange, handleSearch }) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  useEffect(() => {
    if (isFocused && window.location.pathname !== '/searchresultpage') {
      window.location.href = '/searchresultpage';
    }
  }, [isFocused]);

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2">
        <input 
          type="text" 
          value={searchTerm}
          onChange={handleInputChange}
          onFocus={handleFocus}
          onKeyPress={handleKeyPress}
          placeholder="Search movies, logos..." 
          className="w-full sm:w-96 px-4 py-2 text-gray-700 bg-white rounded sm:rounded-l focus:outline-none"
        />
        <Button text="Search" onClick={handleSearch} className="w-full sm:w-auto px-5 py-2 font-semibold bg-custom-blue-light text-dark-text rounded sm:rounded-r"/>
      </div>
    </>
  );
}

SearchBar.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired
};

export default SearchBar;