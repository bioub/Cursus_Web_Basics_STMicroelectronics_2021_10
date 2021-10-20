// Exercice 1 : Lister les todos existantes
// Créer une fonction fetchTodos dans api.js et l'exporter
// Cette fonction doit retourner le retour de fetch(), transformé en JSON
// La requête est une requête GET vers https://jsonplaceholder.typicode.com/todos
// Appeler ensuite cette fonction depuis index.js (au chargement de la page donc)
// et appeler createTodoRow pour chaque élément du tableau retourné

// Exercice 2 : Insérer une nouvelle todo
// Créer une fonction postTodo dans api.js et l'exporter
// Cette fonction reçoit en entrée la todo saisie dans le formulaire sans la clé id (qui sera générée par le serveur) :
// ex : {title: 'ABC', completed: false}
// Cette fonction doit retourner le retour de fetch(), transformé en JSON
// La requête est une requête POST vers https://jsonplaceholder.typicode.com/todos
// et doit obligatoire avoir l'entête Content-type: application/json
// Au submit du formulaire appeler cette fonction postTodo
// et insérer dans le DOM le retour du serveur (l'id ne sera plus aléatoire mais généré par le serveur)

// Exercice 3 : Supprimer la todo
// Créer une fonction deleteTodo dans api.js et l'exporter
// Cette fonction reçoit en entrée l'id de la todo à supprimer
// Cette fonction doit retourner le retour de fetch(), transformé en JSON
// La requête est une requête DELETE vers https://jsonplaceholder.typicode.com/todos/123 (où 123 est l'id de la todo)
// Dans index.js, au clic du bouton moins récupérer l'id stockée dans l'attribut data-todo-id de la ligne et appeler
// deleteTodo, supprimer la ligne lorsque la requete se termine

// Exercice 4 : Stocker la saisie dans le localStore
// Dans index.js, écouter l'événement input du champ todoInputEl
// Récupérer la saisie et la stocker à la clé newTodo du localStorage
// Au chargement de la page afficher la valeur précédement stockée s'il y en a une
