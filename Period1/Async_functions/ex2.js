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

async function f() {
    let randoms = [await makeSecureRandom(48), await makeSecureRandom(40),
        await makeSecureRandom(32), await makeSecureRandom(24),
        await makeSecureRandom(16), await makeSecureRandom(8)];
    let cryptoObject = { 
        "title": "6 Secure Randoms", 
        "randoms": randoms 
    };
    console.log(cryptoObject);
}

f();