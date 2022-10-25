let people = [
  {
    name: 'John',
    age: 30,
    background: 'Germany',
  },
  {
    name: 'Tina',
    age: 25,
    background: 'USA',
  },
  {
    name: 'Mary',
    age: 28,
    background: 'Mexico',
  },
  {
    name: 'Jane',
    age: 46,
    background: 'India',
  }
];

function person (people) {
  const length = person.length;
  const randomIndex = Math.floor (Math.random () * length);
  return person[randomIndex];
}

function getHint (people) {
  console.log (` Here is the hint:
        Genre: "${getHint.age}"
        Year: ${getHint.background}`);
}

getHint ();
