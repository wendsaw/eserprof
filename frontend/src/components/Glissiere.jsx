import React from 'react';
import { Link } from 'react-router-dom';
import './glissiere.css';

function Glissiere() {
  return (
    <section className="glissieres-container">
      <div className="glissieres-content">
        <h1 className="glissieres-title">Installation de Glissières de Sécurité et Garde-Corps</h1>
        
        <p className="glissieres-text">
          Chez <strong>ESER-PROF</strong>, nous mettons notre expertise au service de la sécurité routière
          à travers la <strong>fourniture et l’installation de glissières de sécurité</strong> et de
          <strong>garde-corps</strong>, conçus pour prévenir les accidents et protéger les usagers de la route.
        </p>

        <h2 className="glissieres-subtitle">Nos solutions de sécurité</h2>
        <ul className="glissieres-list">
          <li>Glissières métalliques de type W-beam, N2, H1, etc.</li>
          <li>Glissières béton pour zones à fort impact</li>
          <li>Garde-corps pour ponts, passerelles et talus</li>
          <li>Dispositifs de transition et raccordement en extrémité</li>
        </ul>

        <h2 className="glissieres-subtitle">Nos engagements</h2>
        <ul className="glissieres-list">
          <li><strong>Normes respectées :</strong> EN 1317 et DTU voirie</li>
          <li><strong>Matériaux certifiés :</strong> résistance aux chocs, durabilité</li>
          <li><strong>Pose experte :</strong> équipes formées et outillées</li>
          <li><strong>Suivi qualité :</strong> contrôle et réception des ouvrages</li>
        </ul>

        <h2 className="glissieres-subtitle">Chantiers d'application</h2>
        <ul className="glissieres-list">
          <li>Routes nationales, départementales, autoroutes</li>
          <li>Voies urbaines à fort trafic</li>
          <li>Échangeurs, rampes, trémies et ponts</li>
          <li>Zones scolaires et zones sensibles</li>
        </ul>

        <div className="glissieres-contact">
        <Link style={{textDecoration:'none'}} to="/demandedevis">📞 Pour un devis ou une étude personnalisée, <strong>contactez-nous</strong> dès aujourd’hui !</Link>
        </div>
      </div>
    </section>
  );
}

export default Glissiere;
