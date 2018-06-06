const expect = require("chai").expect;
const dbSetup = require("../dbSetup.js");

var loginFacade = require("../facades/loginFacade");
var User = require("../models/user")
var Position = require("../models/position")

let connection = null;
describe("Login as a user", function () {

    before(async function() {
        this.timeout(require("../dbSettings").MOCHA_TEST_TIMEOUT);
        dbSetup.setDbUri(require("../dbSettings").TEST_DB_URI);
        connection = await dbSetup.connect();

        // Clearing Users and LocationBlogs from the database
        await User.remove({});
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
    });

    it("Should return friends", async function () {
        // We know our first user is Kurt
        var friends = await loginFacade("Kw", "1234", 12.562179565429688, 55.79143827447144, 1000);
        expect(friends.length).to.be.equal(1);
    })
})

// Fucntion for user and LocationBlog Create for the beforeEact
function userCreate(firstName, lastName, userName, password) {
    var userDetail = { firstName, lastName, userName, password };
    var user = new User(userDetail);
    return user.save();
}
function positionCreate(lon, lat, userId, keep) {
    var posDetail = { user: userId, loc: { coordinates: [lon, lat] } };
    if (keep) {
        posDetail.created = "2022-09-25T20:40:21.899Z";
    }
    var position = new Position(posDetail);
    return position.save();
}