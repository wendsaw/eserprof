import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import '../styles.css';
import Home from '../pages/Home';
import Services from '../pages/Services';
import Realisations from '../pages/Realisations';
import Contact from '../pages/Contact';
import Presentation from '../pages/Presentation';
import MarquageSol from './MarquageSol';
import Tracage from './Tracage';
import Signalisation from './Signalisation';
import Glissiere from './Glissiere';
import PeageModerne from './PeageModerne';
import Aeroport from './Aeroport';
import Gourcy from './Gourcy'


function Layout() {
  const location = useLocation();

  // Define paths where the images should be hidden
  const hideHeaderImages = [
    '/services',
    '/marquageSol',
    '/tracage',
    '/signalisation',
    '/glissiere'
  ].includes(location.pathname);

  return (
    <>
      <header>
        {/* Top: logo + nav */}
        <div className="header-top">
          <div className="logo">
            <img src="/images/logo-eserprof.png" alt="Logo ESER-PROF" />
          </div>

          <nav>
            <ul>
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/realisations">Réalisations</Link></li>
               <li><Link to="/presentation">Presentation</Link></li>
              <li><Link to="/contact">Contact</Link></li>
             
            </ul>
          </nav>
        </div>

        {/* Bottom image strip — shown only when not on detail page */}
        {!hideHeaderImages && (
          <div className="header-images">
            <Link to="/marquageSol"><img src="/images/marquage.png" alt="Marquage" /></Link>
            <Link to="/tracage"><img src="/images/tracage.png" alt="Traçage" /></Link>
            <Link to="/signalisation"><img src="/images/signalisation1.png" alt="Signalisation" /></Link> 
           <Link to="/glissiere"><img src="/images/glissiere.png" alt="Glissière" /></Link> 
          </div>
        )}
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

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/realisations" element={<Realisations />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/presentation" element={<Presentation />} />
        <Route path="/marquageSol" element={<MarquageSol />} />
        <Route path="/tracage" element={<Tracage />} />
        <Route path="/signalisation" element={<Signalisation />} />
        <Route path="/glissiere" element={<Glissiere />} />
        <Route path="/peageModerne" element={<PeageModerne />} />
        <Route path="/aeroport" element={<Aeroport />} />
        <Route path="/gourcy" element={<Gourcy />} />
        
      </Routes>

      <footer>
        <p>&copy; 2025 ESER-PROF | Réalisé par <strong>BIWI</strong></p>
        <div className="social">
          <a href="https://facebook.com/eserprof" target="_blank" rel="noreferrer">Facebook</a>
          <a href="https://tiktok.com/@eserprof" target="_blank" rel="noreferrer">TikTok</a>
        </div>
      </footer>
    </>
  );
}


export default Layout