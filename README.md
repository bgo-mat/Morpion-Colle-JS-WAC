# Morpion - Colle W1

Bienvenue dans ce dépôt GitHub ! Ce dépôt contient le travail réalisé durant une après-midi pour la colle **W1 - Morpion**. Le projet consiste à développer un jeu de morpion en JavaScript (ES6).

## Description du Projet

Le but de ce projet est de créer un jeu de morpion en utilisant JS ES6, sans utiliser de plugins ou librairies externes. Le projet se compose de plusieurs étapes, chacune ajoutant de nouvelles fonctionnalités à l'application.

## Étapes

### Étape 1

**Objectif**: Créer un module JavaScript et afficher un "X" lors d'un clic sur une case.
- **Import**: `import { Morpion } from './modules/morpion.js';`
- **Initialisation**: `new Morpion(document.querySelector('#grid'));`

### Étape 2

**Objectif**: Alterner les joueurs à chaque coup et vérifier la disponibilité des cases.
- Joueur 1 place "X", joueur 2 place "O".
- Afficher le joueur actuel sur la page.
- Empêcher de jouer dans une case déjà occupée.

### Étape 3

**Objectif**: Vérifier la fin de la partie après chaque coup, compter les points et permettre de rejouer.
- Vérifier si un joueur a gagné ou s'il y a match nul.
- Afficher un message pour annoncer le gagnant.
- Compter les points pour chaque joueur.
- Redémarrer la partie avec un clic sur le bouton “Rejouer”.
