require("../dbSetup.js");
const expect = require("chai").expect;
var facade = require("../facades/dbFacade")
var User = require("../models/user")


// Clean db 
before(async function() {
    await User.remove({});
});

describe("Testing dbFacade", function(){
    describe("Add two new Users",function(){
        it("Should add Kurt Wonnegut and Bo Lemmingsen", async function(){
            var userPromises = [
                facade.addUser("Kurt", "Wonnegut", "kw", "passw0rd"),
                facade.addUser("Bo", "Lemmingsen", "bl", "654321")
            ];
            var users = await Promise.all(userPromises);
            // Getting all users
            var getUsers = await User.find({}).exec();

            expect(getUsers.length).to.be.equal(2);
        });
    });
    describe("Add job to user", function(){
        it("Should add Blogger at Time to Kurts job", async function(){
            // Get user Kurt
            var kurt = await User.findOne({userName: "kw"}).exec();
            // Function which adds a job to the mongoDB
            await facade.addJobToUser(kurt._id, "Blogger", "Time", "Time.com");
            // Update user Kurt
            kurt = await User.findOne({userName: "kw"}).exec();

            expect(kurt.job[0].type).to.be.equal("Blogger");

        })
    })
});
/* 
// Clean tests from db
after(async function() {
    await User.remove({});
});
*/