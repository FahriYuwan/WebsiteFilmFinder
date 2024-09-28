import wednesdayImg from "../assets/images/wednesday.jpg";
const MovieDetails = (film) => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-0 p-4 mt-5">
      {/* Gambar */}
      <div className="max-w-xs mx-auto rounded overflow-hidden shadow-lg bg-gray-100">
        <img
          className="w-full"
          src={film.url_banner}
          alt={film.title}
        />
      </div>

      {/* Deskripsi */}
      <div className="flex flex-col justify-center">
        <h1 className="text-2xl font-bold mb-2">{film.title}</h1>
        {/* <div className="text-sm text-white-500 mb-1">Wednesday Addam</div> */}
        <div className="text-sm text-white-500 mb-1">{film.year_release}</div>
        <p className="text-sm text-white-700 mb-3">
          {film.synopsis}
        </p>
        <div className="text-sm text-white-500 mb-1">{film.genre_name}</div> {/*<-- mengambil dari tabel lain*/}
        <div className="text-sm text-white-500 mb-1">Rating: {film.rating_film}</div>
        {/* <div className="text-sm text-white-500">Availability: {film.}</div> */}
      </div>
    </div>
    </>
  );
};

export default MovieDetails;
