

import React from 'react';
import { Link } from 'react-router-dom';
import './tracage.css'; // Assurez-vous que ce fichier contient les styles globaux

function Tracage() {
  return (
    <main className="page tracage-page">
      <h2 className="section-title">Traçage de parkings et marquages de stationnement</h2>

      <section className="section-content">
        <p>
          Nous réalisons le traçage de parkings publics et privés avec précision et professionnalisme. 
          Le marquage au sol est essentiel pour organiser efficacement les zones de stationnement, 
          garantir la sécurité des usagers et respecter les normes d’accessibilité.
        </p>

        <h3>Types de marquages proposés :</h3>
        <ul>
          <li>Délimitation de places individuelles (classiques, PMR, visiteurs...)</li>
          <li>Flèches de circulation et sens uniques</li>
          <li>Zones de livraison et d’arrêt minute</li>
          <li>Hachures de sécurité et zébrures d’interdiction</li>
          <li>Marquages personnalisés : numérotation, lettrage, logos</li>
        </ul>

        <h3>Supports d’intervention :</h3>
        <ul>
          <li>Parkings d’immeubles résidentiels ou commerciaux</li>
          <li>Centres commerciaux et supermarchés</li>
          <li>Établissements publics : hôpitaux, écoles, administrations</li>
          <li>Zones industrielles, entrepôts et hangars logistiques</li>
        </ul>

        <h3>Avantages de notre service :</h3>
        <ul>
          <li>Respect des normes PMR et de sécurité</li>
          <li>Travaux réalisés de jour ou de nuit selon votre disponibilité</li>
          <li>Produits de haute qualité à séchage rapide</li>
          <li>Résistance aux intempéries et au trafic intense</li>
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

export default Tracage;
