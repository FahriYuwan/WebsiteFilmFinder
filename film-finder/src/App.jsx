import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './auth/Login/Login.jsx';

function App() {

  return (
    <>
      <Router>
      <Routes>
        {/* Route untuk halaman Login */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
