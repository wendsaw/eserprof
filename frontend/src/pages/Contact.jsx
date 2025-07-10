import React, { useState } from 'react';
import axios from 'axios';

function Contact() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    message: '',
  });

  const [status, setStatus] = useState(''); // ← pour afficher le message de confirmation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Envoi en cours...');

    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/contact`, formData);
      setStatus('✅ Message envoyé avec succès.');
      setFormData({ nom: '', email: '', telephone: '', message: '' });
    } catch (err) {
      setStatus('❌ Erreur lors de l’envoi du message.');
    }
  };

  return (
    <main className="page">
      <h2 style={{ textAlign: 'center', color:'black' }}>Contactez-Nous</h2>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" name="nom" placeholder="Nom" value={formData.nom} onChange={handleChange} required />
        <input type="email" name="email" placeholder="E-mail" value={formData.email} onChange={handleChange} required />
        <input type="tel" name="telephone" placeholder="Téléphone" value={formData.telephone} onChange={handleChange} required />
        <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} required></textarea>
        <button type="submit">Envoyer</button>
      </form>

      {/* ✅ Message de confirmation sous le formulaire */}
      {status && <p style={{ marginTop: '1rem', textAlign: 'center', color: status.startsWith('✅') ? 'green' : 'red' }}>{status}</p>}

      <div className="contact-info" style={{ marginTop: '2rem' }}>
        <p><strong>Téléphone:</strong>+22679090909/+22675418703</p>
        <p><strong>Email:</strong> info@eserprof.com</p>
        <p><strong>Adresse:</strong> Ouagadougou, Burkina Faso</p>
        <a href="https://wa.me/22679090909" target="_blank" rel="noreferrer">Contacter sur WhatsApp</a>
      </div>
    </main>
  );
}

export default Contact;
