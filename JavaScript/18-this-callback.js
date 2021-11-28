// Ici this === Timeout de Node.js
// (ou Window dans le navigateur)
// Et this !== romain
// class Contact {
//   constructor() {
//     this._name = 'Romain';
//   }
//   hello() {
//     console.log(`My name is ${this._name}`);
//   }
//   helloAsync() {
//     setTimeout(function() {
//       console.log(this);
//       console.log(`My name is ${this._name}`);
//     }, 900);
//   }
// }

// const romain = new Contact();
// romain.helloAsync();

// ES3
// récupérer this via la portée de closure
// class Contact {
//   constructor() {
//     this._name = 'Romain';
//   }
//   hello() {
//     console.log(`My name is ${this._name}`);
//   }
//   helloAsync() {
//     const that = this;
//     setTimeout(function() {
//       console.log(that);
//       console.log(`My name is ${that._name}`);
//     }, 900);
//   }
// }

// const romain = new Contact();
// romain.helloAsync();

// ES5
// Function bind
// class Contact {
//   constructor() {
//     this._name = 'Romain';
//   }
//   hello() {
//     console.log(`My name is ${this._name}`);
//   }
//   helloAsync() {
//     setTimeout(function() {
//       console.log(this);
//       console.log(`My name is ${this._name}`);
//     }.bind(this), 900);
//   }
// }

// const romain = new Contact();
// romain.helloAsync();

// ES6
// Arrow function
// Dans une fonction fléchée les pseudo-variables (this, arguments, super, new.target)
// ne sont pas créées (au moment de l'appel)
class Contact {
  _name = 'Romain';
  constructor() {
    // this._name = 'Romain';
  }
  hello() {
    console.log(`My name is ${this._name}`);
  }
  helloAsync() {
    setTimeout(() => {
      console.log(this);
      console.log(`My name is ${this._name}`);
    }, 900);
  }
}

const romain = new Contact();
romain.helloAsync();

// Pour résumer les bonnes pratiques
// - activer le mode strict ou les modules ECMAScript (éviter les surprise avec this, ou les variables global
// quand on oublie let ou const)
// - ne plus utiliser var (const en priorité et let sinon)
// - pour les fonctions :
//    - si callback toujours utiliser arrow function (plus court et pas de pb avec this)
//    - si méthode utiliser la syntaxe nomDeMethode() {} (dans class ou object literal)
//    - si fonction constructeur, utiliser class
//    - si fonction classique, utiliser function nomDeFonction() {}, éventuellement const nomDeFonction = () => {}
