import React from 'react';
import './bordures.css';
import { Link } from 'react-router-dom';

Link

const Bordure = () => {
  return (
    <section className="bordures-container">
      <div className="bordures-content">
        <h1 className="bordures-title">Fourniture et Pose de Bordures Hautes</h1>
        <p className="bordures-intro">
          Chez <strong>ESER-PROF</strong>, nous assurons la <strong>fourniture</strong> et la <strong>pose professionnelle</strong> de tout type de bordures hautes pour
          la délimitation des chaussées, trottoirs, accotements et espaces publics.
        </p>

        <h2 className="bordures-subtitle">Types de bordures proposées</h2>
        <ul className="bordures-list">
          <li>Bordures T2, T3 et T4 en béton</li>
          <li>Bordures granitées pour les zones urbaines</li>
          <li>Bordures de caniveaux (avec ou sans grille)</li>
          <li>Bordures décoratives pour parcs et jardins</li>
        </ul>

        <h2 className="bordures-subtitle">Nos garanties</h2>
        <ul className="bordures-list">
          <li><strong>Matériaux de qualité :</strong> conformité aux normes DTU et ISO</li>
          <li><strong>Pose précise :</strong> respect des alignements et niveaux</li>
          <li><strong>Durabilité :</strong> excellente tenue dans le temps et aux intempéries</li>
          <li><strong>Service complet :</strong> du terrassement à la finition</li>
        </ul>

        <h2 className="bordures-subtitle">Applications courantes</h2>
        <ul className="bordures-list">
          <li>Voiries urbaines et rurales</li>
          <li>Aménagements paysagers</li>
          <li>Zones industrielles ou résidentielles</li>
          <li>Aires de stationnement</li>
        </ul>

        <p className="bordures-contact">
          <Link style={{textDecoration:'none'}} to={'/demandedevis'}>📞 Besoin d’un devis personnalisé ? <strong>Contactez-nous</strong> pour un accompagnement rapide et efficace !</Link>
        </p>
      </div>
    </section>
  );
};

export default Bordure;
