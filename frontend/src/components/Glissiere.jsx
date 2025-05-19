import React from 'react';
import { Link } from 'react-router-dom';
import './glissiere.css';

function Glissiere() {
  return (
    <main className="page glissiere-page">
      <h2 className="section-title">Installation de glissières de sécurité et garde-corps</h2>

      <section className="section-content">
        <p>
          La pose de glissières de sécurité et de garde-corps est indispensable pour limiter les risques
          de sortie de route, sécuriser les bordures de chaussées et protéger les usagers. ESER-PROF installe
          des dispositifs robustes et conformes aux normes en vigueur pour améliorer la sécurité sur les routes
          et dans les zones sensibles.
        </p>

        <h3>Types d’équipements proposés :</h3>
        <ul>
          <li>Glissières de sécurité métalliques (double ou triple ondulation)</li>
          <li>Garde-corps pour passerelles, ponts et zones piétonnes</li>
          <li>Barrières de sécurité pour zones industrielles ou chantiers</li>
          <li>Protections latérales de routes en pente ou bordures de ravins</li>
        </ul>

        <h3>Caractéristiques techniques :</h3>
        <ul>
          <li>Structure en acier galvanisé ou inoxydable</li>
          <li>Résistance aux chocs et aux intempéries</li>
          <li>Fixation sur platines ou scellement béton selon l’environnement</li>
          <li>Conformité aux normes CE / UEMOA</li>
        </ul>

        <h3>Domaines d’application :</h3>
        <ul>
          <li>Routes nationales et autoroutes</li>
          <li>Chantiers de BTP et zones de travaux</li>
          <li>Zones industrielles, plateformes logistiques</li>
          <li>Équipements urbains : écoles, hôpitaux, bâtiments publics</li>
        </ul>

        <div className="cta-contact">
          <div style={{ textAlign: 'center' }}>
            <Link to="/demandedevis" className="btn-primary">Demander un devis</Link>
          </div>
          <br />
          <p>
            📞 Téléphone : <strong>+226 12 34 56 78</strong><br />
            💬 <a href="https://wa.me/22612345678" target="_blank" rel="noreferrer">Contacter sur WhatsApp</a><br />
            📧 Email : <strong>info@eserprof.bf</strong>
          </p>
        </div>
      </section>
    </main>
  );
}

export default Glissiere;
