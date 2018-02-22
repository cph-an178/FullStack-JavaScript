const URL = "https://swapi.co/api/people/";
 
function fetchPerson(url){
  //Complete this function
}
async function printNames() {
  console.log("Before");
  const person1 = await fetchPerson(URL+1);
  const person2 = await fetchPerson(URL+2);
  console.log(person1.name);
  console.log(person2.name)
  console.log("After all"); 
}
