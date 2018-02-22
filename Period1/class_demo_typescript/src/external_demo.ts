import fetch from "node-fetch";
import {Request} from "node-fetch";

let URL: string = "http://jsonplaceholder.typicode.com/users/1";

fetch(URL)
    .then(response => response.json())
    .then(data => console.log(data.name));
