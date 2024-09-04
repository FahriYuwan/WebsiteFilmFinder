import React, { useState } from 'react';
import MovieCard from "../../components/MovieCard";
import NavBar from "../../components/NavBar";
import MoviesData from "../../data/movie_data.json";

function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredMovies = MoviesData.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <NavBar searchTerm={searchTerm} handleInputChange={handleInputChange} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-10">
        {filteredMovies.map((movie, index) => (
          <MovieCard
            key={index}
            imgSrc={movie.imgSrc}
            title={movie.title}
            description={movie.description}
          />
        ))
        }
      </div>
    </div>
  );
}

export default Home;
