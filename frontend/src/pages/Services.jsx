import React from 'react';
import { Link } from 'react-router-dom';

function Services() {
  return (
    <section className="services">
      <h2 className="section-title">Nos Services</h2>
      <div className="services-list">

        <article className="service-card">
          <Link to="/marquageSol" className="service-link">
            <img src="./images/marquage.png" alt="Marquage au sol" />
            <h3>Marquage au sol et entretien de la signalisation horizontale</h3>
            <p>Lignes de chaussée, passages piétons, flèches directionnelles…</p>
          </Link>
        </article>

        <article className="service-card">
          <Link to="/tracage" className="service-link">
            <img src="./images/tracage.png" alt="Traçage de parkings" />
            <h3>Traçage de parkings et marquages de stationnement</h3>
            <p>Zones PMR, numérotation, flèches, hachures…</p>
          </Link>
        </article>

        <article className="service-card">
          <Link to="/signalisation" className="service-link">
            <img src="./images/signalisation1.png" alt="Panneaux de signalisation" />
            <h3>Fourniture et pose de panneaux de signalisation routière</h3>
            <p>Signalisation verticale conforme à la réglementation</p>
          </Link>
        </article>

        <article className="service-card">
          <Link to="/glissiere" className="service-link">
            <img src="./images/glissiere.png" alt="Glissières de sécurité" />
            <h3>Installation de glissières de sécurité et garde-corps</h3>
            <p>Dispositifs de retenue et de protection en bordure de voirie</p>
          </Link>
        </article>

      </div>
    </section>
  );
}

export default Services;
