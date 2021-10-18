function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// importe l'API readline de Node.js
const readline = require('readline');

// configure readline pour lire une ligne sur le clavier
// et afficher une question dans le terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const entierAlea = getRandomInt(100);
const essais = [];

// la question s'affiche en synchrone (tout de suite)
// on aura la réponse que via le callback async (plus tard)
function jouer() {
  if (essais.length) {
    console.log('Vous avez déjà joué : ' + essais.join(' - '))
  }

  rl.question('Quel est le nombre entier ? ', (answer) => {
    console.log('Vous avez saisi : ' + answer);

    const entierSaisi = Number.parseInt(answer, 10);

    if (Number.isNaN(entierSaisi)) {
      console.log('Erreur : il faut saisir un entier');
      return jouer();
    }

    essais.push(entierSaisi);

    if (entierSaisi < entierAlea) {
      console.log('Trop petit');
      jouer();
    } else if (entierSaisi > entierAlea) {
      console.log('Trop grand');
      jouer();
    } else {
      console.log('Gagné');
      rl.close();
    }
  });
}
jouer();

// pile d'appels
// ^
// |                          question
// |question                  jouer
// |jouer     ..⟳..           =>       ..⟳..
// +---------------------------------------------------------> temps
//
