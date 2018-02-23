const fetch = require('node-fetch');
const URL = "https://swapi.co/api/people/";

function fetchPerson(url) {
  return fetch(url)
      .then(res => res.json())
      .then(data => data)
};

async function printNames() {
  console.log("Before");
  const person1 = await fetchPerson(URL+1);
  const person2 = await fetchPerson(URL+2);
  console.log(person1.name);
  console.log(person2.name)
  console.log("After all"); 
}

printNames()

