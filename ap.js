// app.js - Script principal pour la plateforme ESER-PROF

document.addEventListener("DOMContentLoaded", () => {
    // Gestion de l'envoi du formulaire de contact
    const form = document.getElementById("contactForm");
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
  
        const name = form.querySelector("input[placeholder='Nom']").value;
        const email = form.querySelector("input[placeholder='E-mail']").value;
        const phone = form.querySelector("input[placeholder='Téléphone']").value;
        const message = form.querySelector("textarea").value;
  
        // Afficher une alerte (à remplacer par une requête API dans un backend réel)
        alert("Merci " + name + " ! Votre message a été envoyé avec succès.");
        form.reset();
      });
    }
  });
  