import React from 'react';

function Services() {
  return (
    <main className="page">
      <h2>Nos Services</h2>
      <div className="services-list">
        <article>
          <img src="/icons/road-sign.png" alt="Signalisation" />
          <h3>Signalisation Routière</h3>
          <p>Installation de panneaux de signalisation</p>
        </article>
        <article>
          <img src="/icons/road-paint.png" alt="Marquage de Chaussée" />
          <h3>Marquage de Chaussée</h3>
          <p>Peinture de lignes sur les routes</p>
        </article>
        <article>
          <img src="/icons/parking.png" alt="Parking" />
          <h3>Marquage de Parking</h3>
          <p>Tracé de lignes de stationnement</p>
        </article>
      </div>
    </main>
  );
}

export default Services;
