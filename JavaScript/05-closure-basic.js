globalThis.porteGlobal = 'global';
const porteeScript = 'script';

function externe() {
  const porteeClosure = 'closure';
  function interne() {
    const porteeLocal = 'local';
    console.log(porteeLocal);
    console.log(porteeClosure);
    console.log(porteeScript);
    console.log(porteGlobal);
    // console.log(typeof externe !== 'undefined'); // true
    // console.log(typeof interne !== 'undefined'); // true
  }

  interne();
  // console.log(typeof externe !== 'undefined'); // true
  // console.log(typeof interne !== 'undefined'); // true
}

// console.log(typeof externe !== 'undefined'); // true
// console.log(typeof interne !== 'undefined'); // false
externe();

// pile d'appels
// ^
// |
// |interne
// |externe
// +------------------------------------> temps
