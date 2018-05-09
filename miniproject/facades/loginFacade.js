var mongoose = require("mongoose");
var User = require("../models/user");
var Position = require("../models/position");

async function login(username, password, longitude, latitude, distance) {
    try {
        const user = await User.findOne({ userName: username }).exec();
        if (user == null || user.password != "jdfklsajfldkasj" + password) {
            throw {msg:"Wrong username or password", status:403}
        }
        const loc = {
            'type': 'Point',
            'coordinates': [longitude, latitude]
        }
        const pos = await Position.findOneAndUpdate({ user: user._id }, { loc: loc }, { upsert: true }).exec();

        const friends = await findFriends(loc, distance * 1000, user._id)
        return friends;
    }
    catch (err) {
        throw err;
    }
}
async function findFriends(point, dist, id) {
    return await Position.find(
        {
            user: {
                $ne: id
            },
            loc:
                {
                    $near: {
                        $geometry: point,
                        $maxDistance: dist
                    }
                }
        }
    );
}

//Testnod
module.exports = login;
