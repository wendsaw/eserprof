import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: ['https://www.eserprof.com', 'http://localhost:5173'], // ← ajoute le frontend en local si tu testes
  methods: ['POST'],
}));

app.use(express.json());

// ✅ Route unique de contact
app.post('/api/contact', async (req, res) => {
  const { nom, email, telephone, service, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === 'true', // true pour SSL
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    await transporter.sendMail({
      from: `"ESER-PROF" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: '📩 Nouvelle demande de devis ESER-PROF',
      html: `
        <h3>Demande de devis reçue via le site</h3>
        <p><strong>Nom :</strong> ${nom}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Téléphone :</strong> ${telephone}</p>
        <p><strong>Service :</strong> ${service}</p>
        <p><strong>Message :</strong><br>${message}</p>
      `,
    });

    res.status(200).json({ success: true, message: 'Message envoyé avec succès.' });
  } catch (error) {
    console.error('Erreur SMTP:', error);
    res.status(500).json({ success: false, message: 'Erreur d\'envoi.' });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Serveur en ligne sur http://localhost:${PORT}`);
});
