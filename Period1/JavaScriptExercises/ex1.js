let names = ['Lars', 'Jan', 'Peter', 'Bo', 
            'Frederik', 'Ib', 'Kim', 'Sebastian'];

            
let short_names = names.filter(name => name.length <= 3);
console.log("1) - filter: " + short_names);

let names_upper = names.map(name => name.toUpperCase());
console.log("1) - map: " + names_upper);


