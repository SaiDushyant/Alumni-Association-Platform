// src/App.js
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { AuthProvider } from './context/AuthContext';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Services from './pages/Services';
import InstitutionHome from './pages/institution/InstitutionHome';
import InstitutionLogin from './pages/institution/InstitutionLogin';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/:institution/login" element={<InstitutionLogin />} />
          <Route path="/:institution/home" element={<InstitutionHome />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
