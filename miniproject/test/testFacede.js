require("../dbSetup.js");
const expect = require("chai").expect;
var userFacade = require("../facades/userFacade")
var blogFacade = require("../facades/blogFacade")

var User = require("../models/user")
var LocationBlog = require("../models/locationBlog")

beforeEach(async function() {
    // Clearing Users and LocationBlogs from the database
    await User.remove({});
    await LocationBlog.remove({});
    // Adding two users to the database
    var userPromises = [
        userCreate("Kurt", "Wonnegut", "kw", "passw0rd"),
        userCreate("Bo", "Lemmingsen", "bl", "654321")
    ];
    var users = await Promise.all(userPromises);
    // Adding a LocationBlog to the database
    var blogPromise = LocationBlogCreate("A very cool place", users[0]._id, 12, 52);
    var blog = await Promise.race([blogPromise]);
});

describe("Testing userFacade", function () {
    describe("Add a new Users", function () {
        it("Should add Ib Jensen", async function () {
            var userPromise = userFacade.addUser("Ib", "Jensen", "ij", "kodeord");
            var user = await Promise.race([userPromise]);
            // Getting all users
            var getUsers = await User.find({}).exec();
            // There is two default useres so we know our new one is the 
            // third in the array
            expect(getUsers[2].firstName).to.be.equal("Ib");
        });
    });
    describe("Add job to user", function () {
        it("Should add Blogger at Time to Kurts job", async function () {
            // Get user Kurt
            var user = await User.findOne({ userName: "kw" }).exec();
            // Adding job to Kurt
            await userFacade.addJobToUser(user._id, "Blogger", "Time", "Time.com");
            //Update user Kurt
            user = await User.findOne({ userName: "kw" }).exec();

            expect(user.job[0].type).to.be.equal("Blogger");
        })
    })
    describe("Find all users", function () {
        it("Should find all useres", async function () {
            // We know that there is two default users
            var getAllUsers = await userFacade.findAllUsers();
            expect(getAllUsers.length).to.be.equal(2);
        })
    })
    describe("Find user by username", function () {
        it("Should find Kurt by his username 'kw'", async function () {
            // We know that Kurts username is kw
            var user = await userFacade.findByUsername("kw");
            expect(user.firstName).to.be.equal("Kurt")
        })
    })
});

describe("Testing BlogFacade", function () {
    describe("Add location Blog", function () {
        it("Should add a new LocationBlog", async function () {
            // Getting a user whom create a locationBlog
            var user = await userFacade.findByUsername("bl");
            var blogPromise = blogFacade.addLoctaionBlog("This is a sweet place", user, 13, 54);
            var blog = await Promise.race([blogPromise]);
            var getAllLoctaionBlogs = await LocationBlog.find({}).exec();
            // We know that there already is one default location, so it should be two now
            expect(getAllLoctaionBlogs.length).to.be.equal(2)
        })
    })
    describe("Like LocationBlog", function () {
        it("Should as a user like a location blog", async function () {
            // first we find a user to like a location
            var user = await userFacade.findByUsername("bl");
            // Then we'll find a author so we can find his locationBlog
            var author = await userFacade.findByUsername("kw");
            let blog = await LocationBlog.findOne({ author: author }).exec();
            // Then our user likes the blog
            await blogFacade.likeLocationBlog(blog._id, user._id)
            // Then we'll update our blog again to see if it's been liked
            blog = await LocationBlog.findOne({ author: author }).exec();

            expect(String(blog.likedBy[0])).to.be.equal(String(user._id))
        })
    })
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