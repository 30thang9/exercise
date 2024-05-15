let fruits = ['apple', 'banana', 'cherry'];
let applePresent = false;

for (let i = 0; i < fruits.length; i++) {
  if (fruits[i] === 'apple') {
    applePresent = true;
    break;
  }
}

const APPLE = 'apple';
fruits.forEach(fruit => {
  if (fruit === APPLE) {
    applePresent = true;
    return;
  }
});