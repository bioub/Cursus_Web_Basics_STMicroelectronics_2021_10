// AVEC UNE CLOSURE
for (let i = 0; i < 3; i++) {
  // (i dans la portée de closure)
  setTimeout(function todoIn1s() {
    console.log(i);
  }, 1000);
}

// A - ...1s... 0 ...1s... 1 ...1s... 2
// B - ...1s... 0 ...1s... 0 ...1s... 0
// C - ...1s... 0 1 2 (BONNE REPONSE)
// D - ...1s... 3 3 3


// pile d'appels
// ^
// |
// |
// |for { st - st - st } (i=undefined) todoIn1s - todoIn1s - todoIn1s
// 0------1ms--2ms--3ms----------------1s----------------------------> temps
