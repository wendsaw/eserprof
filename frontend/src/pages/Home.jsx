import React from 'react';
import '../HomePage.css';

function Home() {
  return (
    <main>
      {/* Section Héro */}
      <section className="hero">
  <div style={{ maxWidth: '800px', margin: '0 auto' }}>
    <h2>Société de Peinture Routière au Burkina</h2>

    <ul style={{
      listStyle: 'disc',
      paddingLeft: '20rem',
      margin: '1rem 0',
      textAlign: 'left',
      color:"grey",
      fontSize:"1em"
    }}>
      <li>Marquage et entretien de la signalisation au sol</li>
      <li>Traçage de parking</li>
      <li>Fourniture et pose de panneaux de signalisation</li>
      <li>Fourniture et pose de glissière et garde-corps de sécurité</li>
    </ul>

    <div style={{ textAlign: 'center' }}>
      <a href="#contact" className="btn-primary">Demander un devis</a>
    </div>
  </div>
</section>




      {/* Image bannière */}
      <img
        src="./images/homeImage.png"
        alt="Illustration signalisation"
        style={{
          width: '100vw',
          height: '500px',
          objectFit: 'cover',
          display: 'block',
          marginLeft: 'calc(-50vw + 50%)'
        }}
      />

      {/* Section Services */}
      <section className="services">
        <h2>Nos Services</h2>
        <div className="services-list">
          <article>
            <img src="./images/signalisation.png" alt="Panneau de signalisation" style={{ width: 80, height: 80 }} />
            <h3>Signalisation Routière</h3>
            <p>Installation de panneaux de signalisation</p>
          </article>
          <article>
            <img src="./images/marquage.png" alt="Marquage au sol" style={{ width: 80, height: 80 }} />
            <h3>Marquage de Chaussée</h3>
            <p>Peinture de lignes sur les routes</p>
          </article>
          <article>
            <img src="./images/signalisation.png" alt="Marquage de parking" style={{ width: 80, height: 80 }} />
            <h3>Marquage de Parking</h3>
            <p>Tracé de lignes de stationnement</p>
          </article>
        </div>
      </section>

      {/* Section Réalisations */}
      <section className="realisations">
        <h2>Nos Réalisations</h2>
        <div className="gallery">
          <img src="/images/project1.jpg" alt="Route réalisée" />
          <img src="/images/project2.jpg" alt="Passage piéton peint" />
          <img src="/images/project3.jpg" alt="Signal STOP marqué" />
        </div>
      </section>

      {/* Zones d'intervention */}
      <section className="zones">
        <h2>Zones d’Intervention</h2>
        <img src="/images/carte-burkina-yellow.png" alt="Carte des interventions ESER-PROF" />
      </section>

      {/* Témoignages */}
      <section className="testimonials">
        <h2>Témoignages</h2>
        <div className="cards">
          <div className="card">
            <p>“Un service fiable et professionnel pour nos routes rurales.”</p>
            <span>Une Collectivité Locale</span>
          </div>
          <div className="card">
            <p>“Excellent marquage réalisé dans les délais, bravo à l’équipe !”</p>
            <span>Une Entreprise</span>
          </div>
        </div>
      </section>

      {/* Section Contact */}
      <section className="zones">
        <h2>Contactez-Nous</h2>
        <form>
          <input type="text" placeholder="Nom" required />
          <input type="email" placeholder="E-mail" required />
          <input type="tel" placeholder="Téléphone" required />
          <textarea placeholder="Message" required></textarea>
          <button type="submit">Envoyer</button>
        </form>
        <div className="contact-info">
          <p><strong>Téléphone :</strong> +226 12 34 56 78</p>
          <p><strong>Email :</strong> info@eserprof.bf</p>
          <p><strong>Adresse :</strong> Ouagadougou, Burkina Faso</p>
          <a href="https://wa.me/22612345678" target="_blank" rel="noreferrer">Contacter sur WhatsApp</a>
        </div>
      </section>
    </main>
  );
}

export default Home;
