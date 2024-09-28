import wednesdayImg from "../assets/images/wednesday.jpg";

const MovieDetails = ({ film }) => {
  if (!film) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-0 p-4 mt-5">
        {/* Gambar */}
        <div className="max-w-xs mx-auto rounded overflow-hidden shadow-lg bg-gray-100">
          <img
            className="w-full"
            src={film.url_banner || wednesdayImg}
            alt={film.title || "No title"}
          />
        </div>
        {/* Deskripsi */}
        <div className="flex flex-col justify-center">
          <h1 className="text-2xl font-bold mb-2">{film.title || "No title"}</h1>
          <div className="text-sm text-white-500 mb-1">{film.year_release || "N/A"}</div>
          <div className="text-sm text-white-500 mb-1">Status : {film.status || "N/A"}</div>
          <div className="text-sm text-white-500 mb-1">Duration : {film.duration || "N/A"} minutes</div>
          <p className="text-sm text-white-700 mb-3">
            {film.synopsis || "No synopsis available"}
          </p>
          <div className="text-sm text-white-500 mb-1">
            Genre : {film.genres ? film.genres.map(genre => genre.genre_name).join(', ') : 'N/A'}
          </div>
          <div className="text-sm text-white-500 mb-1">
            Availability : {film.availabilities ? film.availabilities.map(availability => availability.availability_name).join(', ') : 'N/A'}
          </div>
          <div className="text-sm text-white-500 mb-1">Rating: {film.rating_film || "N/A"}</div>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;