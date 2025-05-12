import React from 'react';

function Home() {
  return (
    <main>
      {/* Section Hero */}
      <section className="hero">
        <h2>Société de Peinture Routière au Burkina</h2>
        <p>Traçage, marquage et entretien de la signalisation au sol</p>
        <a href="#contact" className="btn-primary">Demander un devis</a>
      </section>

      {/* Section Services */}
      <section id="services">
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
      </section>

      {/* Section Réalisations */}
      <section id="realisations">
        <h2>Nos Réalisations</h2>
        <div className="gallery">
          <img src="/images/project1.jpg" alt="Route 1" />
          <img src="/images/project2.jpg" alt="Passage piéton" />
          <img src="/images/project3.jpg" alt="STOP" />
        </div>
      </section>

      {/* Section Contact */}
      <section id="contact">
        <h2>Contactez-Nous</h2>
        <form>
          <input type="text" placeholder="Nom" required />
          <input type="email" placeholder="E-mail" required />
          <input type="tel" placeholder="Téléphone" required />
          <textarea placeholder="Message" required></textarea>
          <button type="submit">Envoyer</button>
        </form>
        <div className="contact-info">
          <p><strong>Téléphone:</strong> +226 12 34 56 78</p>
          <p><strong>Email:</strong> info@eserprof.bf</p>
          <p><strong>Adresse:</strong> Ouagadougou, Burkina Faso</p>
          <a href="https://wa.me/22612345678" target="_blank" rel="noreferrer">Contacter sur WhatsApp</a>
        </div>
      </section>

      {/* Section Espace Client */}
      <section id="espace-client">
        <h2>Espace Clients</h2>
        <div className="client-dashboard">
          <p>Accédez à vos devis, factures et projets en cours</p>
          <a href="/login" className="btn-secondary">Se connecter</a>
        </div>
      </section>
    </main>
  );
}

export default Home;
