require("../dbSetup.js");
var facade = require("../facades/dbFacade")

const expect = require("chai").expect;

describe("Test of addUser", function(){
    it("Add user to mLab mongoDB and return user promise", function() {
        expect(facade.addUser("Kim","Bo","kim_bo","password")).to.be.equal
    })
})
