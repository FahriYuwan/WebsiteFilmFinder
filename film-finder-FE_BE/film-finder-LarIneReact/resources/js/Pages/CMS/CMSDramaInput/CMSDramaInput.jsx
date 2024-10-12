import React, { useState } from 'react';
import Sidebar from '../../../components/Sidebar';

function CMSDramaInput() {
  const [bannerPreview, setBannerPreview] = useState('');
  const [actors, setActors] = useState([
    { id: 1, name: 'Actor Name', image: '../images/dwayne-johnson-the-contoh-actor.jpg' },
    { id: 2, name: 'Actor Name', image: '../images/dwayne-johnson-the-contoh-actor.jpg' },
    { id: 3, name: 'Actor Name', image: '../images/dwayne-johnson-the-contoh-actor.jpg' },
    { id: 4, name: 'Actor Name', image: '../images/dwayne-johnson-the-contoh-actor.jpg' },
  ]);

  const previewImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBannerPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeActor = (id) => {
    setActors(actors.filter(actor => actor.id !== id));
  };

  return (
    <>
    <div className="flex">
      <Sidebar active_input_new_film={true} />
      <div className="flex-1 flex flex-col items-center p-10 bg-gray-800 text-white">
        <div className="w-full max-w-6xl bg-dark-card-bg rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-center mb-8">Input New Film</h1>
          <form className="space-y-6">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="space-y-2 w-full md:w-1/3">
                <label htmlFor="banner" className="block text-sm font-medium">Banner Image</label>
                <input type="file" id="banner" className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 focus:ring focus:ring-blue-500 text-white" accept="image/*" onChange={previewImage} />
                {bannerPreview && <img id="banner-preview" className="mt-4 w-full rounded-md" src={bannerPreview} alt="Banner Preview" />}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full md:w-2/3">
                <div className="space-y-2">
                  <label htmlFor="title" className="block text-sm font-medium">Title</label>
                  <input type="text" id="title" className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 focus:ring focus:ring-blue-500 text-white" placeholder="Enter drama title" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="alternative-title" className="block text-sm font-medium">Alternative Title</label>
                  <input type="text" id="alternative-title" className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 focus:ring focus:ring-blue-500 text-white" placeholder="Enter alternative title" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="year" className="block text-sm font-medium">Year</label>
                  <input type="number" id="year" className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 focus:ring focus:ring-blue-500 text-white" placeholder="Enter year" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="country" className="block text-sm font-medium">Country</label>
                  <input type="text" id="country" className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 focus:ring focus:ring-blue-500 text-white" placeholder="Enter country" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="availability" className="block text-sm font-medium">Availability</label>
                  <input type="text" id="availability" className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 focus:ring focus:ring-blue-500 text-white" placeholder="Enter availability (e.g., Netflix, Hulu)" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="trailer" className="block text-sm font-medium">Trailer Link</label>
                  <input type="url" id="trailer" className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 focus:ring focus:ring-blue-500 text-white" placeholder="Enter trailer link" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="awards" className="block text-sm font-medium">Awards</label>
                  <select id="awards" className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 focus:ring focus:ring-blue-500 text-white">
                    <option value="">Select award</option>
                    {/* List of awards */}
                  </select>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="synopsis" className="block text-sm font-medium">Synopsis</label>
              <textarea id="synopsis" rows="4" className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 focus:ring focus:ring-blue-500 text-white" placeholder="Enter synopsis"></textarea>
            </div>
            <h3 className="mb-4 font-semibold text-white">Genres</h3>
            <ul className="flex flex-wrap w-full text-sm font-medium text-gray-700 bg-gray-700 border border-gray-700 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
              <li className="w-1/5 border-b border-gray-700 sm:border-b-0 sm:border-r dark:border-gray-600">
                <div className="flex items-center ps-3">
                  <input id="genre-action" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                  <label htmlFor="genre-action" className="w-full py-3 ms-2 text-sm font-medium text-white dark:text-gray-300">Action</label>
                </div>
              </li>
              <li className="w-1/5 border-b border-gray-700 sm:border-b-0 sm:border-r dark:border-gray-600">
                <div className="flex items-center ps-3">
                  <input id="genre-adventure" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                  <label htmlFor="genre-adventure" className="w-full py-3 ms-2 text-sm font-medium text-white dark:text-gray-300">Adventure</label>
                </div>
              </li>
              <li className="w-1/5 border-b border-gray-700 sm:border-b-0 sm:border-r dark:border-gray-600">
                <div className="flex items-center ps-3">
                  <input id="genre-romance" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                  <label htmlFor="genre-romance" className="w-full py-3 ms-2 text-sm font-medium text-white dark:text-gray-300">Romance</label>
                </div>
              </li>
              <li className="w-1/5 border-b border-gray-700 sm:border-b-0 sm:border-r dark:border-gray-600">
                <div className="flex items-center ps-3">
                  <input id="genre-drama" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                  <label htmlFor="genre-drama" className="w-full py-3 ms-2 text-sm font-medium text-white dark:text-gray-300">Drama</label>
                </div>
              </li>
              <li className="w-1/5 border-b border-gray-700 sm:border-b-0 sm:border-r dark:border-gray-600">
                <div className="flex items-center ps-3">
                  <input id="genre-slice-of-life" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                  <label htmlFor="genre-slice-of-life" className="w-full py-3 ms-2 text-sm font-medium text-white dark:text-gray-300">Slice of Life</label>
                </div>
              </li>
              {/* Add additional <li> items here if needed */}
            </ul>
            <div className="space-y-2">
              <label htmlFor="actors" className="block text-sm font-medium">Search Actors</label>
              <input type="text" id="actors" className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 focus:ring focus:ring-blue-500 text-white" placeholder="Search for actors" />
              <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                {actors.map(actor => (
                  <div key={actor.id} className="flex items-center justify-between p-3 rounded-lg bg-gray-700 border border-gray-600">
                    <div className="flex items-center">
                      <img src={actor.image} alt={actor.name} className="w-12 h-12 rounded-full" />
                      <span className="ml-4">{actor.name}</span>
                    </div>
                    <button type="button" className="text-red-500 hover:text-red-400" onClick={() => removeActor(actor.id)}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center">
              <button type="submit" className="px-6 py-3 bg-blue-500 rounded-md text-white font-semibold hover:bg-blue-600 transition">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}

export default CMSDramaInput;