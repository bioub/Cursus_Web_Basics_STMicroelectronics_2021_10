// function sum(a, b, c) {
//   if (c === undefined) {
//     c = 0;
//   }
//   return a + b + c;
// }

// function sum(a, b, c) {
//   c = c || 0; // (valeur par défaut doit être fasly)
//   return a + b + c;
// }

// function sum(a, b, c) {
//   c = c ?? 0; // (valeur par défaut doit être nullish (null ou undefined))
//   return a + b + c;
// }

function sum(a, b, c = 0) {
  return a + b + c;
}

console.log(sum(1, 2)); // NaN
