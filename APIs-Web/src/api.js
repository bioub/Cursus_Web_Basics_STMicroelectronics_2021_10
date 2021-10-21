// Exercice 1 : Lister les todos existantes

// Créer une fonction fetchTodos dans api.js et l'exporter
// Cette fonction doit retourner le retour de fetch(), transformé en JSON
// La requête est une requête GET vers https://jsonplaceholder.typicode.com/todos

// Appeler ensuite cette fonction depuis index.js (au chargement de la page)
// et appeler createTodoRow pour chaque élément du tableau retourné

export function fetchTodos() {
  return fetch('https://jsonplaceholder.typicode.com/todos', {
    credentials: 'include',
  }).then((res) => res.json());
}

// Exercice 2 : Insérer une nouvelle todo

// Créer une fonction postTodo dans api.js et l'exporter
// Cette fonction reçoit en entrée la todo saisie dans le formulaire sans la clé id (qui sera générée par le serveur) :
// ex : {title: 'ABC', completed: false}
// Cette fonction doit retourner le retour de fetch(), transformé en JSON
// La requête est une requête POST vers https://jsonplaceholder.typicode.com/todos
// et doit obligatoire avoir l'entête Content-type: application/json
// et en body l'objet todo converti en JSON

// Au submit du formulaire appeler cette fonction postTodo
// et insérer dans le DOM le retour du serveur (l'id ne sera plus aléatoire mais généré par le serveur)
/**
 * @param {object} todo
 * @param {number} todo.id
 * @param {string} todo.title
 * @param {boolean} todo.completed
 */
export function postTodo(todo) {
  return fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(todo),
  }).then((res) => res.json());
}


// Exercice 3 : Supprimer la todo

// Créer une fonction deleteTodo dans api.js et l'exporter
// Cette fonction reçoit en entrée l'id de la todo à supprimer
// Cette fonction doit retourner le retour de fetch(), transformé en JSON
// La requête est une requête DELETE vers https://jsonplaceholder.typicode.com/todos/123 (où 123 est l'id de la todo)

// Dans index.js, au clic du bouton moins récupérer l'id stockée dans l'attribut data-todo-id de la ligne et appeler
// deleteTodo, supprimer la ligne lorsque la requete se termine
export function deleteTodo(id) {
  return fetch('https://jsonplaceholder.typicode.com/todos/' + id, {
    method: 'DELETE',
  }).then((res) => res.json());
}


