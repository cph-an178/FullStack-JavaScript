var mongoose = require("mongoose");
var User = require("../models/user");
var Position = require("../models/position");

function findFriends(point, dist) {
    return null;
}

async function login(username, password, longitude, latitude, distance) {
    return {friends: [{"username": "Dummy", "latitude": 4, "longitude" : 10}] };
};

module.exports = login;
