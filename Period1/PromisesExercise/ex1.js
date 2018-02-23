const crypto = require('crypto');

function makeSecureRandom(size) {
    return new Promise((resolve, reject) => {
        crypto.randomBytes(size, function (err, buffer) {
            if (err) {
                reject(err);
            }
            else {
                resolve({ "length": size, "random": buffer.toString('hex') })
            };
        });
    });
};

Promise.all([makeSecureRandom(48), makeSecureRandom(40),
    makeSecureRandom(32), makeSecureRandom(24),
    makeSecureRandom(16), makeSecureRandom(8)])
        .then(resolve => {
            let secrureRandoms = {
                "title": "6 Secure Randoms",
                "randoms": resolve
            };
            // Send this object when you call rest api
            console.log(secrureRandoms);
        })
        .catch(reject => {
            console.log(reject)
        });