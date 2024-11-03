import React from 'react';
import { usePage } from '@inertiajs/react';
import NavBar from "../../components/NavBar";   
import MovieDetails from "../../components/MovieDetails";
import Comments from "../../components/Comments";

const DetailPage = () => {
  const { film, userBookmarks} = usePage().props;

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <NavBar />
      <MovieDetails film={film} isBookmarked={userBookmarks.includes(film.film_id)}/>
      <Comments film={film} />
    </div>   
  );
};

export default DetailPage;