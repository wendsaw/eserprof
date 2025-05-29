import React from 'react';
import './Prefa.css';
import { Link } from 'react-router-dom';

const Prefa = () => {
  return (
    <section className="prefa-container">
      <div className="prefa-wrapper">
        <h1 className="prefa-title">Préfabrication d’ouvrages en béton armé (dalots, buses)</h1>
        <p className="prefa-text">
          Nous fabriquons et posons des ouvrages préfabriqués en béton armé pour garantir la solidité
          et la durabilité des infrastructures routières et hydrauliques. Nos dalots et buses sont conçus
          selon les normes en vigueur pour répondre à tous les besoins de franchissement et d’écoulement.
        </p>

        <h2 className="prefa-subtitle">Nos produits comprennent :</h2>
        <ul className="prefa-list">
          <li>Dalots rectangulaires préfabriqués</li>
          <li>Buses circulaires béton armé</li>
          <li>Pièces sur mesure pour ouvrages spécifiques</li>
          <li>Éléments d’assemblage et de jonction</li>
        </ul>

        <h1 className="prefa-title">Fourniture et pose de bordures hautes</h1>
        <p className="prefa-text">
          Nous fournissons et posons différents types de bordures hautes pour assurer la délimitation
          et la sécurité des voiries, trottoirs, espaces verts et zones de circulation.
        </p>

        <h2 className="prefa-subtitle">Applications :</h2>
        <ul className="prefa-list">
          <li>Voiries urbaines et interurbaines</li>
          <li>Accotements, trottoirs et zones piétonnes</li>
          <li>Accès privés et parkings</li>
        </ul>

        <h2 className="prefa-subtitle">Avantages :</h2>
        <ul className="prefa-list">
          <li>Résistance aux charges lourdes et aux intempéries</li>
          <li>Installation rapide et propre</li>
          <li>Esthétique soignée pour l’aménagement urbain</li>
        </ul>

         <div className="glissieres-contact">
                 <Link style={{textDecoration:'none'}} to="/demandedevis">📞 Pour un devis ou une étude personnalisée, <strong>contactez-nous</strong> dès aujourd’hui !</Link>
                 </div>
              </div>
    </section>
  );
};

export default Prefa;
