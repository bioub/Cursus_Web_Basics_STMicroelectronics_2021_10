setTimeout(() => console.log('A'), 500);
setTimeout(() => console.log('B'), 0);
setTimeout(() => console.log('C'), 1000);
setTimeout(() => console.log('D'), 500);

console.log('E');

// 1 - A B C D E
// 2 - B E A D C
// 3 - E B A D C (BONNE REPONSE)
// 4 - B D A C E

// pile d'appels
// ^
// |
// |                              lg        lg    lg         lg
// |st - st - st - st - lg ..⟳.. cbB ..⟳.. cbA - cbD ..⟳.. cbC
// +-----O------------------------4---------500---501--------1000-----------> temps
//                      E         B         A     D          C

// file d'attente de timers (Oms) : cbB - () => console.log('B')
// file d'attente de timers (4ms) :
// file d'attente de timers (499ms) : cbA - cbD
// file d'attente de timers (500ms) : cbD
// file d'attente de timers (501ms) :
// file d'attente de timers (999ms) : cbC
// file d'attente de timers (1000ms) :

