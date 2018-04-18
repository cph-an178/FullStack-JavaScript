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
function addJobToUser(userId, type, company, companyUrl) {
    var job = { type, company, companyUrl };
    User.findOneAndUpdate(userId, { job: job }, (err) => {
        if (err) console.log(err)
    });
    /* In case you need to add more than one job
    User.findById(userId, (err, data) => {
        if (err) console.log(err);
        data.job.push(job);
        data.save();
    });
    */
}

module.exports = {
    findAllUsers: findAllUsers,
    addUser: addUser,
    addJobToUser: addJobToUser,
}