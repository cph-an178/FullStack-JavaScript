var express = require("express");
var app = express();

//add your content here

app.listen(3000,function(){
  console.log("Server started, listening on: "+3000);
})

app.use("/api/calculator/:operation/:n1/:n2", function(req,res,next){

})

app.get("/api/calculator/*",function(req,res){
    var calculatorRequest = {
        operation: req.params.operation,
        n1: Number(req.params.n1),
        n2: Number(req.params.n2)
      }
})