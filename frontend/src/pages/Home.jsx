import React from 'react';
import '../HomePage.css';
import { Link } from 'react-router-dom';

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
            // color: "black",
            fontSize: "1em"
          }}>
            <Link to="/marquageSol"><li>Marquage et entretien de la signalisation au sol</li></Link>
            <Link to="/tracage"><li>Traçage de parking</li></Link>
            <Link to="/signalisation"><li>Fourniture et pose de panneaux de signalisation</li></Link> 
           <Link to="/glissiere"><li>Fourniture et pose de glissière et garde-corps de sécurité</li></Link> 
            
          </ul>

          <div style={{ textAlign: 'center' }}>
            <a href="contact" className="btn-primary">Demander un devis</a>
          </div>
        </div>
      </section>




      {/* Image bannière */}
      <img
        src="./images/homeImage2.png"
        alt="Illustration signalisation"
        style={{
          width: '100vw',
          height: '400px',
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
            <Link to="/marquageSol" className="service-link">
              <img src="./images/marquage.png" alt="Marquage au sol" />
              <h3>Marquage au sol et entretien de la signalisation horizontale</h3>
              <p>Lignes de chaussée, passages piétons, flèches directionnelles…</p>
            </Link>
          </article>
          <article>
            <Link to="/tracage" className="service-link">
              <img src="./images/tracage.png" alt="Traçage de parkings" />
              <h3>Traçage de parkings et marquages de stationnement</h3>
              <p>Zones PMR, numérotation, flèches, hachures…</p>
            </Link>
          </article>
          <article>
            <Link to="/signalisation" className="service-link">
              <img src="./images/signalisation1.png" alt="Panneaux de signalisation" />
              <h3>Fourniture et pose de panneaux de signalisation routière</h3>
              <p>Signalisation verticale conforme à la réglementation</p>
            </Link>
          </article>
          <article>
            <Link to="/glissiere" className="service-link">
              <img src="./images/glissiere.png" alt="Glissières de sécurité" />
              <h3>Installation de glissières de sécurité et garde-corps</h3>
              <p>Dispositifs de retenue et de protection en bordure de voirie</p>
            </Link>
          </article>

        </div>
      </section>

      <section className="realisations">
        <h2>Nos Réalisations</h2>
        <div className="gallery">
          <div className="realisation-block">
            <Link to="/peageModerne"><h3>Poste de péage moderne</h3>
            <img src="/realisations/peagesModerne/image1.jpg" alt="Péage moderne" /></Link>
          </div>

          <div className="realisation-block">
            <Link to="/aeroport"><h3>Aéroport de Ouagadougou</h3>
            <img src="/realisations/aeroport/image1.jpg" alt="Aéroport" /></Link>
          </div>

          <div className="realisation-block">
            <Link to="/gourcy"><h3>Projet Gourcy</h3>
            <img src="/realisations/gourcy/image6.jpg" alt="Gourcy" /></Link>
          </div>
        </div>
      </section>




      {/* partenaires */}
      <section className="partenaires">
        <h2>Nos Partenaires</h2>
        <div className="cards">
          <div className="card">
            <div className="card-inner">
              <div className="card-front">
                <p>“Globex Construction”</p>
                <span>Partenaire Technique</span>
              </div>
              <div className="card-back">
                <p>“SOROUBAT”</p>
                <span>Partenaire Technique</span>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-inner">
              <div className="card-front">
                <p>“Présidence du Faso”</p>
                <span>Partenaire Technique</span>
              </div>
              <div className="card-back">
                <p>“CMC Italie”</p>
                <span>Partenaire Technique</span>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-inner">
              <div className="card-front">
                <p>“CODEC”</p>
                <span>Partenaire Financier</span>
              </div>
              <div className="card-back">
                <p>“Coris Banque”</p>
                <span>Partenaire Financier</span>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-inner">
              <div className="card-front">
                <p>“Ministère des infrastructures de Transport”</p>
                <span>Partenaire institutionnel</span>
              </div>
              <div className="card-back">
                <p>“Banque Atlantique”</p>
                <span>Partenaire Financier</span>
              </div>
            </div>
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
