var mongoose = require("mongoose");
var User = require("../models/user");
var Position = require("../models/position");

async function login(username, password, longitude, latitude, distance) {
    //return {friends: [{"username": "Dummy", "latitude": 4, "longitude" : 10}] }; 
    var user = await User.findOne({userName:username}).exec();
    if(user == null || user.password != password) {
        throw {msg: "Wrong username or password", status: 403};
    }
    const loc = {
        type: "Point",
        coordinates: [longitude, latitude],
    }
    const pos = await Position.findOneAndUpdate({user:user._id},
        {user:user_id, created: Date.now(), loc: loc}, {upsert: true}).exec();

    let friends = await findFriends(loc, distance*1000);
    console.log(friends);
    return friends;
};

async function findFriends(point, dist) {
    return Position.find(
        {
            loc:
            { $near: {
                $geometry: point,
                $maxDistance: dist
            }}
        }
    );
    return null;
}

module.exports = login;
