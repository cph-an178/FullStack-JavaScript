let names = ['Lars', 'Jan', 'Peter', 'Bo', 
            'Frederik', 'Ib', 'Kim', 'Sebastian'];

// 1
let short_names = names.filter(name => name.length <= 3);
console.log("1) - filter: " + short_names);

let names_upper = names.map(name => name.toUpperCase());
console.log("1) - map: " + names_upper);

// 2
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

// 3
Array.prototype.my_filter = function(callback) {
    let new_array = [];
    this.forEach(element => {
        if (callback(element)) {
            new_array.push(element);
        };
    });
    return new_array; 
};
let proto_my_filter = names.my_filter(name => name.length <= 3);
console.log(proto_my_filter);

Array.prototype.my_map = function(callback) {
    let new_array = [];
    this.forEach(element => {
        new_array.push(callback(element))
    });
    return new_array;
};
let proto_my_map = names.my_map(name => name.toUpperCase());
console.log(proto_my_map);

// 4
// TODO