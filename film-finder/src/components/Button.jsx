import React from 'react';

const Button = ({ type, text }) => {
  return (
    <button
      type={type}
      className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    >
      {text}
    </button>
  );
};

export default Button;
