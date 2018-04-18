require("./dbSetup.js");

var User = require("./models/user");
var LocationBlog = require("./models/locationBlog");
var Position = require("./models/position");

function userCreate(firstName, lastName, userName, password, type, company, companyUrl) {
  var job = [{ type, company, companyUrl }];
  var userDetail = { firstName, lastName, userName, password, job };
  var user = new User(userDetail);
  return user.save();
}

function positionCreator(lon, lat, userId, keep) {
  var posDetail = { user: userId, loc: { coordinates: [lon, lat] } };
  if(keep) {
    posDetail.created = "2022-09-25T20:40:21.899Z"; 
  }
  var position = new Position(posDetail);
  return position.save();
}

function LocationBlogCreator(info, author, longitude, latitude) {
  var LocationBlogDetail = { info, pos: { longitude, latitude }, author };
  var blog = new LocationBlog(LocationBlogDetail);
  return blog.save()
}
async function createUser() {
  await User.remove({});
  await Position.remove({});
  await LocationBlog.remove({});

  var userPromises = [
    userCreate("Kim", "Bo", "kim1", "atest"),
    userCreate("Kenny", "Torvesen", "TK", "ctest", "xxx", "comp", "comp.url"),
    userCreate("Filip", "Jensen", "F1l1p", "ctest", "xxx", "comp", "comp.url"),
    userCreate("Casper", "Ib", "CasNas", "ctest", "xxx", "comp", "comp.url"),
    userCreate("Jens", "Nomme", "JeNs", "ctest", "xxx", "comp", "comp.url")
  ]
  var users = await Promise.all(userPromises)
  //console.log(users)

  var posPromises = [
    positionCreator(156, 26, users[0]._id),
    positionCreator(65, 102, users[1]._id),
    positionCreator(53, 98, users[2]._id),
    positionCreator(2, 264, users[3]._id),
    positionCreator(42, 178, users[4]._id),
  ]
  var positions = await Promise.all(posPromises)
  //console.log(positions)
  var blogPromises = [
    LocationBlogCreator("Cool Lake", users[0]._id, 252, 43),
    LocationBlogCreator("Cool Moutain", users[0]._id, 105, 251),
    LocationBlogCreator("Cool McD", users[0]._id, 75, 185),
    LocationBlogCreator("Dissapointing Hill", users[3]._id, 31, 38)
  ]
  var blogs = await Promise.all(blogPromises);
  //console.log(blogs)
}
// createUser();
async function createUserAndPos() {
  await User.remove({});
  await Position.remove({});
  await LocationBlog.remove({});

  var userPromises = [
    userCreate("Kurt", "Wonnegut", "Runner1", "atest"),
    userCreate("Kenny", "Torvesen", "Sailor1", "btest", "Writer", "Time Magazine", "Time.com"),
    userCreate("Filip", "Mikkelsen", "Runner", "ctest", "Firefighter", "Fire Corp", "FireSaveUs.com"),
    userCreate("Casper", "Peterson", "Sailor2", "dtest", "Cop", "Police", "GOV.com"),
    userCreate("Jens", "Jensen", "Tester", "etest", "Tester", "Testing", "Unit.Test")
  ]
  var users = await Promise.all(userPromises)
  //console.log(users)

  var posPromises = [
    positionCreator(12.562179565429688, 55.79143827447144, users[0]._id, true),
    positionCreator(12.487678527832031, 55.77386963550729, users[1]._id, true),
    positionCreator(12.572479248046875, 55.69277766693856, users[3]._id, true),
    positionCreator(12.523040771484375, 55.71512134495494, users[2]._id, true),
  ]
  var positions = await Promise.all(posPromises)
};
createUserAndPos();

/*
.then(user => {
  console.log("########  USER  ########");
  console.log(user);
  
  LocationBlogCreator("Cool Place",user._id,26,148)
  .then(blog => {
   console.log("############  BLOG ############\n");
   console.log(blog)})
  .catch(err=> console.log(err));

  positionCreator(156,26,user._id)
  .then(p => {
    console.log("########  POSITION ########\n");
    console.log(p);
  });
})
.catch(err=>console.log(err.message))
*/