// Module IIFE
// Immediately Invoked Function Expression
// (function () {
//   const button = document.querySelector('button');

import { createTodoRow } from "./todos.js";


//   console.log(document.querySelector('button')); // null
//   console.log(typeof createTodoRow); // function
// }());


console.log(typeof createTodoRow); // function
const button = document.querySelector('button');

console.log(document.querySelector('button')); // null
