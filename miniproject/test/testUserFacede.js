const expect = require("chai").expect;
const dbSetup = require("../dbSetup.js");

var userFacade = require("../facades/userFacade");
var User = require("../models/user")

let connection = null;
describe("Testing UserFacade", function() {

    before(async function() {
        this.timeout(require("../dbSettings").MOCHA_TEST_TIMEOUT);
        dbSetup.setDbUri(require("../dbSettings").TEST_DB_URI);
        connection = await dbSetup.connect();
    })

    beforeEach(async function () {
        // Clearing Users and LocationBlogs from the database
        await User.remove({});
        // Adding two users to the database
        var userPromises = [
            userCreate("Kurt", "Wonnegut", "Kw", "1234"),
            userCreate("Bo", "Lemmingsen", "bl", "654321")
        ];
        var users = await Promise.all(userPromises);
    });

    it("Add a new User", async function () {
        var userPromise = userFacade.addUser("Ib", "Jensen", "ij", "kodeord");
        var user = await Promise.race([userPromise]);
        // Getting all users
        var getUsers = await User.find({}).exec();
        // There is two default useres so we know our new one is the 
        // third in the array
        expect(getUsers[2].firstName).to.be.equal("Ib");
    });
    it("Add job to user", async function () {
        // Get user Kurt
        var user = await User.findOne({ userName: "Kw" }).exec();
        // Adding job to Kurt
        await userFacade.addJobToUser(user._id, "Blogger", "Time", "Time.com");
        //Update user Kurt
        user = await User.findOne({ userName: "Kw" }).exec();

        expect(user.job[0].type).to.be.equal("Blogger");
    });
    it("Find all users", async function () {
        // We know that there is two default users
        var getAllUsers = await userFacade.findAllUsers();
        expect(getAllUsers.length).to.be.equal(2);
    });
    it("Find user by username", async function () {
        // We know that Kurts username is Kw
        var user = await userFacade.findByUsername("Kw");
        expect(user.firstName).to.be.equal("Kurt")
    });
    it("Find user by id", async function () {
        // First we need to get his id
        var user = await User.findOne({ userName: "bl" }).exec();
        var id = user._id;
        // Now we set user to null so we 
        user = null;
        // Now we try to find the user by id
        user = await userFacade.findById(id);
        expect(user.firstName).to.be.equal("Bo");
    })
});

// Fucntion for user and LocationBlog Create for the beforeEact
function userCreate(firstName, lastName, userName, password) {
    var userDetail = { firstName, lastName, userName, password };
    var user = new User(userDetail);
    return user.save();
}
