// Simulate counter clicks with nested scope.
let count = 0;
function increment() {
  function updateCount() { count++; }
  updateCount();
  console.log(`Count: ${count}`);
}
function decrement() {
  function updateCount() { count--; }
  updateCount();
  console.log(`Count: ${count}`);
}
increment();
increment();
decrement();
