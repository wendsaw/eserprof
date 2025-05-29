import React from 'react';
import './Tracage.css';
import { Link } from 'react-router-dom';

const Tracage = () => {
  return (
    <section className="tracage-container">
      <div className="tracage-wrapper">
        <h1 className="tracage-title">Traçage de parkings et marquages de stationnement</h1>

        <p className="tracage-text">
          Nous proposons des solutions précises et durables pour le traçage de parkings publics et privés.
          Grâce à notre expertise, nous assurons un aménagement clair et sécurisé des espaces de stationnement
          pour tous types de véhicules.
        </p>

        <h2 className="tracage-subtitle">Types de marquages proposés :</h2>
        <ul className="tracage-list">
          <li>Places de stationnement standard, PMR, visiteurs</li>
          <li>Zones de livraison ou arrêt minute</li>
          <li>Flèches de circulation et voies de sortie</li>
          <li>Hachures de sécurité, interdictions de stationner</li>
          <li>Numérotation des places ou lettres d’identification</li>
        </ul>

        <h2 className="tracage-subtitle">Où intervenons-nous ?</h2>
        <ul className="tracage-list">
          <li>Parkings de supermarchés et centres commerciaux</li>
          <li>Résidences, immeubles, hôtels, hôpitaux</li>
          <li>Zones industrielles, entreprises privées</li>
          <li>Administrations, universités, écoles</li>
        </ul>

        <div className="glissieres-contact">
                        <Link style={{textDecoration:'none'}} to="/demandedevis">📞 Pour un devis ou une étude personnalisée, <strong>contactez-nous</strong> dès aujourd’hui !</Link>
                        </div>
      </div>
    </section>
  );
};

export default Tracage;
