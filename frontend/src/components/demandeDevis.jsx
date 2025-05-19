import React, { useState } from 'react';
import axios from 'axios';
import './devis.css';

const DemandeDevis = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    service: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Envoi en cours...');

    try {
      await axios.post('http://localhost:5000/api/contact', formData); // ← Modifier URL en prod
      setStatus('✅ Votre demande a été envoyée avec succès.');
      setFormData({
        nom: '',
        email: '',
        telephone: '',
        service: '',
        message: '',
      });
    } catch (error) {
      console.error('Erreur d’envoi', error);
      setStatus('❌ Une erreur est survenue. Veuillez réessayer.');
    }
  };

  return (
    <div className="form-container">
      <h2>Demande de Devis</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nom"
          placeholder="Nom complet"
          value={formData.nom}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Adresse email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="telephone"
          placeholder="Numéro de téléphone"
          value={formData.telephone}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="service"
          placeholder="Service demandé"
          value={formData.service}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Détaillez votre demande"
          value={formData.message}
          onChange={handleChange}
          rows={4}
        ></textarea>
        <button type="submit">Envoyer</button>
      </form>
      {status && <p className="status-message">{status}</p>}
    </div>
  );
};

export default DemandeDevis;
