# Supercode

**Cours et exercices interactifs d'informatique et de logique.** De zéro absolu au niveau attendu à l'entrée en filière informatique du lycée israélien — <span dir="rtl">מגמת מדעי המחשב</span>, <span dir="rtl">הנדסת תוכנה</span>, <span dir="rtl">סייבר</span>.

### 👉 [Ouvrir l'application](https://nonoskillers.github.io/Supercode/)

Un seul fichier, aucune installation, aucune dépendance, aucun compte. Fonctionne hors ligne.

---

## Ce que ça contient

| | |
|---|---|
| **10 cours** | Chaque unité commence par une leçon écrite : explications, code commenté, tableaux, encadrés sur les pièges classiques, vocabulaire hébreu correspondant. |
| **24 séries d'exercices** | Environ 140 questions. Correction immédiate avec explication, 3 vies par série, XP, niveaux, et une pile de révision alimentée par les erreurs. |

**Unités 1 à 7 — programmation en Python**
Variables et types · conditions · boucles · fonctions · listes (<span dir="rtl">מערך</span>) · chaînes de caractères · tri, recherche et efficacité.

**Unités 8 à 10 — logique des examens d'entrée**
Suites numériques et alphabétiques · déduction, diagrammes d'Euler, problèmes de mouvement et de travail · algorithmique sur papier : table de suivi (<span dir="rtl">טבלת מעקב</span>), raisonnement à rebours, énigmes classiques.

> Ces trois dernières unités s'appuient sur des sujets réellement publiés par des lycées de Hod Hasharon (<span dir="rtl">תיכון השקמים</span>, <span dir="rtl">תיכון אילן רמון</span>, <span dir="rtl">תיכון הדרים</span>), qui précisent tous que leurs tests évaluent le raisonnement et non des connaissances préalables en informatique.

### Pourquoi Python et pas Java

Les lycées enseignent la filière en Java ou en C#. Mais ce qui est évalué au bagrut, c'est la **pensée algorithmique** — identique dans les trois langages. Python permet d'écrire une vraie boucle dès le cinquième jour, au lieu de passer la moitié du temps sur la syntaxe. La dernière unité contient une table de correspondance Python → Java pour la transition.

---

## Utilisation

**Sur ordinateur** — télécharger `index.html` et double-cliquer dessus. C'est tout.

**Sur iPhone** — ouvrir [le lien](https://nonoskillers.github.io/Supercode/) **dans Safari**, appuyer sur le bouton Partager, puis « Sur l'écran d'accueil ». L'application s'installe avec son icône et s'ouvre en plein écran, sans barre d'adresse.

**Sur Android** — ouvrir le lien dans Chrome, menu ⋮, puis « Ajouter à l'écran d'accueil ».

---

## Comment ça marche

Tout tient dans **`index.html`** : le HTML, les styles, les 10 cours, les 140 questions et la logique de l'application. Aucun fichier externe, donc rien qui puisse manquer.

Pour modifier le contenu, ouvrir le fichier dans un éditeur de texte et chercher :

- `const UNITS = [` — la banque de questions ;
- `<template id="cours-u1">` — le contenu des cours, une balise par unité.

Trois types de questions existent :

```js
// Choix multiple — a = index de la bonne réponse dans c
{t:'qcm', q:'Que renvoie toujours input() ?',
 c:['Un entier','Une chaîne de caractères','Un booléen','Cela dépend'], a:1,
 e:'input renvoie TOUJOURS du texte, même si l\'utilisateur tape 42.'}

// Saisie libre — a = liste des réponses acceptées (casse et espaces ignorés)
{t:'in', q:'Que vaut cette expression ?', code:'17 % 5', a:['2'],
 e:'Le modulo donne le reste de la division.'}

// Remise en ordre — items dans le BON ordre, mélangés à l'affichage
{t:'ord', q:'Remettez ce programme dans le bon ordre.',
 items:['n = 5','for i in range(1, n + 1):','    print("*" * i)'],
 e:'On fixe la hauteur, puis on affiche i étoiles à la ligne i.'}
```

---

## Accessibilité

L'interface vise la conformité **WCAG 2.2 niveau AA** :

- contrastes vérifiés en thème clair et sombre, y compris sur les états de réussite et d'erreur ;
- la couleur ne porte jamais seule l'information : icône ✓ ou ✕ et libellé explicite ;
- cibles tactiles d'au moins 44 × 44 px, conformément au critère 2.5.8 ;
- indicateurs de focus visibles, jamais supprimés ;
- structure sémantique, zones `aria-live` pour annoncer la correction, `role="progressbar"` sur la progression ;
- utilisable entièrement au clavier : touches **1 à 4** pour les choix multiples, **Entrée** pour valider puis continuer ;
- `prefers-reduced-motion` respecté — toutes les animations se désactivent.

Thème clair et sombre, suivant le réglage du système, avec bascule manuelle.

---

## Vie privée

L'application **n'utilise aucun stockage navigateur** : ni `localStorage`, ni cookie, ni compte, ni requête réseau. Rien ne sort de l'appareil.

Conséquence assumée : la progression vit le temps de la session. Un bouton en bas du parcours génère un code à copier, que l'on recolle à la session suivante — ou sur un autre appareil — pour la restaurer.

---

## Feuille de route

- [ ] Unité sur la programmation orientée objet (<span dir="rtl">תכנות מונחה עצמים</span>), au programme de <span dir="rtl">כיתה י"א</span>
- [ ] Unité sur la récursivité
- [ ] Bascule Python / Java sur les exemples de code
- [ ] Mode examen blanc chronométré, environ 1 min 30 par question comme aux vrais tests
- [ ] Interface en hébreu

---

## Licence

MIT — utilisation libre, y compris en classe.
