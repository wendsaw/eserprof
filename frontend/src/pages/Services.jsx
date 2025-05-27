import React from 'react';
import { Link } from 'react-router-dom';
import './services.css';


function Services() {
  return (
    <article>
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
    </article>
    
  );
}

export default Services;
