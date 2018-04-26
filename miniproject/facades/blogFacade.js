var User = require("../models/user");
var LocationBlog = require("../models/locationBlog");

function addLoctaionBlog(info, author, longitude, latitude) {
    var LocationBlogDetail = { info, pos: { longitude, latitude }, author };
    var blog = new LocationBlog(LocationBlogDetail);
    return blog.save();
};
async function likeLocationBlog(locId, userId) {
    try{
        const loc = await LocationBlog.findById(locId).exec();
        loc.likedBy.push(userId);
        return loc.save();
    }
    catch(error){
        console.log("Ups")
    };
};
function findLocationByInfo(info) {
    return LocationBlog.findOne({info: info}).exec();
}
module.exports = {
    addLoctaionBlog: addLoctaionBlog,
    likeLocationBlog: likeLocationBlog,
    findLocationByInfo: findLocationByInfo
}