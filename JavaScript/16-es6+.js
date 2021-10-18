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

// const parts = "Romain Bohdanowicz".split(' ');
// const prenom = parts[0];
// const nom = parts[1];

const [prenom, nom] = "Romain Bohdanowicz".split(' ');



const coords1 = {x: 1, y: 2};

//    {x: 1     , y: 2     }
const {x: maValX, y: maValY} = coords1;
console.log(maValX); // 1


// const {x: x, y: y} = coords1;

// Combiné avec default param et shorhand property
// Très utile avec options
const {x = 0, y = 0} = coords1;
