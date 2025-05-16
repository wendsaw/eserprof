import React from 'react';
import { Link } from 'react-router-dom';

function Services() {
  return (
    <main className="page">
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
    </main>
  );
}

export default Services;
