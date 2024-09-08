// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/LoginPage'
import Home from './pages/Home/Home';
import Register from './pages/Registrasi/RegisterPage';
import CMSCountries from './pages/CMS/CMSCountries/CMSCountries';
import CMSAwards from './pages/CMS/CMSAwards/CMSAwards';

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
          {/* Route untuk halaman CMS Countries */}
          <Route path="/CMSCountries" element={<CMSCountries />}/>
          {/* Route untuk halaman CMS Awards */}
          <Route path="/CMSAwards" element={<CMSAwards />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
