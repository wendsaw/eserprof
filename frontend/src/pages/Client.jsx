import React from 'react';

function Client() {
  return (
    <main className="page">
      <h2>Espace Clients</h2>
      <div className="client-dashboard">
        <p>Accédez à vos devis, factures et projets en cours</p>
        <a href="/login" className="btn-secondary">Se connecter</a>
      </div>
    </main>
  );
}

export default Client;
