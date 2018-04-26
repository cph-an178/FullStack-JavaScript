var User = require("../models/user");
var LocationBlog = require("../models/locationBlog");
var Position = require("../models/position");

function findAllUsers() {
    return User.find({}).exec();
}

function addUser(firstName, lastName, userName, password) {
    var userDetail = { firstName, lastName, userName, password };
    var user = new User(userDetail);
    return user.save();
}

async function addJobToUser(userId, type, company, companyUrl) {
    var job = { type, company, companyUrl };
    try {
        const user = await User.findById(userId).exec();
        user.job.push(job);
        return user.save();
    }
    catch(error) {
        console.log("Ups")
    };
}

function findByUsername(username) {
    return User.findOne({userName: username}).exec();
}

module.exports = {
    findAllUsers: findAllUsers,
    addUser: addUser,
    addJobToUser: addJobToUser,
    findByUsername: findByUsername,
}