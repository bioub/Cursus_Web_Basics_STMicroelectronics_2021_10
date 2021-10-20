// Extensibilité

// Ajouter des clés/valeurs
console.log(Math.sum); // undefined
Math.sum = (a, b) => a + b;
console.log(Math.sum); // function
console.log(Math.sum(1, 2)); // 3

// Modifier des clés/valeurs
Math.sum = (a, b) => Number(a) + Number(b);
console.log(Math.sum("1", "2")); // 3

// Supprimer des clés/valeurs
delete Math.sum;
console.log(Math.sum); // undefined

// Etendre des objets que l'on a pas créé : MAUVAISE PRATIQUE
// ex: Math, document, console, lib externe
delete Math.pow;
console.log(Math.pow);

// Pour créer ses propres objets
// 2 possibilités

// 1ère possibilité : Object literal
// - pour les objets simple à créer et SANS méthodes
// - des objets avec des méthodes mais mono-instance
const coords1 = {
  x: 1,
  y: 2,
};

const coords2 = {
  x: 3,
  y: 4,
};

const MyMath = {
  // sum: (a, b) => a + b,
  sum(a, b) {
    return a + b;
  }
};

console.log(typeof coords1); // object


// POURQUOI PAS DE METHODES AVEC OBJECT LITERAL ???
const contact1 = {
  name: 'Jean',
  hello: function() {
    return `Hello my name is ${this.name}`;
  }
};

const contact2 = {
  name: 'Jean',
  hello: function() {
    return `Hello my name is ${this.name}`;
  }
};

console.log(contact1 == contact2); // est-ce le même objet en mémoire ?
console.log(contact1 === contact2); // est-ce le même objet en mémoire ?
console.log(contact1.hello == contact2.hello); // est-ce le même objet/fonction en mémoire ?
console.log(contact1.hello === contact2.hello); // est-ce le même objet/fonction en mémoire ?

// 2ème possibilité : constructor

function Coords(x, y) {
  this.x = x;
  this.y = y;
}

function Contact() {
  this._name = 'Romain';
}

Contact.prototype.hello = function() {
  return `Hello my name is ${this._name}`;
};

Contact.class = 'Contact';
Contact.getClass = function() {
  return 'Contact';
};

const coordsA = new Coords(1, 2);

console.log(typeof coordsA); // object
console.log(coordsA.x); // 1
console.log(coordsA.y); // 2

const contactA = new Contact();
const contactB = new Contact();

console.log(contactA._name); // . trouve name dans l'objet
console.log(contactA.hello()); // . trouve hello dans le prototype de Contact
console.log(contactA.hasOwnProperty('_name')); // . trouve hasOwnProperty dans le prototype de Object

console.log(contactA == contactB); // est-ce le même objet en mémoire ?
console.log(contactA === contactB); // est-ce le même objet en mémoire ?
console.log(contactA.hello == contactB.hello); // est-ce le même objet/fonction en mémoire ?
console.log(contactA.hello === contactB.hello); // est-ce le même objet/fonction en mémoire ?


// Syntaxe alternative à .
console.log(coordsA.x); // 1

// []
console['log'](coordsA['x']); // 1
// plus dynamique
const methode = 'log';
console[methode]('Hello');

// Boucler sur les clés
for (const key in contactA) {
  if (contactA.hasOwnProperty(key)) { // permet de limiter la boucle aux propriétés
    const value = contactA[key];
    console.log(key, value);
  }
}

// Boucler sur les clés (ES2017+)
for (const [key, value] of Object.entries(contactA)) {
  console.log('key', key);
  console.log('value', value);
}
