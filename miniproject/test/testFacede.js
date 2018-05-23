require("../dbSetup.js").connect();
const expect = require("chai").expect;
var userFacade = require("../facades/userFacade");
var blogFacade = require("../facades/blogFacade");
var loginFacade = require("../facades/loginFacade");

var User = require("../models/user")
var LocationBlog = require("../models/locationBlog")
var Position = require("../models/position")

beforeEach(async function() {
    // Clearing Users and LocationBlogs from the database
    await User.remove({});
    await LocationBlog.remove({});
    await Position.remove({});
    // Adding two users to the database
    var userPromises = [
        userCreate("Kurt", "Wonnegut", "Kw", "1234"),
        userCreate("Bo", "Lemmingsen", "bl", "654321")
    ];
    var users = await Promise.all(userPromises);
    // Adding posistion to our two users
    var posPromises = [
        positionCreate(12.562179565429688, 55.79143827447144, users[0]._id, true),
        positionCreate(12.487678527832031, 55.77386963550729, users[1]._id, true)
    ];
    var pos = await Promise.all(posPromises);
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
            var user = await User.findOne({ userName: "Kw" }).exec();
            // Adding job to Kurt
            await userFacade.addJobToUser(user._id, "Blogger", "Time", "Time.com");
            //Update user Kurt
            user = await User.findOne({ userName: "Kw" }).exec();

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
        it("Should find Kurt by his username 'Kw'", async function () {
            // We know that Kurts username is Kw
            var user = await userFacade.findByUsername("Kw");
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
            var author = await userFacade.findByUsername("Kw");
            let blog = await LocationBlog.findOne({ author: author }).exec();
            // Then our user likes the blog
            await blogFacade.likeLocationBlog(blog._id, user._id)
            // Then we'll update our blog again to see if it's been liked
            blog = await LocationBlog.findOne({ author: author }).exec();

            expect(String(blog.likedBy[0])).to.be.equal(String(user._id))
        })
    })
})

describe("Testing loginFacade", function(){
    describe("Login as a user", function() {
        it("Should return a friend", async function() {
            // We know our first user is Kurt
            var friends = await loginFacade("Kw", "1234",12.562179565429688, 55.79143827447144, 1000);
            expect(friends.length).to.be.equal(1);
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
function positionCreate(lon, lat, userId, keep) {
    var posDetail = { user: userId, loc: { coordinates: [lon, lat] } };
    if(keep) {
      posDetail.created = "2022-09-25T20:40:21.899Z"; 
    }
    var position = new Position(posDetail);
    return position.save();
  }