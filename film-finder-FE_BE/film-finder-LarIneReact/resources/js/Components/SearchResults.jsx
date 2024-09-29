import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const initialData = [
  {
    title: 'Once Upon a Time in Hollywood',
    year: '2019',
    platforms: 'Netflix, Amazon Prime',
    status: 'Released',
    award: 'Oscar 2020 Best Supporting Actor',
    genre: 'Drama, Comedy',
    actors: 'Leonardo DiCaprio, Brad Pitt, Margot Robbie'
  },
  {
    title: 'The Morning Show',
    year: '2021',
    platforms: 'Apple TV+',
    status: 'Released',
    award: 'Golden Globe 2022 Best Drama',
    genre: 'Drama',
    actors: 'Jennifer Aniston, Steve Carell, Reese Witherspoon'
  },
  {
    title: 'Extraction',
    year: '2020',
    platforms: 'Netflix',
    status: 'Released',
    award: 'Emmy 2021 Best Stunt Coordination',
    genre: 'Action, Thriller',
    actors: 'Chris Hemsworth, Rudhraksh Jaiswal'
  },
  {
    title: 'The Boys',
    year: '2019',
    platforms: 'Amazon Prime',
    status: 'Released',
    award: 'Saturn Award 2020 Best Superhero Series',
    genre: 'Action, Comedy, Drama',
    actors: 'Karl Urban, Jack Quaid, Antony Starr'
  },
];

const SearchResults = ({ filters, searchTerm }) => {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    // Filter data berdasarkan kata kunci pencarian dan filter lainnya
    const filteredData = initialData.filter((item) => {
      const yearRange = filters.year ? filters.year.split('-') : [];
      const startYear = yearRange[0] ? parseInt(yearRange[0], 10) : null;
      const endYear = yearRange[1] ? parseInt(yearRange[1], 10) : null;

      return (
        (!searchTerm || item.title.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (!filters.year || (item.year >= startYear && item.year <= endYear)) &&
        (!filters.genre || item.genre.includes(filters.genre)) &&
        (!filters.status || item.status === filters.status) &&
        (!filters.availability || item.platforms.includes(filters.availability)) &&
        (!filters.award || (filters.award === 'HasAward' ? item.award : !item.award))
      );
    });

    setData(filteredData);
  }, [filters, searchTerm]);

  return (
    <div className="mt-8 max-w-4xl mx-auto">
      {data.length > 0 ? (
        data.map((item, index) => (
          <div key={index} className="flex items-start space-x-4 mb-6 bg-gray-800 rounded p-4">
            <div className="w-24 h-24 bg-gray-300 rounded-lg flex-shrink-0">
              <img src="https://via.placeholder.com/96" alt={item.title} className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-white">{item.title}</h2>
              <p className="text-sm text-gray-400">{item.year}</p>
              <p className="text-sm text-gray-400">{item.platforms}</p>
              <p className="text-sm text-gray-400">{item.status}</p>
              <p className="text-sm text-gray-400">{item.award}</p>
              <p className="text-sm text-gray-400">{item.genre}</p>
              <p className="text-sm text-gray-400">{item.actors}</p>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-400">No results found.</p>
      )}
    </div>
  );
};

SearchResults.propTypes = {
  filters: PropTypes.shape({
    year: PropTypes.string,
    genre: PropTypes.string,
    status: PropTypes.string,
    availability: PropTypes.string,
    award: PropTypes.string,
  }).isRequired,
  searchTerm: PropTypes.string.isRequired,
};

export default SearchResults;