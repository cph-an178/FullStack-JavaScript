var User = require("../models/user");
var LocationBlog = require("../models/locationBlog");

function addLoctaionBlog(info, author, longitude, latitude) {
    var LocationBlogDetail = { info, pos: { longitude, latitude }, author };
    var blog = new LocationBlog(LocationBlogDetail);
    return blog.save();
};
function likeLocationBlog(locId, userId) {
    LocationBlog.findById(locId, (err, data) => {
        // .findByIdAndUpdate would be cool
        if (err) console.log(err);
        data.likedBy.push(userId);
        data.save();
    })
};

module.exports = {
    addLoctaionBlog: addLoctaionBlog,
    likeLocationBlog: likeLocationBlog
}