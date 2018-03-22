var mongoose = require('mongoose');
// Connection String to mLab mongoDB with user and password
const dbURI = "mongodb://alex:123456@ds027505.mlab.com:27505/miniproject";
mongoose.connect(dbURI);

mongoose.connection.on('connected', function () {  
  console.log('Mongoose default connection open to ' + dbURI);
}); 

// If the connection throws an error
mongoose.connection.on('error',function (err) {  
  console.log('Mongoose default connection error: ' + err);
}); 
