import React, { useState } from 'react';
import MovieCard from "../../components/MovieCard";
import NavBar from "../../components/NavBar";
import MoviesData from "../../data/movie_data.json";
import Pagination from "../../components/Pagination";

function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
    setCurrentPage(1); // Reset to first page on search
  };

  const filteredMovies = MoviesData.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm)
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentMovies = filteredMovies.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <NavBar searchTerm={searchTerm} handleInputChange={handleInputChange} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-10">
        {currentMovies.map((movie, index) => (
          <MovieCard
            key={index}
            imgSrc={movie.imgSrc}
            title={movie.title}
            description={movie.description}
          />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalItems={filteredMovies.length}
        handlePageChange={handlePageChange}
      />
    </div>
  );
}

export default Home;