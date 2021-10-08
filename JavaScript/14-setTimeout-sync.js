// function setTimeoutSync(callback, delayMs) {
//   // BLOQUE LE THREAD (STUPIDE)
//   const debut = Date.now();
//   while (debut + delayMs > Date.now());

//   callback();
// }

// setTimeoutSync(() => console.log('A'), 500);
// setTimeoutSync(() => console.log('B'), 0);
// setTimeoutSync(() => console.log('C'), 1000);
// setTimeoutSync(() => console.log('D'), 500);

// console.log('E');

// A B C D E
function pause(delayMs) {
  // BLOQUE LE THREAD (STUPIDE)
  const debut = Date.now();
  while (debut + delayMs > Date.now());
}

pause(500);
console.log('A')
pause(0);
console.log('B')
pause(1000);
console.log('C')
pause(500);
console.log('D')

console.log('E');
