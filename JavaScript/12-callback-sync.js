// Algorithme
// Transformer un tableau de prénom
// en un tableau de prénom en majuscule
// mais que pour les prénom de 4 lettres

const prenoms = ['Romain', 'Jean', 'Paul', 'Eric'];

// Style de programmation : Paradigme
// Programmation impérative (if, for...)
const newPrenoms1 = [];

// Données (Model)
for (let i = 0; i < prenoms.length; i++) {
  const prenom = prenoms[i];
  if (prenom.length === 4) {
    const prenom4Lettre = prenom;
    newPrenoms1.push(prenom4Lettre.toUpperCase());
  }
}

// UI (View)
for (let i = 0; i < newPrenoms1.length; i++) {
  const prenom4LettreUpper = newPrenoms1[i];
  console.log(prenom4LettreUpper);
}

// Programmation fonctionnelle (fonctions)
// const newPrenoms2 = prenoms.filter(function(prenom, i) { return prenom.length === 4; });

// Données (Model)
const newPrenoms2 = prenoms
  .filter((prenom, i) => prenom.length === 4)
  .map((prenom4Lettre, i) => prenom4Lettre.toUpperCase());

// UI (View)
newPrenoms2.forEach((prenom4LettreUpper, i) => console.log(prenom4LettreUpper));

console.log('E');
// pile d'appels
// ^
// |                    up   up   up   lg   lg   lg
// |=> - => - => - =>   => - => - =>   => - => - =>
// |filter            - map          - forEach      - lg
// 0-------------------------------------------------------> temps
//                                     JEAN PAUL ERIC E
