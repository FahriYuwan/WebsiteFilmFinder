// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/LoginPage'
import Home from './pages/Home/Home';
import Register from './pages/Registrasi/RegisterPage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Route untuk halaman Login */}
          <Route path="/login" element={<Login />} />
          {/* Route untuk halaman CMSCountries */}
          <Route path="/home" element={<Home />} />
          {/* Route untuk halaman Register */}
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
