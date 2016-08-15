var express = require("express"); 

var app = express(); 

// order matters of routes! 

// "/" => hi there
app.get("/", function(req, res) {
    res.send("hi there!!!");
});

// "/bye" => goodbye 
app.get("/bye", function(req, res){
   res.send("Goodbye!!"); 
});


// "/dog" => meow 
app.get("/dog", function(req,res){
   res.send('Meow'); 
});


app.get("/r/:subredditName", function(req, res){
   console.log(req.params);
   var subreddit = req.params.subredditName;
   res.send("welcome to the " + subreddit.toUpperCase() + " subreddit");
});

app.get("/r/:subreddit/comments/:id/:title/", function(req, res){
   console.log(req.params);
   res.send("welcome to comments page!");
});

app.get("*", function(req,res){
   res.send('You are a star!!!'); 
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("server has started!!");
}); 