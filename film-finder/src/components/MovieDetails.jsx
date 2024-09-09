import React from "react";

const MovieDetails = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-0 p-4 mt-5">
      {/* Gambar */}
      <div className="max-w-xs mx-auto rounded overflow-hidden shadow-lg bg-gray-100">
        <img
          className="w-full"
          src={require("../assets/img/wednesday.jpg")}
          alt="Random Image"
        />
      </div>

      {/* Deskripsi */}
      <div className="flex flex-col justify-center">
        <h1 className="text-2xl font-bold mb-2">Wednesday</h1>
        <div className="text-sm text-white-500 mb-1">Wednesday Addam</div>
        <div className="text-sm text-white-500 mb-1">November 23, 2022</div>
        <p className="text-sm text-white-700 mb-3">
          While attending Nevermore Academy, Wednesday Addams attempts to master
          her emerging psychic ability, thwart a killing spree and solve the
          mystery that embroiled her parents 25 years ago.
        </p>
        <div className="text-sm text-white-500 mb-1">Horor</div>
        <div className="text-sm text-white-500 mb-1">Rating: 8.1/10 IMDb</div>
        <div className="text-sm text-white-500">Availability: Netflix</div>
      </div>
    </div>
    </>
  );
};

export default MovieDetails;
