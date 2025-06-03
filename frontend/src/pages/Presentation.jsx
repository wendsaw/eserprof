import React from 'react';
import './presentation.css';

const Presentation = () => {
  const equipe = [
    { name: 'NIKIEMA Abdoul Aziz', role: 'Directeur Général', role2:'Ingenieur Genie Civil',email: 'Nikiemaabdoul@eserprof.com', photo: 'pdg.jpg' },
    { name: 'GUETE Arzouma Roland', role: 'Directeur Technique', email: 'Gueteroland@eserprof.com', photo: 'photoGuete.jpg' },
    { name: 'YOUMA Abdou André', role: 'Ingénieur Travaux publics', email: 'Youmaandre@eserprof.com', photo: 'andre.png' },
    { name: 'Mme NIKIEMA/Kabore Esther', role: 'Responsable Financière et Comptabilité', email: 'Nikiemaesther@eserprof.com', photo: 'esther.jpg' },
    { name: 'TIENDREBEOGO Stéphane Kamal', role: 'Technicien supérieur de génie civil', email: 'Info@eserprof.com', photo: 'stephane.jpg' },
   
  ];

  return (
    <div className="container">
      <div className="presentation-card">
        <h1 className="presentation-title">ESER-PROF</h1>
        <p className="presentation-text">
          ESER-PROF est une société à responsabilité limitée, implantée au cœur du Burkina Faso...
        </p>

        <h2 className="section-title">Notre mission</h2>
        <ul className="presentation-list">
          <li>Garantir la sécurité des usagers de la route grâce à un marquage net</li>
          <li>Optimiser la gestion du trafic en assurant une signalisation claire</li>
          <li>Contribuer à l’amélioration du réseau routier burkinabè</li>
        </ul>

        <h2 className="section-title">Nos services</h2>
        <ul className="presentation-list">
          <li><strong>Marquage au sol :</strong> bandes lane, passages piétons...</li>
          <li><strong>Application de thermoplastique :</strong> bandes haute performance</li>
          <li><strong>Signalisation verticale :</strong> panneaux routiers</li>
          <li><strong>Entretien :</strong> rafraîchissement des marquages</li>
          <li><strong>Ingénierie :</strong> diagnostics et conseils techniques</li>
        </ul>

        <h2 className="section-title">Nos engagements</h2>
        <ul className="presentation-list">
          <li><strong>Qualité :</strong> matériaux certifiés, contrôles rigoureux</li>
          <li><strong>Sécurité :</strong> respect des normes</li>
          <li><strong>Délais :</strong> interventions rapides</li>
          <li><strong>Écologie :</strong> peintures à faible COV</li>
        </ul>

        <h2 className="section-title">Pourquoi choisir ESER-PROF ?</h2>
        <ol className="presentation-steps">
          <li><strong>Expertise locale :</strong> adaptée au réseau burkinabè</li>
          <li><strong>Matériel performant :</strong> équipements modernes</li>
          <li><strong>Accompagnement personnalisé :</strong> du début à la fin</li>
        </ol>

        <h2 className="section-title">Notre équipe</h2>
        <div className="team-grid">
          {equipe.map((member, index) => (
            <div key={index} className="team-card">
              <img
                src={`/images/${member.photo}`} // ✅ Directly from public/images/
                alt={member.name}
                className="team-avatar"
              />
              <h3 className="team-name">{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <p className="team-role">{member.role2}</p>
              <p className="team-email">{member.email}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Presentation;
