var express = require("express"); 
var bodyParser = require("body-parser");
var app = express(); 

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

 var friends = ["tony", "lily", "nina", "alex"];

app.get("/", function(req, res) {
    res.render("home"); 
});

app.get("/friends", function(req, res) {
  
   res.render("friends", { friends: friends }); 
});

app.post("/addfriend", function(req, res) {
    var friend = req.body.newfriend; 
    friends.push(friend);
    res.redirect("friends");
});

app.listen(process.env.PORT, process.env.IP, function () {
   console.log("server is running..."); 
});