'use strict';

globalThis.name = 'Romain';

function hello(n1, n2) {
  // par défault this === globalThis (name existe si c'est une variable globale)
  // en mode strict this === undefined (donc this.name déclenche une TypeError)
  return `Hello ${n1}, ${n2}, my name is ${this.name}`;
}

const contact = {
  name: 'Toto',
};

// console.log(hello('Jean', 'Eric'));
console.log(hello.call(contact, 'Jean', 'Eric'));
console.log(hello.apply(contact, ['Jean', 'Eric']));
console.log(hello.call(contact, ...['Jean', 'Eric']));

const helloContact = hello.bind(contact);
console.log(helloContact('Jean', 'Eric'));

// Cas d'utilisation (historique), appeler une méthode de Array sur Arguments qui n'est pas un tableau (mais itérable)
// Aujourd'hui on utiliserait plutôt REST Params ou Array.from (pour convertir arguments en tableau)
function sum(a, b) {
  let result = a + b;

  for (const nb of Array.prototype.slice.call(arguments, 2)) {
    result += nb;
  }

  return result;
}


console.log(sum(1, 2, 3, 4, 5)); // 15
