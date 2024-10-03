import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Pagination from './Pagination';
import { Link } from '@inertiajs/react';

const SearchResults = ({ filters, film }) => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false); // State untuk melacak status loading
  const itemsPerPage = 8;

  useEffect(() => {
    if (!Array.isArray(film)) {
      setData([]);
      console.log('Film is not an array');
      return;
    }
    // Filter data berdasarkan kata kunci pencarian dan filter lainnya
    const filteredData = film.filter((item) => {
      const yearRange = filters.year ? filters.year.split('-') : [];
      const startYear = yearRange[0] ? parseInt(yearRange[0], 10) : null;
      const endYear = yearRange[1] ? parseInt(yearRange[1], 10) : null;

      return (
        (!filters.year || (item.year_release >= startYear && item.year_release <= endYear)) &&
        (!filters.genre || item.genres.some(genre => genre.genre_name.includes(filters.genre))) &&
        (!filters.status || item.status === filters.status) &&
        (!filters.availability || item.availability.includes (filters.availability)) &&
        (!filters.award || (filters.award === 'HasAward' ? item.awards.length > 0 : item.awards.length === 0))
      );
    });

    setData(filteredData);
  }, [filters, film]);

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page) => {
    setIsLoading(true); // Set loading state to true
    setCurrentPage(page);
    setIsLoading(false); // Set loading state to false
  };

  return (
    <div className="mt-8 max-w-4xl mx-auto">
      {isLoading ? (
        <div>Loading...</div> // Tampilkan pesan loading saat isLoading true
      ) : (
        <>
          {currentItems.length > 0 ? (
            currentItems.map((item, index) => (
              <div key={index} className="flex items-start space-x-4 mb-6 bg-gray-800 rounded p-4">
                <div className="w-24 h-24 bg-gray-300 rounded-lg flex-shrink-0">
                  <img src={item.url_banner} alt={item.title} className="w-full h-full object-cover rounded-lg" />
                </div>
                <div className="flex-1">
                  <Link href={`/detailpage/${item.film_id}`}>
                  <h2 className="text-lg font-semibold text-white">{item.title}</h2>
                  </Link>
                  <p className="text-sm text-gray-400">{item.year_release}</p>
                  <p className='text-sm text-gray-400'>
                    Availability : {item.availability || "N/A"}
                  </p>
                  <p className="text-sm text-gray-400">Status : {item.status}</p>
                  <p className="text-sm text-gray-400">
                    {item.awards ? item.awards.map(award => award.award_name).join(', ') : '-'}
                  </p>
                  <p className='text-sm text-gray-400'>
                    {item.genres ? item.genres.map(genre => genre.genre_name).join(', ') : 'N/A'}
                  </p>
                  <p className="text-sm text-gray-400">
                    Actor : {item.actors ? item.actors.map(actor => actor.actor_name).join(', ') : '-'}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-400">No results found.</p>
          )}
          <Pagination
            currentPage={currentPage}
            lastPage={Math.ceil(data.length / itemsPerPage)}
            onPageChange={handlePageChange}
          />
        </>
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
  film: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    year_release: PropTypes.number.isRequired,
    url_banner: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    awards: PropTypes.arrayOf(PropTypes.shape({
      award_name: PropTypes.string.isRequired,
    })),
    genres: PropTypes.arrayOf(PropTypes.shape({
      genre_name: PropTypes.string.isRequired,
    })),
    availabilities: PropTypes.arrayOf(PropTypes.shape({
      availability_name: PropTypes.string.isRequired,
    })),
    actors: PropTypes.arrayOf(PropTypes.shape({
      actor_name: PropTypes.string.isRequired,
    })),
  })).isRequired,
};

export default SearchResults;