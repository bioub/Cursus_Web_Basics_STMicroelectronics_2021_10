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
todoToggleAllEl.addEventListener('click', () => {
  /** @type {NodeListOf<HTMLInputElement>} */
  const todoCompletedEls = todoListEl.querySelectorAll('.todo-completed');

  for (const todoCompletedEl of todoCompletedEls) {
    todoCompletedEl.checked = todoToggleAllEl.checked;
  }
});

// Exercice 5
// Retirer le addEventListener du bouton moins dans todos.js
// Ecouter ici le clic au niveau de todoListEl
// Et vérifier que la target soit le bouton delete
// si c'est le cas supprimer la ligne (plus de closure
// utiliser : parentNode/parentElement, closest)

// Exercice 6
// Idem pour pour le dblclick de la balise span

// Exercice 7
// Remplacer le dblclick de l'input pas le click de document
// Mais si on click sur l'input en cours d'éditer ne pas repasser à la balise span
// (stopPropagation ou target)
