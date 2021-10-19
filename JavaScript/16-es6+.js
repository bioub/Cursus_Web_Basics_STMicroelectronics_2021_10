// REST Params (ES2015)
// conversion syntaxique entre
// d'une liste de valeur : 3, 4, 5
// vers un tableau : [3, 4, 5]
function sum(a, b, ...nbs) {
  let result = a + b;

  for (const nb of nbs) {
    result += nb;
  }

  return result;
}

console.log(sum(1, 2, 3, 4, 5)); // 15

// SPREAD Operator (ES2015)
// conversion syntaxique entre
// d'un tableau : [3, 4, 5]
// vers une liste de valeur : 3, 4, 5
function multiply(a, b, c) {
  return a * b * c;
}

const nbs = [3, 4, 5];
console.log(multiply(...nbs)); // [3, 4, 5] -> 3, 4, 5

//                 [ nbs[0], nbs[1], nbs[2] ]
const cloneArray = [...nbs];

//    [3    , 4     , 5   , undefined]
const [trois, quatre, cinq, six = 6] = nbs;

//    [3    , 4, 5        ]
const [three, ...othersNbs] = nbs;
console.log(three); // 3
console.log(othersNbs); // [4, 5]

// const tmp = "Romain Bohdanowicz".split(' ');
// const prenom = tmp[0];
// const nom = tmp[1];

const [prenom, nom] = "Romain Bohdanowicz".split(' ');



const coords1 = {x: 1, y: 2};

//    {x: 1     , y: 2     }
const {x: maValX, y: maValY} = coords1;
console.log(maValX); // 1


// const {x: x, y: y} = coords1;
// const {x, y} = coords1;

// Combiné avec default param et shorhand property
// Très utile avec options
const {x = 0, y = 0, z = 0} = coords1;


// SPREAD Object (ES2018)
const cloneCoords = {...coords1};





// let nb = 0;
// nb = nb + 1;
// nb += 1;

// Logical Assignement Operator (ES2021)
// let test = true
// test = test && true
// test &&= true;


// class Contact {
//   constructor() {
//     this._name = 'Romain';
//   }
//   hello() {
//     console.log(`My name is ${this._name}`);
//   }
// }

class Contact {
  #name = 'Romain';

  hello() {
    console.log(`My name is ${this.#name}`);
  }
}

const romain = new Contact();
romain.hello()
