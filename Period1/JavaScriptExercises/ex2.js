let names = ['Lars', 'Jan', 'Peter', 'Bo', 
            'Frederik', 'Ib', 'Kim', 'Sebastian'];

            
function my_filter(array, callback) {
    let new_array = [];
    array.forEach(element => {
        if (callback(element)) {
            new_array.push(element);
        };
    });

    return new_array; 
};

let my_filter_names = my_filter(names, name => name.length <= 3);
console.log("2) - filter: " + my_filter_names);


function my_map(array, callback) {
    let new_array = [];
    array.forEach(element => {
        new_array.push(callback(element))
    });
    return new_array;
}

let my_map_names = my_map(names, name => name.toUpperCase())
console.log("2) - map: " + my_map_names);
