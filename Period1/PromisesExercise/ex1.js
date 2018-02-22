require('crypto').randomBytes(SIZE, function (err, buffer) {
    let secureHex = buffer.toString('hex');
    console.log(secureHex);
});

function makeSecureRandom(SIZE) {
    let promise = new Promise(function(resolve, reject) {
        
    })
}