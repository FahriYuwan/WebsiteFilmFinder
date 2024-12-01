import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Pagination(props) {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex justify-center items-center py-8" style={{ marginTop: '-40px' }}>
      <nav className="inline-flex space-x-2">
        <button
          className={`px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Previous
        </button>
        <button
          className={`px-4 py-2 ${currentPage === 1 ? 'bg-dark-accent' : 'bg-gray-800'} text-white rounded ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-dark-accent'}`}
          disabled={currentPage === 1}
          onClick={() => handlePageChange(1)}
        >
          1
        </button>
        <button
          className={`px-4 py-2 ${currentPage === 2 ? 'bg-dark-accent' : 'bg-gray-800'} text-white rounded ${currentPage === 2 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-dark-accent'}`}
          disabled={currentPage === 2}
          onClick={() => handlePageChange(2)}
        >
          2
        </button>
        <button
          className={`px-4 py-2 ${currentPage === 3 ? 'bg-dark-accent' : 'bg-gray-800'} text-white rounded ${currentPage === 3 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-dark-accent'}`}
          disabled={currentPage === 3}
          onClick={() => handlePageChange(3)}
        >
          3
        </button>
        <button
          className={`px-4 py-2 bg-gray-800 text-white rounded hover:bg-dark-accent ${currentPage === 3 ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={currentPage === 3}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      </nav>
    </div>
  );
}

Pagination.propTypes = {
  hiddenPrev: PropTypes.string,
  hiddenNext: PropTypes.string,
};

export default Pagination;