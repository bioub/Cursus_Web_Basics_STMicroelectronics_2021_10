// PAS DE CLOSURE
for (var i = 0; i < 3; i++) {
  setTimeout(function todoIn1s() {
    console.log(i);
  }, 1000);
}

// A - ...1s... 0 ...1s... 1 ...1s... 2
// B - ...1s... 0 ...1s... 0 ...1s... 0
// C - ...1s... 0 1 2
// D - ...1s... 3 3 3 (BONNE REPONSE)


// pile d'appels
// ^
// |
// |
// |for { st - st - st }  (i=3)       todoIn1s - todoIn1s - todoIn1s
// 0------1ms--2ms--3ms---------------1s----------------------------> temps
