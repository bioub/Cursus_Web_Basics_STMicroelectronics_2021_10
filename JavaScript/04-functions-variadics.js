// function sum(a, b) {
//   let result = a + b;

//   // pseudo variables (créées automatique au moment de l'appel)
//   // console.log(this);
//   // console.log(arguments);
//   for (let i=2; i<arguments.length; i++) {
//     result += arguments[i];
//   }

//   return result;
// }

// REST Params (ES2015)
// conversion syntaxique entre
// une liste de valeur : 3, 4, 5
// vers un tableau : [3, 4, 5]
function sum(a, b, ...nbs) {
  let result = a + b;

  for (const nb of nbs) {
    result += nb;
  }

  return result;
}

console.log(sum(1, 2, 3, 4, 5)); // 15
