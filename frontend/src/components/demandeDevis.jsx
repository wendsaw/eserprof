import React, { useState } from 'react';
import './devis.css'; // ← Import du fichier CSS


const DemandeDevis = () => {

  
  
  
    return (
      <main className="page">
        <h2 style={{textAlign:"center"}}>Contactez-Nous</h2>
        <form className="contact-form">
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
         
        </div>
      </main>
    );
  }
  
  
  

export default DemandeDevis;
