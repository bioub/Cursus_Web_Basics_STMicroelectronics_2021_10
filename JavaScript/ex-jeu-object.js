const Random = {
  getRandom: function () {
    return Math.random();
  },
  getRandomArbitrary: function (min, max) {
    return Math.random() * (max - min) + min;
  },
  getRandomInt: function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  },
  getRandomIntInclusive: function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  }
}

// importe l'API readline de Node.js
const readline = require('readline');

function Jeu(options = {}) {
  const min = options.min || 0;
  const max = options.max !== undefined ? options.max : 100;

  this.rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  this.entierAlea = Random.getRandomInt(min, max);
  this.essais = [];
}

Jeu.prototype.jouer = function() {
  if (this.essais.length) {
    console.log('Vous avez déjà joué : ' + this.essais.join(' - '))
  }

  this.rl.question('Quel est le nombre entier ? ', (answer) => {
    console.log('Vous avez saisi : ' + answer);

    const entierSaisi = Number.parseInt(answer, 10);

    if (Number.isNaN(entierSaisi)) {
      console.log('Erreur : il faut saisir un entier');
      return this.jouer();
    }

    this.essais.push(entierSaisi);

    if (entierSaisi < this.entierAlea) {
      console.log('Trop petit');
      this.jouer();
    } else if (entierSaisi > this.entierAlea) {
      console.log('Trop grand');
      this.jouer();
    } else {
      console.log('Gagné');
      this.rl.close();
    }
  });
};

const jeu = new Jeu();
jeu.jouer();

// pile d'appels
// ^
// |                          question
// |question                  jouer
// |jouer     ..⟳..           =>       ..⟳..
// +---------------------------------------------------------> temps
//
