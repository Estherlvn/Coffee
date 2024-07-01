// components/compteur.jsx

// Importation des hooks et fonctions nécessaires depuis React
import React, { useState } from 'react';

// Importation des styles CSS spécifiques pour ce composant
import styles from './compteur.module.css'; 

// Définition du composant fonctionnel Compteur
function Compteur() {
  // Déclaration d'un état local 'count' avec useState, initialisé à 0
  const [count, setCount] = useState(0);

  // Fonction pour incrémenter le compteur
  const increment = () => {
    setCount(count + 1); // Mise à jour de 'count' en ajoutant 1
  };

  // Fonction pour décrémenter le compteur, en vérifiant que 'count' ne va pas en dessous de zéro
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1); // Mise à jour de 'count' en retirant 1, seulement si 'count' est supérieur à 0
    }
  };

  // Fonction pour réinitialiser le compteur à zéro
  const reset = () => {
    setCount(0); // Réinitialisation de 'count' à 0
  };

  // Rendu JSX du composant Compteur
  return (
    <div className={styles.compteur}>
      <h2>Participants : {count}</h2> {/* Affiche le nombre actuel de participants */}
      <button onClick={increment}>Ajouter</button> {/* Bouton pour incrémenter le compteur */}
      <button onClick={decrement}>Retirer</button> {/* Bouton pour décrémenter le compteur */}
      <button onClick={reset}>Réinitialiser</button> {/* Bouton pour réinitialiser le compteur */}
    </div>
  );
}

export default Compteur; // Exportation du composant Compteur pour pouvoir l'utiliser ailleurs dans l'application
