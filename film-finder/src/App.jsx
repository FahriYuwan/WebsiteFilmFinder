import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './auth/Login/login.jsx';
import Register from './auth/Registrasi/Register.jsx';
import CMSCountries from './pages/CMS/CMSCountries/CMSCountries.jsx';

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
        <Route path="/cms/countries" element={<CMSCountries />} />

      </Routes>
    </Router>
    </>
  )
}

export default App
