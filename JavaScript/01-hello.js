'use strict';

// déclaration de variable (globale) -> A NE JAMAIS UTILISER (erreur en mode strict)
// maVar = 'maValeur';

// déclaration de variable (portée locale à une fonction) -> A NE JAMAIS UTILISER
// var prenom = 'Romain';

// déclaration de variable (portée locale à un bloc)
let prenom = 'Romain'; // on peut réaffecter une nouvelle valeur (prenom = 'Toto')
const nom = 'Bohdanowicz'; // à privilégier

// avec const l'objet reste modifiable (la référence affectée à la variable non)
const names = ['Jean', 'Paul', 'Eric', 123];
names.push('Jacques');

/**
 * @param {string} name
 */
function hello(name) {
  return `Hello ${name} !`; // template literal
}

for (const n of names) {
  console.log(hello(n));
}
