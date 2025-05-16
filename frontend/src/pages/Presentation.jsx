import React from 'react';
import './presentation.css';

const Presentation = () => {
  return (
    <div className="container mx-auto p-8 bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-6">
        <h1 className="text-3xl font-bold mb-4">ESER-PROF</h1>
        <p className="text-gray-700 mb-6">
          ESER-PROF est une société à responsabilité limitée, implantée au cœur du Burkina Faso et spécialisée dans la peinture routière et la signalisation. Depuis sa création, nous mettons notre savoir-faire au service de la sécurité et de la fluidité du trafic routier, en proposant des marquages durables, visibles et conformes aux normes en vigueur.
        </p>

        <h2 className="text-2xl font-semibold mb-2">Notre mission</h2>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>Garantir la sécurité des usagers de la route grâce à un marquage net, précis et résistant</li>
          <li>Optimiser la gestion du trafic en assurant une signalisation claire et cohérente</li>
          <li>Contribuer à l’amélioration du réseau routier burkinabè par des interventions rapides et professionnelles</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-2">Nos services</h2>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li><strong>Marquage au sol :</strong> bandes lane, passages piétons, flèches directionnelles</li>
          <li><strong>Application de thermoplastique :</strong> bandes high-performance pour un marquage longue durée</li>
          <li><strong>Signalisation verticale :</strong> installation et remplacement de panneaux routiers</li>
          <li><strong>Entretien et renouvellement :</strong> rafraîchissement périodique des marquages existants</li>
          <li><strong>Conseil et ingénierie :</strong> diagnostic de voirie et préconisations techniques</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-2">Nos engagements</h2>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li><strong>Qualité :</strong> matériaux certifiés, contrôles rigoureux</li>
          <li><strong>Sécurité :</strong> respect strict des procédures et des normes industrielles</li>
          <li><strong>Délais :</strong> planification optimisée pour minimiser les perturbations</li>
          <li><strong>Écologie :</strong> utilisation de peintures à faible teneur en COV</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-2">Pourquoi choisir ESER-PROF ?</h2>
        <ol className="list-decimal list-inside text-gray-700 mb-6">
          <li><strong>Expertise locale :</strong> une équipe formée aux contraintes climatiques et au réseau routier du Burkina</li>
          <li><strong>Matériel performant :</strong> équipements de haute technologie pour une application rapide et uniforme</li>
          <li><strong>Accompagnement personnalisé :</strong> du diagnostic initial à la réception des travaux</li>
        </ol>

        
      </div>
    </div>
  );
};

export default Presentation;
