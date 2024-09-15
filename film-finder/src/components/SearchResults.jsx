import React from 'react';

const SearchResults = () => {
  return (
    <div className="mt-8 max-w-4xl mx-auto">
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} className="flex items-start space-x-4 mb-6 bg-gray-800 rounded">
          <div className="w-24 h-24 bg-gray-300 rounded-lg"></div>
          <div className="flex-1">
            <h2 className="text-lg font-semibold">
              Title of the drama {index + 1} that makes two lines
            </h2>
            <p className="text-sm text-gray-600">2024</p>
            <p className="text-sm text-gray-600">Genre 1, Genre 2, Genre 3</p>
            <p className="text-sm text-gray-600">Actor 1, Actor 2, Actor 3</p>
          </div>
          <div className="text-sm text-gray-600">19 views</div>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
