import React from 'react';



import './marquageSol.css'; // Assure-toi que ce fichier contient les styles globaux

function MarquageSol() {
  return (
    <main className="page marquage-page">
      <h2 className="section-title">Marquage au sol et entretien de la signalisation horizontale</h2>

      <section className="section-content">
        <p>
          Nous réalisons tous types de marquages horizontaux afin de garantir une circulation sécurisée,
          fluide et conforme aux normes en vigueur. Nos services s'adressent aux collectivités, aux
          entreprises et aux particuliers souhaitant structurer efficacement leurs espaces routiers ou privés.
        </p>

        <h3>Prestations proposées :</h3>
        <ul>
          <li>Lignes de chaussée (continues et discontinues)</li>
          <li>Passages piétons</li>
          <li>Flèches directionnelles</li>
          <li>Symboles (STOP, cédé le passage, PMR, vélo…)</li>
          <li>Bandes de ralentissement et zébrures de sécurité</li>
          <li>Numérotation ou lettrage au sol</li>
        </ul>

        <h3>Produits & matériaux utilisés :</h3>
        <ul>
          <li>Peintures routières : thermoplastiques ou acryliques</li>
          <li>Microbilles de verre pour la visibilité nocturne</li>
          <li>Peintures à séchage rapide et haute durabilité</li>
          <li>Solutions écologiques disponibles</li>
        </ul>

        <h3>Méthodologie :</h3>
        <ol>
          <li>Analyse des besoins et état du sol</li>
          <li>Préparation et nettoyage de la surface</li>
          <li>Application du marquage avec matériel professionnel</li>
          <li>Contrôle qualité et conformité</li>
          <li>Entretien ou remise en peinture selon fréquence définie</li>
        </ol>

        <h3>Public concerné :</h3>
        <ul>
          <li>Collectivités territoriales et services publics</li>
          <li>Entreprises, usines, zones industrielles</li>
          <li>Centres commerciaux et parkings privés</li>
          <li>Hôpitaux, établissements scolaires</li>
        </ul>

        <div className="cta-contact">
          <h4>Demandez un devis gratuit</h4>
          <p>
            📞 Téléphone : <strong>+226 12 34 56 78</strong><br />
            💬 <a href="https://wa.me/22612345678" target="_blank" rel="noreferrer">Contacter sur WhatsApp</a><br />
            📧 Email : <strong>info@eserprof.bf</strong>
          </p>
        </div>
      </section>
    </main>
  );
}

export default MarquageSol;
