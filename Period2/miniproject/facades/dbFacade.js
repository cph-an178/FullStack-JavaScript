var User = require("../models/user");
var LocationBlog = require("../models/locationBlog");
var Position = require("../models/position");

var addUser = function (firstName, lastName, userName, password) {
    var userDetail = { firstName, lastName, userName, password };
    var user = new User(userDetail);
    return user.save();
}
var addJobToUser = function (userId, type, company, companyUrl) {
    var job = { type, company, companyUrl };
    User.findByIdAndUpdate(userId, { job: job }, (err) => {
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
var addLoctaionBlog = function (info, author, longitude, latitude) {
    var LocationBlogDetail = { info, pos: { longitude, latitude }, author };
    var blog = new LocationBlog(LocationBlogDetail);
    return blog.save();
}
var likeLocationBlog = function (locId, userId) {
    LocationBlog.findById(locId, (err, data) => {
        // .findByIdAndUpdate would be cool
        if (err) console.log(err);
        data.likedBy.push(userId);
        data.save();
    })
}

module.exports = {
    addUser: addUser,
    addJobToUser: addJobToUser,
    addLoctaionBlog: addLoctaionBlog,
    likeLocationBlog: likeLocationBlog
}