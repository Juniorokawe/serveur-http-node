# Serveur HTTP en Node.js

Ce projet est un serveur HTTP basique créé avec Node.js. Il gère plusieurs routes et renvoie des réponses en fonction de l'URL demandée.

## Fonctionnalités

- Affiche un message de bienvenue sur la page d'accueil (`/`).
- Fournit une page "À propos" (`/about`).
- Fournit une page de contact (`/contact`).
- Renvoie une erreur 404 personnalisée pour les routes inconnues.

## Prérequis

Avant d'exécuter le serveur, assurez-vous d'avoir installé Node.js sur votre machine.

## Installation

1. Clonez ce dépôt ou copiez le code du serveur.
2. Assurez-vous d'avoir Node.js installé.
3. Placez le fichier dans un dossier dédié.

## Exécution du serveur

1. Ouvrez un terminal et accédez au dossier contenant le fichier `server.js`.
2. Exécutez la commande suivante :
   ```bash
   node server.js
   ```
3. Le serveur démarrera sur `http://localhost:3000`.

## Routes disponibles

- `http://localhost:3000/` → Affiche "Bienvenue sur notre serveur Node.js !"
- `http://localhost:3000/about` → Affiche "Voici la page à propos."
- `http://localhost:3000/contact` → Affiche "Contactez-nous à contact@monserveur.com."
- Autres URL → Renvoie "404 - Page non trouvée"

## Améliorations possibles

- Ajouter d'autres routes dynamiques.
- Servir des fichiers HTML au lieu de simples messages texte.
- Implémenter un routeur plus avancé avec Express.js.

---

Félicitations pour votre premier serveur HTTP en Node.js ! 
