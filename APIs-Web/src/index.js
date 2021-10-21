// Module IIFE
// Immediately Invoked Function Expression
// (function () {
//   const button = document.querySelector('button');
//   console.log(document.querySelector('button')); // null
//   console.log(typeof createTodoRow); // function
// }());

import { deleteTodo, fetchTodos, postTodo } from "./api.js";
import { createTodoEdit, createTodoRow, createTodoTitle } from "./todos.js";

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

  const todo = {
    title: todoInputEl.value,
    completed: false,
  };

  postTodo(todo).then((todoFromServer) => {
    const todoRowEl = createTodoRow(todoFromServer);
    todoListEl.prepend(todoRowEl); // prepend PAS IE 11
  });
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
todoListEl.addEventListener('click', (event) => {
  /** @type {HTMLElement} */
  const target = event.target;
  if (target.classList.contains('todo-delete')) {
    const todoRowEl = target.closest('.todo-row');
    deleteTodo(todoRowEl.dataset.todoId).then(() => {
      todoRowEl.remove();
    });
  }
});

// Exercice 6
// Idem pour pour le dblclick de la balise span
todoListEl.addEventListener('dblclick', (event) => {
  /** @type {HTMLElement} */
  const target = event.target;
  if (target.classList.contains('todo-title')) {
    const inputEl = createTodoEdit(target.innerText);
    target.replaceWith(inputEl);
  }
});

// Exercice 7
// Remplacer le dblclick de l'input pas le click de document
// Mais si on click sur l'input en cours d'éditer ne pas repasser à la balise span
// (stopPropagation ou target)
document.addEventListener('click', (event) => {
  /** @type {HTMLElement} */
  const target = event.target;
  if (!target.classList.contains('todo-edit')) {
    /** @type {HTMLInputElement} */
    const todoEditEl = todoListEl.querySelector('.todo-edit');
    if (todoEditEl) {
      const spanEl = createTodoTitle(todoEditEl.value);
      todoEditEl.replaceWith(spanEl);
    }
  }
});

fetchTodos().then((todos) => {
  for (const todo of todos) {
    const todoRowEl = createTodoRow(todo);
    todoListEl.prepend(todoRowEl);
  }
});

// Exercice 4 : Stocker la saisie dans le localStorage
// Dans index.js, écouter l'événement input du champ todoInputEl
// Récupérer la saisie et la stocker à la clé newTodo du localStorage
// Au chargement de la page afficher la valeur précédement stockée s'il y en a une
todoInputEl.addEventListener('input', (event) => {
  localStorage.setItem('newTodo', event.target.value);
});

if (localStorage.getItem('newTodo')) {
  todoInputEl.value = localStorage.getItem('newTodo');
}
