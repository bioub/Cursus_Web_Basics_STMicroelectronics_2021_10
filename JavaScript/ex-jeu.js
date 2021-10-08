// importe l'API readline de Node.js
const readline = require('readline');

// configure readline pour lire une ligne sur le clavier
// et afficher une question dans le terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// la question s'affiche en synchrone (tout de suite)
// on aura la réponse que via le callback async (plus tard)
function jouer() {
  rl.question('Quel est le nombre entier ? ', (answer) => {
    console.log('Vous avez saisi : ' + answer);

    // pour rejouer
    jouer();
    // pour arrêter le programme
    // rl.close();
  });
}
jouer();

// pile d'appels
// ^
// |                            question
// |question                    jouer
// |jouer                       =>
// +---------------------------------------------------------> temps
//
