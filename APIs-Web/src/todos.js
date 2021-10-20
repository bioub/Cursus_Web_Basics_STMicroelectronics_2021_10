/**
 * @param {object} todo
 * @param {number} todo.id
 * @param {string} todo.title
 * @param {boolean} todo.completed
 * @returns {HTMLDivElement}
 */
export function createTodoRow(todo) {
  /*
  <div class="todo-row" data-todo-id="0.2445635353">
    <input type="checkbox" class="todo-completed">
    <span class="todo-title">ABC</span>
    <button class="todo-delete">-</button>
  </div>
   */
  const todoRowEl = document.createElement('div');
  todoRowEl.className = 'todo-row';
  todoRowEl.dataset.todoId = todo.id;

  // Exercice 1
  // Ajouter la checkbox comme dans le HTML ci-dessus
  // et la cocher selon la valeur de todo.completed
  // Doc : HTMLInputElement
  const checkboxEl = document.createElement('input');
  checkboxEl.type = 'checkbox';
  checkboxEl.className = 'todo-completed';
  checkboxEl.checked = todo.completed;
  todoRowEl.append(checkboxEl);

  const spanEl = document.createElement('span');
  spanEl.className = 'todo-title';
  spanEl.innerText = todo.title;
  todoRowEl.append(spanEl);


  // Exercice 4
  // Ecouter l'événement dblclick de spanEl
  // transformer la balise spanEl en balise <input type="text">
  // todo.title doit s'afficher dans le champs
  // et click du champs revenir à la balise span rempli comme la saisie du champ
  // Comme dans l'exemple https://todomvc.com/examples/backbone/
  spanEl.addEventListener('dblclick', () => {
    const inputEl = document.createElement('input');
    spanEl.className = 'todo-edit';
    inputEl.value = spanEl.innerText;
    spanEl.replaceWith(inputEl);
    inputEl.addEventListener('dblclick', () => {
      spanEl.innerText = inputEl.value;
      inputEl.replaceWith(spanEl);
    });
  });

  // Exercice 2
  // Ajouter le bouton moins
  // Ecouter l'événement click du button
  // et supprimer la balise <div class="todo-row"> parent
  // le addEventListener sera dans ce fichier
  const buttonDeleteEl = document.createElement('button');
  buttonDeleteEl.className = 'todo-delete';
  buttonDeleteEl.innerText = '-';
  buttonDeleteEl.addEventListener('click', () => {
    todoRowEl.remove();
  });
  todoRowEl.append(buttonDeleteEl);

  return todoRowEl;
}

export function deleteTodoRow() {

}
