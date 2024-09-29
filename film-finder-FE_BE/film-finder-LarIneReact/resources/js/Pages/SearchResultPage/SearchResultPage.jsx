import React, { useState } from 'react';
import NavBar from '../../components/NavBar'; 
import FilterSelect from '../../components/FilterSelect'; 
import SearchResults from '../../components/SearchResults'; 

const SearchResultPage = () => {
  const [year, setYear] = useState('');
  const [genre, setGenre] = useState('');
  const [status, setStatus] = useState('');
  const [availability, setAvailability] = useState('');
  const [award, setAward] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const options = {
    year: [
      { value: '', label: 'All' },
      { value: '2020-2024', label: '2020-2024' },
      { value: '2010-2019', label: '2010-2019' },
      { value: '2000-2009', label: '2000-2009' },
      { value: '1990-1999', label: '1990-1999' },
    ],
    genre: [
      { value: '', label: 'All' },
      { value: 'Drama', label: 'Drama' },
      { value: 'Comedy', label: 'Comedy' },
      { value: 'Action', label: 'Action' },
      { value: 'Thriller', label: 'Thriller' },
    ],
    status: [
      { value: '', label: 'All' },
      { value: 'Released', label: 'Released' },
      { value: 'Upcoming', label: 'Upcoming' },
    ],
    availability: [
      { value: '', label: 'All' },
      { value: 'Netflix', label: 'Netflix' },
      { value: 'Amazon Prime', label: 'Amazon Prime' },
      { value: 'Hulu', label: 'Hulu' },
      { value: 'Disney+', label: 'Disney+' },
    ],
    award: [
      { value: '', label: 'All' },
      { value: 'HasAward', label: 'Has Award' },
      { value: 'NoAward', label: 'No Award' },
    ],
  };

  const filters = { year, genre, status, availability, award };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen w-full">
      <NavBar onSearch={handleSearch} />
      <div className="w-full p-4">
        <div className="flex justify-center space-x-4 mt-4">
          <FilterSelect
            label="Year"
            value={year}
            options={options.year}
            onChange={(e) => setYear(e.target.value)}
          />
          <FilterSelect
            label="Genre"
            value={genre}
            options={options.genre}
            onChange={(e) => setGenre(e.target.value)}
          />
          <FilterSelect
            label="Status"
            value={status}
            options={options.status}
            onChange={(e) => setStatus(e.target.value)}
          />
          <FilterSelect
            label="Availability"
            value={availability}
            options={options.availability}
            onChange={(e) => setAvailability(e.target.value)}
          />
          <FilterSelect
            label="Award"
            value={award}
            options={options.award}
            onChange={(e) => setAward(e.target.value)}
          />
        </div>
        <SearchResults filters={filters} searchTerm={searchTerm} />
      </div>
    </div>
  );
};

export default SearchResultPage;