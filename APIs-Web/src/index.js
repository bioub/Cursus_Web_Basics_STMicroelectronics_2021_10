// Module IIFE
// Immediately Invoked Function Expression
// (function () {
//   const button = document.querySelector('button');
//   console.log(document.querySelector('button')); // null
//   console.log(typeof createTodoRow); // function
// }());

import { createTodoRow } from "./todos.js";

/** @type {HTMLFormElement} */
const todoFormEl = document.querySelector('.todo-form');

/** @type {HTMLInputElement} */
const todoToggleAllEl = document.querySelector('.todo-toggle-all');

/** @type {HTMLInputElement} */
const todoInputEl = document.querySelector('.todo-input');

/** @type {HTMLDivElement} */
const todoListEl = document.querySelector('.todo-list');

todoFormEl.addEventListener('submit', (/** @type {SubmitEvent} */ event) => {
  event.preventDefault();
  const todoRowEl = createTodoRow({
    id: Math.random(),
    title: todoInputEl.value,
    completed: false,
  });
  todoListEl.prepend(todoRowEl); // prepend PAS IE 11
});

// Exercice 3
// Ecouter le click de la checkbox todoToggleAllEl
// Et cocher toutes les checkbox présentes dans
// todoListEl en fonction de la valeur de todoToggleAllEl
