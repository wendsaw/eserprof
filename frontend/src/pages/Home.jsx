import React from 'react';
import '../HomePage.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <main>
      {/* Section Héro */}
      <section className="hero">
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{fontFamily:"cursive"}} >Société de Peinture Routière au Burkina</h2>


          <ul className="hero-list" >
            <Link style={{textDecoration:'none'}} to="/marquageSol"><li>Marquage et entretien de la signalisation au sol</li></Link>
            <Link style={{textDecoration:'none'}} to="/tracage"><li>Traçage de parking</li></Link>
            <Link style={{textDecoration:'none'}} to="/signalisation"><li>Fourniture et pose de panneaux de signalisation</li></Link>
            <Link style={{textDecoration:'none'}} to="/glissiere"><li>Fourniture et pose de glissière et garde-corps de sécurité</li></Link>
            <Link  style={{textDecoration:'none'}} to="/prefa"> <li>Préfabrication d'ouvrage, fourniture et pose de tout type de bordures hautes</li></Link>
            <Link style={{textDecoration:'none'}} to="/bordure"> <li>Infrastructures Ferroviaire</li></Link>
            
          </ul>




          <p className="prefab-contact">
            <Link  style={{textDecoration:"none"}}  to='/demandedevis'>📞 Besoin d’un devis ou d’un conseil technique ? <strong>Contactez-nous</strong> dès maintenant !</Link>
          </p>
        </div>
      </section>




      {/* Image bannière */}
      {/* Bannière avec 3 images en arrière-plan */}
      <section className="hero-banner">
        <div className="background-slide bg1"></div>
        {/* <div className="background-slide bg2"></div>
  <div className="background-slide bg3"></div> */}
      </section>

      {/* Section image de transition */}
<section className="background-transition"></section>



      {/* Section Services */}
      <section className="services">
        <h2 style={{fontFamily:"cursive"}}>Nos Services</h2>
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
            <Link to="/prefa" className="service-link">
              <div className="img-box img-service5"></div>
              <h3>Préfabrication d'ouvrage en béton armé (dalots,buses) Fourniture et pose de tout type de bordures hautes</h3>
              <p>Routes nationales et rurales délimiter les chaussées</p>
             
            </Link>
            </article>
          </article>
          <article>
            <article>
            <Link to="/bordure" className="service-link">
              <div className="img-box img-service6"></div>
              <h3>Infrastructures Ferroviaire </h3>
              <p>Construction de voies ferrées (voie unique/double, voies industrielles)</p>
              
            </Link>
            </article>
          </article>

        </div>
      </section>

      {/* realisations */}

      <section className="realisations">
        <h2 style={{fontFamily:"cursive"}}>Nos Réalisations</h2>
        <div className="gallery">
          <div className="realisation-block">
            <Link style={{textDecoration:'none'}} to="/peageModerne"><h3 >Poste de péage moderne</h3>
              <img src="/realisations/peagesModerne/image1.png" alt="Péage moderne" /></Link>
          </div>

          <div className="realisation-block">
            <Link style={{textDecoration:'none'}} to="/aeroport"><h3 >Aéroport de Ouagadougou</h3>
              <img src="/realisations/aeroport/picture1.png" alt="Aéroport" /></Link>
          </div>

          <div className="realisation-block">
            <Link style={{textDecoration:'none'}} to="/gourcy"><h3 >Projet Gourcy</h3>
              <img src="/realisations/gourcy/image1.png" alt="Gourcy" /></Link>
          </div>
        </div>
      </section>




      {/* partenaires */}
      <section className="partenaires">
        <h2 style={{fontFamily:"cursive"}}>Nos Partenaires</h2>
        <div className="cards">
          <div className="card">
            <div className="card-inner">
              <div className="card-front">
                <p style={{fontFamily:"fantasy"}}>“Globex Construction”</p>
                <span style={{fontFamily:"-moz-initial"}}>Partenaire Commercial</span>
              </div>
              <div className="card-back">
                <p style={{fontFamily:"fantasy"}}>“SOROUBAT”</p>
                <span style={{fontFamily:"-moz-initial"}}>Partenaire Technique</span>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-inner">
              <div className="card-front">
                <p style={{fontFamily:"fantasy"}}>“Présidence du Faso”</p>
                <span style={{fontFamily:"-moz-initial"}}>Partenaire Commercial</span>
              </div>
              <div className="card-back">
                <p style={{fontFamily:"fantasy"}}>“CMC Italie”</p>
                <span style={{fontFamily:"-moz-initial"}}>Partenaire Technique</span>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-inner">
              <div className="card-front">
                <p style={{fontFamily:"fantasy"}}>“CODEC”</p>
                <span style={{fontFamily:"-moz-initial"}}>Partenaire Commercial</span>
              </div>
              <div className="card-back">
                <p style={{fontFamily:"fantasy"}}>“Coris Banque”</p>
                <span style={{fontFamily:"-moz-initial"}}>Partenaire Financier</span>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-inner">
              <div className="card-front">
                <p style={{fontFamily:"fantasy"}}>“Ministère des infrastructures de Transport”</p>
                <span style={{fontFamily:"-moz-initial"}}>Partenaire institutionnel</span>
              </div>
              <div className="card-back">
                <p style={{fontFamily:"fantasy"}}>“Banque Atlantique”</p>
                <span style={{fontFamily:"-moz-initial"}}>Partenaire Financier</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Section Contact */}
      <section >
        <h2 style={{fontFamily:"cursive"}}>Contactez-Nous</h2>
        <form>
          <input type="text" placeholder="Nom" required />
          <input type="email" placeholder="E-mail" required />
          <input type="tel" placeholder="Téléphone" required />
          <textarea placeholder="Message" required></textarea>
          <button type="submit">Envoyer</button>
        </form>
        <div className="contact-info">
          <p><strong>Téléphone :</strong> +22679090909/+22675418703</p>
          <p><strong>Email :</strong> info@eserprof.com</p>
          <p><strong>Adresse :</strong> Ouagadougou, Burkina Faso</p>
          <a style={{textDecoration:"none"}} href="https://wa.me/+17203946223" target="_blank" rel="noreferrer">Contacter sur WhatsApp</a>
        </div>
      </section>
    </main>
  );
}

export default Home;
