for (let i = 0; i < a.length; i++) { 
    let x = a[i]
} 
for (let i = 0; i < b.length; i++) { 
    let y = b[i] 
} 
let callbacks = [] 
for (let i = 0; i <= 2; i++) { 
    callbacks[i] = function () { 
        return i * 2 
    } 
} 
callbacks[0]() === 0;
callbacks[1]() === 2; 
callbacks[2]() === 4;

/* 
If you change a let value in a block it only changes the value in that block
If you change a var value it changes it for the whole document
*/ 