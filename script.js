const projets = [
  {
    titre: "Liste-Matelo",
    description:
      "Application web partagée entre deux personnes : gestion des tâches ménagères et de la liste de courses, validation des tâches avec badge « Fait ! » et suivi de la progression en temps réel via une barre de pourcentage. Aucune inscription requise, juste un lien partagé.",
    lien: "https://liste-matelo-71ok1j6st-matthieuchvs-projects.vercel.app/",
  },
  {
    titre: "Ce portfolio",
    description: "Le site que tu es en train de regarder !",
  },
];

// ==========================================
// On affiche chaque projet dans la page
// ==========================================
const container = document.getElementById("projets-container");

projets.forEach((projet) => {
  const carte = document.createElement("div");
  carte.classList.add("projet-card");

  const lienHTML = projet.lien
    ? `<a href="${projet.lien}" target="_blank" rel="noopener noreferrer" class="btn">Voir le projet</a>`
    : "";

  carte.innerHTML = `
    <h3>${projet.titre}</h3>
    <p>${projet.description}</p>
    ${lienHTML}
  `;

  container.appendChild(carte);
});

// ==========================================
// On anime les barres de compétences
// ==========================================
document.querySelectorAll(".skill-fill").forEach((bar) => {
  const niveau = bar.dataset.niveau;
  setTimeout(() => {
    bar.style.width = niveau + "%";
  }, 100);
});
