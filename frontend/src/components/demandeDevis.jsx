import React, { useState } from 'react';
import './devis.css'; // ← Import du fichier CSS


const DemandeDevis = () => {

  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    service: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneNumber = '+17203946223'; 
    const text = `📩 *Demande de devis ESER-PROF* \n
👤 *Nom* : ${formData.nom}
📧 *Email* : ${formData.email}
📞 *Téléphone* : ${formData.telephone}
🛠️ *Service demandé* : ${formData.service}
📝 *Détails* : ${formData.message}`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
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
          placeholder="Service demandé (ex : marquage au sol)"
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
        <button type="submit">Envoyer via WhatsApp</button>
      </form>
    </div>
  );
};


export default DemandeDevis;
