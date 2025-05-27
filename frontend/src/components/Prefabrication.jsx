import React from 'react';
import './prefabrication.css';

import { Link } from 'react-router-dom';

const Prefabrication = () => {
  return (
    <section className="prefab-container">
      <div className="prefab-content">
        <h1 className="prefab-title">Préfabrication d’Ouvrages en Béton Armé</h1>
        <p className="prefab-intro">
          Chez <strong>ESER-PROF</strong>, nous proposons la conception, la fabrication et la livraison
          de <strong>dalots</strong> et <strong>buses en béton armé</strong>, réalisés selon les normes
          techniques en vigueur, pour répondre aux besoins en assainissement, franchissement
          hydraulique et infrastructures routières.
        </p>

        <h2 className="prefab-subtitle">Nos produits disponibles</h2>
        <ul className="prefab-list">
          <li>Dalots rectangulaires préfabriqués</li>
          <li>Buses circulaires en béton vibré</li>
          <li>Éléments de regards et boîtes de visite</li>
          <li>Longrines et structures de drainage</li>
        </ul>

        <h2 className="prefab-subtitle">Avantages de nos ouvrages préfabriqués</h2>
        <ul className="prefab-list">
          <li><strong>Gain de temps :</strong> mise en œuvre rapide sur chantier</li>
          <li><strong>Durabilité :</strong> matériaux résistants certifiés</li>
          <li><strong>Sécurité :</strong> production contrôlée en usine</li>
          <li><strong>Économie :</strong> réduction des coûts de coffrage et de main-d'œuvre</li>
        </ul>

        <h2 className="prefab-subtitle">Applications courantes</h2>
        <p className="prefab-text">
          Nos dalots et buses sont utilisés dans :
        </p>
        <ul className="prefab-list">
          <li>Les routes nationales et rurales</li>
          <li>Les aménagements hydrauliques et bassins de rétention</li>
          <li>Les franchissements de fossés et petits ouvrages d’art</li>
        </ul>

        <p className="prefab-contact" >
          <Link  style={{textDecoration:"none"}}  to='/demandedevis'>📞 Besoin d’un devis ou d’un conseil technique ? <strong>Contactez-nous</strong> dès maintenant !</Link>
        </p>
      </div>
    </section>
  );
};

export default Prefabrication;
