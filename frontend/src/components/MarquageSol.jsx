import React from 'react';
import './marquageSol.css';
import { Link } from 'react-router-dom';

const MarquageSol = () => {
  return (
    <section className="marquage-container">
      <div className="marquage-wrapper">
        <h1 className="marquage-title">Marquage au sol et entretien de la signalisation horizontale</h1>

        <p className="marquage-text">
          Notre société intervient pour réaliser tout type de marquage au sol afin d'assurer la sécurité des usagers, la lisibilité des voies et le bon fonctionnement de la circulation routière. Nous accompagnons aussi bien les collectivités que les entreprises et infrastructures privées.
        </p>

        <h2 className="marquage-subtitle">Nos prestations incluent :</h2>
        <ul className="marquage-list">
          <li>Lignes de chaussée (continues / discontinues)</li>
          <li>Passages piétons</li>
          <li>Flèches directionnelles et symboles routiers</li>
          <li>Signalisations PMR, STOP, CÉDEZ LE PASSAGE, ZÉBRURES</li>
          <li>Bandes de ralentissement, lettrages et numérotations</li>
        </ul>

        <h2 className="marquage-subtitle">Produits & matériaux utilisés :</h2>
        <ul className="marquage-list">
          <li>Peintures thermoplastiques et acryliques</li>
          <li>Microbilles de verre pour la visibilité nocturne</li>
          <li>Peintures à séchage rapide, durables et écologiques</li>
        </ul>

        <div className="glissieres-contact">
                        <Link style={{textDecoration:'none'}} to="/demandedevis">📞 Pour un devis ou une étude personnalisée, <strong>contactez-nous</strong> dès aujourd’hui !</Link>
                        </div>
      </div>
    </section>
  );
};

export default MarquageSol;
