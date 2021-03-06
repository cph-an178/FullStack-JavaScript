import _ from "lodash";
import './style.css';
import 'bootstrap/dist/css/bootstrap.css'

function Person(fn, ln, s) {
    this.firstName = fn;
    this.lastName = ln;
    this.favoriteSport = s;
}

const persons = [
    new Person("Kurt", "Wonnegut", "Socker"),
    new Person("Jan", "Peterson", "Hockey"),
    new Person("Jane", "Peterson", "Skating"),
    new Person("John", "Hansen", "Socker"),
];

const cities = [
    { city: "Lyngby", zipCode: "2800" },
    { city: "Hvidovre", zipCode: "2650" },
    { city: "Glostrup", zipCode: "2600" },
];

const hobbies = [
    { name: "football", players: 22 },
    { name: "chess", players: 2 },
    { name: "boxing", players: 2 },
];

function makeTable(data) {
    const headers = _.keys(data[0]);
    const headerHTML = headers.map(h => `<th>${_.startCase(h)}</th>`).join(" ");
    const bodyHTML = data.map((p) => {
        return "<tr>" + headers.map(property => `<td>${p[property]}</td>`).join("") + "</tr>";
    }).join("");
    return `<table class="table">
    <thead><tr>${headerHTML}</tr></thead>
    <tbody>${bodyHTML}</tbody>
    </table>`
}

// You must implement the makeTable(..) function, used below:
const table = makeTable(cities);
document.getElementById("mytable").innerHTML = table;
