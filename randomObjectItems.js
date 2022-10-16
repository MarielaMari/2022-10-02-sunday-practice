//`To pick a random property from a JS object, use the Object.keys method, than Math.floor and Math.random methods

const animals = {
  cat: 'meow',
  dog: 'woof',
  cow: 'moo',
  sheep: 'baaah',
  bird: 'tweet',
};

const keys = Object.keys (animals);
const getKeys = keys[Math.floor (Math.random () * keys.length)];
console.log (getKeys);

//If want values, use Object.values

const values = Object.values (animals);
const getValue = values[Math.floor (Math.random () * values.length)];
console.log (getValue);
