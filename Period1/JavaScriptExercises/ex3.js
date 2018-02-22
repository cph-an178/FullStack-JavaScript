let names = ['Lars', 'Jan', 'Peter', 'Bo', 
            'Frederik', 'Ib', 'Kim', 'Sebastian'];

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