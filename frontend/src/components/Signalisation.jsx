import React from 'react';
import { Link } from 'react-router-dom';
import './signalisation.css';

function Signalisation() {
  return (
    <main className="page signalisation-page">
      <h2 className="section-title">Fourniture et pose de panneaux de signalisation routière</h2>

      <section className="section-content">
        <p>
          La signalisation verticale joue un rôle fondamental dans la régulation de la circulation,
          la sécurité routière et l’orientation des usagers. ESER-PROF propose un service complet de
          fourniture et d’installation de panneaux de signalisation conformes aux normes en vigueur.
        </p>

        <h3>Types de panneaux fournis :</h3>
        <ul>
          <li>Panneaux de danger (triangle : virage, ralentisseur, etc.)</li>
          <li>Panneaux d'interdiction (rond rouge : sens interdit, vitesse limite...)</li>
          <li>Panneaux d'obligation (rond bleu : direction obligatoire, etc.)</li>
          <li>Panneaux d’indication (stationnement, direction, signalétique urbaine)</li>
          <li>Panneaux personnalisés (entreprises, zones privées, chantiers)</li>
        </ul>

        <h3>Nos engagements :</h3>
        <ul>
          <li>Fourniture de panneaux en aluminium galvanisé ou composite</li>
          <li>Pose sur platines, scellement béton ou sur supports existants</li>
          <li>Conformité aux normes CE / UEMOA</li>
          <li>Haute visibilité de jour comme de nuit grâce aux films réfléchissants</li>
          <li>Maintenance et remplacement sur demande</li>
        </ul>

        <h3>Zones d’intervention :</h3>
        <ul>
          <li>Routes nationales, départementales et communales</li>
          <li>Zones industrielles, parkings, sites privés</li>
          <li>Chantiers temporaires et signalisation de travaux</li>
          <li>Établissements publics : écoles, mairies, hôpitaux</li>
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

export default Signalisation;
