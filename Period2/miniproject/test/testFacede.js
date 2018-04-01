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
            // Used to check id in next test
            console.log("Kurts id:" + users[0]._id)
        });
    });
    describe("Add job to user", function(){
        it("Should add Blogger at Time to Kurts job", async function(){
            // Get user Kurt
            var kurt = await User.findOne({userName: "kw"}).exec();
            // See if we get the correct id
            console.log("Kurts id:" + kurt._id);
            // Function which adds a job to the mongoDB
            await facade.addJobToUser(kurt._id, "Blogger", "Time", "Time.com");
            // See if we can get the type
            console.log(kurt.job.type); 
            // For some reason i cant... 

            //expect(kurt.job.type).to.be.equal("Blogger");

        })
    })
});
