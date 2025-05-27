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


          <ul className="hero-list">
            <Link to="/marquageSol"><li>Marquage et entretien de la signalisation au sol</li></Link>
            <Link to="/tracage"><li>Traçage de parking</li></Link>
            <Link to="/signalisation"><li>Fourniture et pose de panneaux de signalisation</li></Link>
            <Link to="/glissiere"><li>Fourniture et pose de glissière et garde-corps de sécurité</li></Link>
            <Link> <li>Préfabrication d'ouvrage (dalots et buses)</li></Link>
            <Link> <li>Fourniture et pose de tout type de bordures hautes</li></Link>

          </ul>




          <div style={{ textAlign: 'center' }}>
            <Link to="/demandedevis" className="btn-primary">Demander un devis</Link>
          </div>
        </div>
      </section>




      {/* Image bannière */}
      {/* Bannière avec 3 images en arrière-plan */}
      <section className="hero-banner">
        <div className="background-slide bg1"></div>
        {/* <div className="background-slide bg2"></div>
  <div className="background-slide bg3"></div> */}
      </section>


      {/* Section Services */}
      <section className="services">
        <h2>Nos Services</h2>
        <div className="services-list">
          <article>
            <article>
              <Link to="/marquageSol" className="service-link">
                <div className="img-box img-service1"></div>
                <h3>Marquage au sol et entretien de la signalisation horizontale</h3>
                <p>Lignes de chaussée, passages piétons, flèches directionnelles…</p>
              </Link>
            </article>

          </article>
          <article>
            <article>
            <Link to="/tracage" className="service-link">
              <div className="img-box img-service2"></div>
              <h3>Traçage de parkings et marquages de stationnement</h3>
              <p>Zones PMR, numérotation, flèches, hachures…</p>
            </Link>
            </article>
          </article>
          <article>
            <article>
            <Link to="/signalisation" className="service-link">
                <div className="img-box img-service3"></div>
              <h3>Fourniture et pose de panneaux de signalisation routière</h3>
              <p>Signalisation verticale conforme à la réglementation</p>
            </Link>
            </article>
          </article>
          <article>
            <article>
            <Link to="/glissiere" className="service-link">
              <div className="img-box img-service4"></div>
              <h3>Installation de glissières de sécurité et garde-corps</h3>
              <p>Dispositifs de retenue et de protection en bordure de voirie</p>
            </Link>
            </article>
          </article>
          <article>
            <article>
            <Link to="/ouvrage" className="service-link">
              <div className="img-box img-service5"></div>
              <h3>Préfabrication d'ouvrage en béton armé (dalots et buses)</h3>
              <p>Routes nationales et rurales</p>
            </Link>
            </article>
          </article>
          <article>
            <article>
            <Link to="/bordure" className="service-link">
              <div className="img-box img-service6"></div>
              <h3>Fourniture et pose de tout type de bordures hautes</h3>
              <p>délimiter les chaussées</p>
            </Link>
            </article>
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
      <section >
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
          <p><strong>Email :</strong> info@eserprof.com</p>
          <p><strong>Adresse :</strong> Ouagadougou, Burkina Faso</p>
          <a href="https://wa.me/+17203946223" target="_blank" rel="noreferrer">Contacter sur WhatsApp</a>
        </div>
      </section>
    </main>
  );
}

export default Home;
