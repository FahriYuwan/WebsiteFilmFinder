import React from 'react';
import './index.css'; // Path ke file CSS kamu

const App = () => {
  return (
    <div className="bg-gray-900 text-dark-text flex justify-center items-center min-h-screen">
      <div className="text-center max-w-lg mx-auto">
        <img className="mx-auto h-[150px] w-auto" src={require('./assets/images/full-logo.png')} alt="Logo" />
        <h1 className="text-4xl font-extrabold text-white">
          Temukan Film, Drama, Series, Anime dan banyak lagi di Film Finder🎬
        </h1>
        
        <p className="mt-2 text-sm text-gray-400">
          Please login to your account
        </p>
        <div className="flex justify-center mt-4">
          <a href="/Login"
            className="w-40 flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-dark-accent hover:bg-dark-border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Login
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
