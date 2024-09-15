import React from 'react';
import PropTypes from 'prop-types';

const Popup = ({ film = {}, onClose, onApprove, onUnapprove }) => (
  <div id="popup" className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-4xl overflow-y-auto max-h-screen">
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-3xl font-extrabold text-white">Film Details</h2>
        <button className="text-gray-400 hover:text-gray-200 focus:outline-none" onClick={onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="flex flex-col md:flex-row mb-6">
        <div className="w-full md:w-2/3 pr-0 md:pr-4 overflow-y-auto max-h-screen">
          <h3 className="text-xl font-semibold mb-2 text-white">Film Name</h3>
          <p className="text-lg text-gray-300 mb-4">{film.title || 'N/A'}</p>
          <h3 className="text-xl font-semibold mb-2 text-white">Release Year</h3>
          <p className="text-lg text-gray-300 mb-4">2023</p>
          <h3 className="text-xl font-semibold mb-2 text-white">Description</h3>
          <p className="text-lg text-gray-300 mb-4">{film.synopsis || 'N/A'}</p>
          <h3 className="text-xl font-semibold mb-2 text-white">Genre</h3>
          <p className="text-lg text-gray-300 mb-4">{film.genre || 'N/A'}</p>
          <h3 className="text-xl font-semibold mb-2 text-white">Rating</h3>
          <p className="text-lg text-gray-300 mb-4">PG-13</p>
          <h3 className="text-xl font-semibold mb-2 text-white">Availability</h3>
          <p className="text-lg text-gray-300 mb-4">Available</p>
        </div>
        <div className="w-full md:w-1/3">
          <div className="space-y-2 w-full">
            <label htmlFor="banner" className="block text-sm font-medium text-white">Banner Image</label>
            <input type="file" id="banner" className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 focus:ring focus:ring-blue-500 text-white" accept="image/*" />
            <img id="banner-preview" className="mt-4 w-full rounded-md object-cover" src="#" alt="Banner Preview" style={{ display: 'none' }} />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-white mt-4">Trailer</h3>
          <video src="trailer.mp4" controls className="w-full rounded-lg border-2 border-gray-700"></video>
          <h3 className="text-xl font-semibold mb-2 text-white mt-4">Actors</h3>
          <div className="flex space-x-4 mb-4">
            <img src="actor1.jpg" alt="Actor 1" className="w-24 h-24 rounded-full border-2 border-gray-700" />
            <img src="actor2.jpg" alt="Actor 2" className="w-24 h-24 rounded-full border-2 border-gray-700" />
          </div>
        </div>
      </div>
      <div className="flex justify-end space-x-4">
        <button className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2" onClick={onApprove}>Approved</button>
        <button className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2" onClick={onUnapprove}>Unapproved</button>
      </div>
    </div>
  </div>
);

Popup.propTypes = {
  film: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  onApprove: PropTypes.func.isRequired,
  onUnapprove: PropTypes.func.isRequired
};

export default Popup;