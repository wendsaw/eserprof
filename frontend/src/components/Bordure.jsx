import React from 'react';
import './bordures.css';
import { Link } from 'react-router-dom';

Link

const Bordure = () => {
  return (
    <section className="railway-container">
      <div className="railway-wrapper">
        <h1 className="railway-title">Infrastructures Ferroviaires</h1>
        <p className="railway-text">
          ESER-PROF s’investit dans le développement des infrastructures ferroviaires en offrant
          des solutions techniques modernes, fiables et durables pour améliorer les réseaux de transport
          ferroviaire au Burkina Faso et dans la sous-région.
        </p>

        <h2 className="railway-subtitle">Nos services comprennent :</h2>
        <ul className="railway-list">
          <li>Construction de voies ferrées (rails, traverses, ballast)</li>
          <li>Aménagement de gares et haltes ferroviaires</li>
          <li>Entretien et rénovation de tronçons existants</li>
          <li>Pose de systèmes de signalisation ferroviaire</li>
          <li>Drainage, ouvrages d’art et terrassements associés</li>
        </ul>

        <h2 className="railway-subtitle">Nos engagements :</h2>
        <ul className="railway-list">
          <li>Respect des normes UIC et qualité des matériaux</li>
          <li>Respect des délais et coordination optimale</li>
          <li>Intégration durable avec les milieux traversés</li>
          <li>Sécurité des travailleurs et des usagers</li>
        </ul>

        <div className="glissieres-contact">
                <Link style={{textDecoration:'none'}} to="/demandedevis">📞 Pour un devis ou une étude personnalisée, <strong>contactez-nous</strong> dès aujourd’hui !</Link>
                </div>
      </div>
    </section>
  );
};

export default Bordure;
