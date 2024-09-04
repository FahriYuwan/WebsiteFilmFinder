// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './auth/Login/login';
import Register from './auth/Registrasi/Register';
import Home from './pages/Home/Home';

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Route untuk halaman Login */}
          <Route path="/login" element={<Login />} />
          {/* Route untuk halaman Register */}
          <Route path="/register" element={<Register />} />
          {/* Route untuk halaman CMSCountries */}
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
