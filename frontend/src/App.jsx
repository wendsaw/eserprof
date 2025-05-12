// App.jsx - Point d'entrée React pour ESER-PROF
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Realisations from './pages/Realisations';
import Contact from './pages/Contact';
import Client from './pages/Client';
import './styles.css';

function App() {
  return (
    <Router>
      <header>
        <div className="logo">
          <img src="/images/logo-eserprof.png" alt="Logo ESER-PROF" />
          <h1>ESER-PROF</h1>
          <p>Peinture Routière</p>
        </div>
        <nav>
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/realisations">Réalisations</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/client">Espace Client</Link></li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/realisations" element={<Realisations />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/client" element={<Client />} />
      </Routes>

      <footer>
        <p>&copy; 2025 ESER-PROF | Réalisé par <strong>BIWI</strong></p>
        <div className="social">
          <a href="https://facebook.com/eserprof" target="_blank" rel="noreferrer">Facebook</a>
          <a href="https://tiktok.com/@eserprof" target="_blank" rel="noreferrer">TikTok</a>
        </div>
      </footer>
    </Router>
  );
}

export default App;
