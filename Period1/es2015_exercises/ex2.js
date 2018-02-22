const evens = [2, 4, 6, 8, 10, 12, 14, 16]

/*
let odds  = evens.map(function (v) { return v + 1; }); 
let pairs = evens.map(function (v) { return { even: v, odd: v + 1 }; }); 
let nums  = evens.map(function (v, i) { return v + i; });
*/

let odds = evens.map(v => {
    return v + 1
});

console.log(odds);

/* 
For a function to print the new value, you need to return something 
*/ 