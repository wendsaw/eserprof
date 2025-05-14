// App.jsx - Point d'entrée React pour ESER-PROF
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Realisations from './pages/Realisations';
import Contact from './pages/Contact';
import Client from './pages/Client';
import MarquageSol from './components/MarquageSol';
import Tracage from './components/Tracage';
import Signalisation from './components/Signalisation';
import Glissiere from './components/Glissiere';

import './styles.css';

function App() {
  return (
    <Router>
      {/* En-tête du site */}
      <header>
  {/* Top section: logo + nav */}
  <div className="header-top">
    <div className="logo">
      <img src="/images/logo-eserprof.png" alt="Logo ESER-PROF" />
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
  </div>

  {/* Bottom section: full-width image strip */}
  <div className="header-images">
    <img src="/images/marquage.png" alt="Marquage" />
    <img src="/images/tracage.png" alt="Traçage" />
    <img src="/images/signalisation1.png" alt="Signalisation" />
    <img src="/images/glissiere.png" alt="Glissière" />
  </div>
</header>


      <div className="marquee-container">
  <p className="marquee-text">
    ESER-PROF Sarl — l'excellence au service du BTP — 
    <a
      href="https://wa.me/22612345678"
      target="_blank"
      rel="noreferrer"
      style={{ textDecoration: "none", color: "inherit", marginLeft: "10px" }}
    >
      Contacter sur WhatsApp: +226 12 34 56 78
    </a>
  </p>
</div>



    
      {/* Contenu principal avec routage */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/realisations" element={<Realisations />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/client" element={<Client />} />
        <Route path="/marquageSol" element={<MarquageSol/>} />
        <Route path="/tracage" element={<Tracage/>} />
        <Route path="/signalisation" element={<Signalisation />} />
        <Route path="/glissiere" element={<Glissiere />} />
      </Routes>

      {/* Pied de page */}
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
