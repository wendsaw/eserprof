import React from 'react';
import './Signalisation.css';
import { Link } from 'react-router-dom';

const Signalisation = () => {
  return (
    <section className="signalisation-container">
      <div className="signalisation-wrapper">
        <h1 className="signalisation-title">Fourniture et pose de panneaux de signalisation routière</h1>

        <p className="signalisation-text">
          Nous assurons l’installation complète de panneaux de signalisation verticale adaptés aux
          réglementations en vigueur, garantissant une circulation fluide, sécurisée et conforme.
        </p>

        <h2 className="signalisation-subtitle">Types de panneaux disponibles :</h2>
        <ul className="signalisation-list">
          <li>Panneaux de danger (triangles)</li>
          <li>Panneaux d’interdiction et d’obligation (cercles rouges ou bleus)</li>
          <li>Panneaux d’indication (rectangles bleus)</li>
          <li>Signalisation temporaire de chantier</li>
          <li>Panneaux personnalisés pour zones privées</li>
        </ul>

        <h2 className="signalisation-subtitle">Nos services comprennent :</h2>
        <ul className="signalisation-list">
          <li>Étude de l’environnement et du besoin</li>
          <li>Choix des supports adaptés (poteaux galvanisés, muraux…)</li>
          <li>Fixation et ancrage selon les normes</li>
          <li>Signalisation de nuit : matériaux rétroréfléchissants</li>
          <li>Entretien et remplacement de panneaux endommagés</li>
        </ul>

        <div className="glissieres-contact">
                        <Link style={{textDecoration:'none'}} to="/demandedevis">📞 Pour un devis ou une étude personnalisée, <strong>contactez-nous</strong> dès aujourd’hui !</Link>
                        </div>
      </div>
    </section>
  );
};

export default Signalisation;
