# Exercices

### CSS Grid

### Layout

Le fichier `ex-css-grid-media-queries/index.html` reprend la correction de l'exercice sur les Flexbox mais a supprimé la balise qui permettait de disposer le menu (`<aside>`) et le contenu de la page (`<main>`) sur un axe horizontal. La balise `<div class="container">` contient donc directement les 3 balises `<header>`, `<aside>` et `<main>` (j'ai également supprimé toutes les largeurs et hauteurs sur ces 4 balises).

Dans `app.css` créer une grille au niveau de la balise `<div class="container">`.

On souhaite que la grille aient les contraintes suivantes :

- la hauteur totale de la grille sera au moins égale à la hauteur du viewport (mais peut faire plus)
- la largeur totale de la grille sera égale à `1000px`
- la grille définira 2 lignes et 2 colonnes
- la première colonne fera `200px` de large et la seconde occupera le reste de la grille
- la première ligne aura comme hauteur `100px` la seconde ligne occupera le reste de la grille

Placer ensuite la balise header sur les 2 colonnes de la ligne 1, la balise aside sur la première colonne de la ligne 2, et main sur la 2ème colonne de la ligne 2.

### Galerie

Utiliser ensuite la grille pour mettre en forme la galerie d'images

- il faudra 3 images par ligne (qui se répartissent uniformément l'espace restant)
- le nombre de ligne sera automatique (`grid-auto-rows`) et de hauteur `120px`
- on veut un espace de `10px` entre chaque élément de la grille

### Media Queries

Ajouter les media queries avec les contraintes suivantes :

- si la largeur du viewport est inférieure à `1000px` tout le layout doit basculer en 3 lignes et 1 colonnes, on affichera dans l'ordre : le header, le main puis le aside (le menu sera donc en bas) (le container bascule en `width: 100%`)

- si la largeur du viewport est inférieure à `600px` la galerie n'affichera que 2 images par ligne

- si la largeur du viewport est inférieure à `400px` la galerie n'affichera qu'une seule image par ligne
