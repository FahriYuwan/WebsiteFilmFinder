import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm';
import LoginHeader from './LoginHeader';
import backgroundImage from '../../assets/images/Background.png';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin') {
      alert('Login Success');
    } else {
      alert('Login Failed');
    }
  };

  return (
    <div
      className="bg-gray-100 w-full min-h-screen flex items-center justify-center relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      {/* Login Form */}
      <div className="relative z-10 max-w-md w-full p-8 space-y-6 bg-gray-800 rounded-lg shadow-md">
        <LoginHeader />
        <LoginForm
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
          handleSubmit={handleSubmit}
        />
        <div className="mt-6 text-center text-sm text-gray-300">
          Don't have an account? <Link to="/register" className="font-medium text-indigo-600 hover:text-indigo-500">Register</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;