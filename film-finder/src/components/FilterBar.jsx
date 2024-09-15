import React from 'react';

const FilterBar = () => {
  return (
    <div className="flex justify-center space-x-4 mt-4">
      <select className="px-4 py-2 border rounded-lg bg-gray-200 text-gray-700">
        <option>Year</option>
      </select>
      <select className="px-4 py-2 border rounded-lg bg-gray-200 text-gray-700">
        <option>Genre</option>
      </select>
      <select className="px-4 py-2 border rounded-lg bg-gray-200 text-gray-700">
        <option>Status</option>
      </select>
      <select className="px-4 py-2 border rounded-lg bg-gray-200 text-gray-700">
        <option>Availability</option>
      </select>
      <select className="px-4 py-2 border rounded-lg bg-gray-200 text-gray-700">
        <option>Award</option>
      </select>
      <button className="px-4 py-2 text-white bg-orange-500 rounded-lg">Submit</button>
      <select className="px-4 py-2 border rounded-lg bg-gray-200 text-gray-700">
        <option>Alphabetics</option>
      </select>
    </div>
  );
};

export default FilterBar;
