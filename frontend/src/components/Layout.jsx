import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaFacebookF, FaTiktok, FaWhatsapp } from 'react-icons/fa'; // 👈 Import the icons


import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles.css';

// pages
import Home from '../pages/Home';
import Services from '../pages/Services';
import References from '../pages/References';
import Contact from '../pages/Contact';
import Presentation from '../pages/Presentation';

// components
import MarquageSol from './MarquageSol';
import Tracage from './Tracage';
import Signalisation from './Signalisation';
import Glissiere from './Glissiere';
import PeageModerne from './PeageModerne';
import Aeroport from './Aeroport';
import Gourcy from './Gourcy'
import DemandeDevis from './demandeDevis';
import Prefa from './Prefa';
import Bordure from './Bordure';
import ProjetCiteAn2 from './ProjetCiteAn2';
import ProjetZiniare from './ProjetZiniare';
import Kosyam from './Kosyam';
import Ccva from './Ccva';
import ScrollToTop from './ScrollToTop';
import VoirieBobo from './VoirieBobo';
import Banfora from './Banfora';
import Rue30 from './Rue30'
import Pluvial from './Pluvial';
import Karpala from './Karpala';
import Tenko from './Tenko';

function Layout() {
  const location = useLocation();

  // Define paths where the images should be hidden
  const hideHeaderImages = [
    '/services',
    "/realisations",
    "/presentation",
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
          <div className="social-icons">
            <a href="https://facebook.com/eserprof" target="_blank" rel="noreferrer"><FaFacebookF /></a>
            <a href="https://www.tiktok.com/@eserprof" target="_blank" rel="noreferrer"><FaTiktok /></a>
            <a href="https://wa.me/+22679090909" target="_blank" rel="noreferrer"><FaWhatsapp /></a>

          </div>

          <nav>
            <ul>
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="/presentation">Presentation</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/references">Réferences Technique</Link></li>
              <li><Link to="/contact">Contact</Link></li>

            </ul>
          </nav>
        </div>

        {/* Bottom image strip — shown only when not on detail page */}
        {/* {!hideHeaderImages && (
          <div className="header-images">
            <Link to="/marquageSol"><img src="/images/marquage.png" alt="Marquage" /></Link>
            <Link to="/tracage"><img src="/images/tracage.png" alt="Traçage" /></Link>
            <Link to="/signalisation"><img src="/images/signalisation1.png" alt="Signalisation" /></Link> 
           <Link to="/glissiere"><img src="realisations/glissiere/image1.jpg" alt="Glissière" /></Link> 
          </div>
        )} */}
      </header>

      <div className="marquee-container">
        <p className="marquee-text">
          ESER-PROF Sarl — l'excellence au service du BTP —
          <a
            href="https://wa.me/+22679090909"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none", color: "inherit", marginLeft: "10px" }}
          >
            📞 Besoin d’un devis ou d’un conseil technique ? <strong>Contactez-nous</strong> dès maintenant : +22679090909 +22675418703
          </a>
        </p>
      </div>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/references" element={<References />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/presentation" element={<Presentation />} />


          <Route path="/marquageSol" element={<MarquageSol />} />
          <Route path="/tracage" element={<Tracage />} />
          <Route path="/signalisation" element={<Signalisation />} />
          <Route path="/glissiere" element={<Glissiere />} />
          <Route path="/peageModerne" element={<PeageModerne />} />
          <Route path="/aeroport" element={<Aeroport />} />
          <Route path="/gourcy" element={<Gourcy />} />
          <Route path="/demandedevis" element={<DemandeDevis />} />
          <Route path="/prefa" element={<Prefa />} />
          <Route path="/bordure" element={<Bordure />} />
          <Route path="/citean2" element={<ProjetCiteAn2 />} />
          <Route path="/ziniare" element={<ProjetZiniare />} />
          <Route path="/kosyam" element={<Kosyam />} />
          <Route path="/ccva" element={<Ccva />} />
          <Route path="/voiriebobo" element={<VoirieBobo />} />
          <Route path="/banfora" element={<Banfora />} />
          <Route path="/rue30" element={<Rue30 />} />
           <Route path="/pluvial" element={<Pluvial />} />
           <Route path="/karpala" element={<Karpala />} />
            <Route path="/tenko" element={<Tenko />} />



        </Routes>
      
      <footer>
        <p>&copy; 2025 ESER-PROF | Réalisé par <strong>BIWI</strong></p>
        <div className="social">
          <a style={{ color: 'white', textDecoration: 'none' }} href="https://facebook.com/eserprof" target="_blank" rel="noreferrer">Facebook </a>
          <a style={{ color: 'white', textDecoration: 'none' }} href="https://www.tiktok.com/@eserprof" target="_blank" rel="noreferrer">TikTok</a>
        </div>
      </footer>
    </>
  );
}


export default Layout