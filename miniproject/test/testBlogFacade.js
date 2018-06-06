const expect = require("chai").expect;
const dbSetup = require("../dbSetup.js");

var blogFacade = require("../facades/blogFacade");
var User = require("../models/user")
var LocationBlog = require("../models/locationBlog")

let connection = null;
describe("Testing LocationBlogFacade", function() {

    before(async function() {
        this.timeout(require("../dbSettings").MOCHA_TEST_TIMEOUT);
        dbSetup.setDbUri(require("../dbSettings").TEST_DB_URI);
        connection = await dbSetup.connect();
    })

    beforeEach(async function () {
        // Clearing Users and LocationBlogs from the database
        await User.remove({});
        await LocationBlog.remove({});
        // Adding two users to the database
        var userPromises = [
            userCreate("Kurt", "Wonnegut", "Kw", "1234"),
            userCreate("Bo", "Lemmingsen", "bl", "654321")
        ];
        var users = await Promise.all(userPromises);
        // Adding a LocationBlog to the database
        var blogPromise = LocationBlogCreate("A very cool place", users[0]._id, 12, 52);
        var blog = await Promise.race([blogPromise]);
    });

    it("Add location Blog", async function () {
        // Getting a user whom create a locationBlog
        var user = await User.findOne({userName: 'bl'}).exec();
        var blogPromise = blogFacade.addLoctaionBlog("This is a sweet place", user, 13, 54);
        var blog = await Promise.race([blogPromise]);
        var getAllLoctaionBlogs = await LocationBlog.find({}).exec();
        // We know that there already is one default location, so it should be two now
        expect(getAllLoctaionBlogs.length).to.be.equal(2)
    });
    it("Like LocationBlog", async function () {
        // first we find a user to like a location
        var user = await User.findOne({userName: "bl"}).exec();
        // Then we'll find a author so we can find his locationBlog
        var author = await User.findOne({userName: "Kw"}).exec();
        let blog = await LocationBlog.findOne({ author: author }).exec();
        // Then our user likes the blog
        await blogFacade.likeLocationBlog(blog._id, user._id)
        // Then we'll update our blog again to see if it's been liked
        blog = await LocationBlog.findOne({ author: author }).exec();

        expect(String(blog.likedBy[0])).to.be.equal(String(user._id))
    });
})


// Fucntion for user and LocationBlog Create for the beforeEact
function userCreate(firstName, lastName, userName, password) {
    var userDetail = { firstName, lastName, userName, password };
    var user = new User(userDetail);
    return user.save();
}
function LocationBlogCreate(info, author, longitude, latitude) {
    var LocationBlogDetail = { info, pos: { longitude, latitude }, author };
    var blog = new LocationBlog(LocationBlogDetail);
    return blog.save()
}