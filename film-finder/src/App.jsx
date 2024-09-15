// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/LoginPage'
import Home from './pages/Home/Home';
import Register from './pages/Registrasi/RegisterPage';
import CMSCountries from './pages/CMS/CMSCountries/CMSCountries';
import CMSAwards from './pages/CMS/CMSAwards/CMSAwards';
import DetailPage from './pages/Detail/DetailPage';
import CMSGenres from './pages/CMS/CMSGenres/CMSGenres';
import CMSActors from './pages/CMS/CMSActors/CMSActors';
import CMSComments from './pages/CMS/CMSComments/CMSComments';
import CMSUsers from './pages/CMS/CMSUsers/CMSUsers';
import CMSDrama from './pages/CMS/CMSDrama/CMSDrama';
import CMSDramaInput from './pages/CMS/CMSDramaInput/CMSDramaInput';
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
          {/* Route untuk halaman DetailPage */}
          <Route path="/DetailPage" element={<DetailPage />} />
          {/* Route untuk halaman CMS Countries */}
          <Route path="/CMSCountries" element={<CMSCountries />}/>
          {/* Route untuk halaman CMS Awards */}
          <Route path="/CMSAwards" element={<CMSAwards />}/>
          {/* Route untuk halaman CMS Genres */}
          <Route path="/CMSGenres" element={<CMSGenres />}/>
          {/* Route untuk halaman CMS Actors */}
          <Route path="/CMSActors" element={<CMSActors />}/>
          {/* Route untuk halaman CMS Comments */}
          <Route path="/CMSComments" element={<CMSComments />}/>
          {/* Route untuk halaman CMS Users */}
          <Route path="/CMSUsers" element={<CMSUsers />}/>
          {/* Route untuk halaman CMS Drama */}
          <Route path="/CMSDrama" element={<CMSDrama />}/>
          {/* Route untuk halaman CMS Drama Input */}
          <Route path="/CMSDramaInput" element={<CMSDramaInput />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
