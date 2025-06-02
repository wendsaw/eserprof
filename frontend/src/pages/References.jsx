import React from 'react';
import { Link } from 'react-router-dom';

import "./reference.css"

function References() {
  return (
    <main className="page">
     {/* References technique*/}
     
           <section className="references">
             <h2 style={{fontFamily:"cursive"}}>References Technique</h2>
             <div className="references-list">
               
               <article>
                 <Link to="/peageModerne" className="references-link">
                   <div className="img-box img-references1"></div>
                   <h3 style={{ fontSize: '1.25rem', color: '#2c3e50', fontWeight: '600', margin: '1rem 0 0.5rem' }}>
                     Travaux de Construction de postes de péages routiers modernes de Boudtenga (Ouagadougou)
                   </h3>
                   <p style={{ fontSize: '1rem', color: '#555', margin: '0.25rem 0' }}>
                     Client: Globex Construction</p>
                   <p style={{ fontSize: '1rem', color: '#555', margin: '0.25rem 0' }}>
                     Date: 2023
                   </p>
                 </Link>
               
               </article>
     
               <article>
                 <Link to="/peageModerne" className="references-link">
                   <div className="img-box img-references2"></div>
                   <h3 style={{ fontSize: '1.25rem', color: '#2c3e50', fontWeight: '600', margin: '1rem 0 0.5rem' }}>
                     Travaux de Construction de postes de péages routiers modernes de Tintilou  (Ouagadougou)
                   </h3>
                   <p style={{ fontSize: '1rem', color: '#555', margin: '0.25rem 0' }}>
                     Client: Globex Construction</p>
                   <p style={{ fontSize: '1rem', color: '#555', margin: '0.25rem 0' }}>
                     Date: 2023
                   </p>
                 </Link>
               
               </article>
               <article>
                 <Link to="/peageModerne" className="references-link">
                   <div className="img-box img-references3"></div>
                   <h3 style={{ fontSize: '1.25rem', color: '#2c3e50', fontWeight: '600', margin: '1rem 0 0.5rem' }}>
                    Travaux de Construction de postes de péages routiers modernes de Kotedougou  (Bobo)
                   </h3>
                   <p style={{ fontSize: '1rem', color: '#555', margin: '0.25rem 0' }}>
                     Client: Globex Construction</p>
                   <p style={{ fontSize: '1rem', color: '#555', margin: '0.25rem 0' }}>
                     Date: 2023
                   </p>
                 </Link>
               
               </article>
               
                <article>
                 <Link to="/citean2" className="references-link">
                   <div className="img-box img-references4"></div>
                   <h3 style={{ fontSize: '1.25rem', color: '#2c3e50', fontWeight: '600', margin: '1rem 0 0.5rem' }}>
                    Travaux d’aménagement et de bitumage de la voirie de la stèle cité An II
                   </h3>
                   <p style={{ fontSize: '1rem', color: '#555', margin: '0.25rem 0' }}>
                     Client: MRJF</p>
                   <p style={{ fontSize: '1rem', color: '#555', margin: '0.25rem 0' }}>
                     Date: 2024
                   </p>
                 </Link>
               
               </article>
                <article>
                 <Link to="/ziniare" className="references-link">
                   <div className="img-box img-references5"></div>
                   <h3 style={{ fontSize: '1.25rem', color: '#2c3e50', fontWeight: '600', margin: '1rem 0 0.5rem' }}>
                    TRAVAUX D’AMENAGEMENT ET DE BITUMAGE DE VOIRIES POUR LA COMMEMORATION DU 11 DECEMBRE 2021  A ZINIARE 
                   </h3>
                   <p style={{ fontSize: '1rem', color: '#555', margin: '0.25rem 0' }}>
                     Client: ZOTIMSOM</p>
                   <p style={{ fontSize: '1rem', color: '#555', margin: '0.25rem 0' }}>
                     Date: 2025
                   </p>
                 </Link>
               
               </article>
               <article>
                 <Link to="/aeroport" className="references-link">
                   <div className="img-box img-references6"></div>
                   <h3 style={{ fontSize: '1.25rem', color: '#2c3e50', fontWeight: '600', margin: '1rem 0 0.5rem' }}>
                    Travaux de rafraichissement de la peinture blanche de l'axe de la piste, des marques de  seuils de piste et des écriteaux de l'aéroport international de Ouagadougou (2023)
                   </h3>
                   <p style={{ fontSize: '1rem', color: '#555', margin: '0.25rem 0' }}>
                     Client: ASECNA</p>
                   <p style={{ fontSize: '1rem', color: '#555', margin: '0.25rem 0' }}>
                     Date: 2022
                   </p>
                 </Link>
               
               </article>
               <article>
                 <Link to="/kosyam" className="references-link">
                  <div className="img-box img-references10"></div>
     
                   <h3 style={{ fontSize: '1.25rem', color: '#2c3e50', fontWeight: '600', margin: '1rem 0 0.5rem' }}>
                    TRAVAUX D’URGENCE DE MARQUAGE DE SIGNALISATION HORIZONTAL A KOSYAM AU PROFIT DU CABINET DE LA PRESIDENCE DU FASO
                   </h3>
                   <p style={{ fontSize: '1rem', color: '#555', margin: '0.25rem 0' }}>
                     Client: PRESIDENCE DU FASO</p>
                   <p style={{ fontSize: '1rem', color: '#555', margin: '0.25rem 0' }}>
                     Date: 2024
                   </p>
                 </Link>
               
               </article>
               <article>
                 <Link to="/ccva" className="references-link">
                   <div className="img-box img-references11"></div>
                   <h3 style={{ fontSize: '1.25rem', color: '#2c3e50', fontWeight: '600', margin: '1rem 0 0.5rem' }}>
                    Travaux de marquage au sol dans les hangars de stationnement de la CCVA
                   </h3>
                   <p style={{ fontSize: '1rem', color: '#555', margin: '0.25rem 0' }}>
                     Client:CCVA</p>
                   <p style={{ fontSize: '1rem', color: '#555', margin: '0.25rem 0' }}>
                     Date: 2023
                   </p>
                 </Link>
               
               </article>
     
             </div>
           </section>
     
    </main>
  );
}

export default References;
