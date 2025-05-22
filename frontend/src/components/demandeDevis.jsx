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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Envoi en cours...');
    setIsSubmitting(true);

    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/contact`, formData);

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
    } finally {
      setIsSubmitting(false);
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
          required
        ></textarea>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Envoi...' : 'Envoyer'}
        </button>
      </form>
      {status && <p className="status-message">{status}</p>}
    </div>
  );
};

export default DemandeDevis;
