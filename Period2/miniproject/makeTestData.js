require("./dbSetup.js");

var User = require("./models/user");
var LocationBlog = require("./models/locationBlog");
var Position = require("./models/position");

 function userCreate(firstName,lastName,userName,password,type,company,companyUrl){
  var job = [{type,company,companyUrl},{type,company,companyUrl}];
  var userDetail = {firstName,lastName,userName,password,job};
  console.log("sldfjaslkjflska")
  var user = new User(userDetail);
  return user.save();
} 

function positionCreator(lon,lat,userId){
  var posDetail = {user:userId,loc:{coordinates:[lon,lat]}};
  var position = new Position(posDetail);
  return position.save();
}

function LocationBlogCreator(info, author, longitude, latitude) {
  var LocationBlogDetail = { info, pos: { longitude, latitude }, author };
  var blog = new LocationBlog(LocationBlogDetail);
  return blog.save()
}

userCreate("a","b","annb","test","xxx","comp","comp.url")
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