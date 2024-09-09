import React from "react";

const Comments = () => {
  return (
    <div className="p-6 m-8">
      {/* Daftar Aktor */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-0 mb-10">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-40 h-40 bg-gray-200 rounded overflow-hidden">
              <img
                src={require("../assets/img/Jenna_Ortega.jpg")}
                alt="Jenna Ortega"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-2 text-sm text-center">Jenna Ortega</p>
          </div>
        ))}
      </div>

      {/* Video Placeholder */}
      <div className="flex justify-center items-center m-6">
        <iframe
          className="w-full max-w-3xl h-60"
          src="https://www.youtube.com/embed/Di310WS8zLk?si=GrWwhqgWeNjHNgej"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      {/* Komentar */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4">(4) People think about this drama</h3>
        <div className="flex justify-end mb-2">
          <label htmlFor="filter" className="mr-2 text-sm">Filtered by:</label>
          <select id="filter" className="border rounded px-2 py-1 text-sm">
            <option value="5">⭐⭐⭐⭐⭐</option>
            <option value="4">★★★★☆</option>
            <option value="3">★★★☆☆</option>
            <option value="2">★★☆☆☆</option>
            <option value="1">★☆☆☆☆</option>
          </select>
        </div>

        {[...Array(4)].map((_, index) => (
          <div key={index} className="flex mb-4">
            <div className="w-10 h-10 bg-gray-200 rounded-full mr-4"></div>
            <div>
              <p>
                <span className="font-semibold">User {index + 1}</span>{" "}
                <span className="text-gray-500">(4/4/2014)</span> said: it is a
                wonderful drama! I Love it so much!!!!
              </p>
              <div className="text-red-500 mt-1">★★★★☆</div>
            </div>
          </div>
        ))}
      </div>

      {/* Form Komentar */}
      <div className="p-4 border rounded">
        <h4 className="text-lg font-semibold mb-4">Add yours!</h4>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <input type="text" id="name" className="w-full px-3 py-2 border rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="rate" className="block text-sm font-medium mb-2">
              Rate
            </label>
            <input type="text" id="rate" className="w-full px-3 py-2 border rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="thoughts" className="block text-sm font-medium mb-2">
              Your thoughts
            </label>
            <textarea
              id="thoughts"
              className="w-full px-3 py-2 border rounded"
            ></textarea>
          </div>
          <div className="mb-4 text-gray-500 text-sm">
            you can only submit your comment once.
          </div>
          <button type="submit" className="px-4 py-2 bg-red-500 text-white rounded">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Comments;
