function externe(val) {
  function interne() {
    console.log(val);
  }
  return interne;
}

const hello = externe('Hello');
hello();
hello();
hello();

const bye = externe('Bye');
bye();
hello();
bye();
hello();


// pile d'appels
// ^
// |
// |
// |externe - interne/maFonction
// +------------------------------------> temps
